const axios = require('axios');
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const GITHUB_API_KEY = process.env.GITHUB_API_KEY;
const GITHUB_API_URL = 'https://api.github.com';

async function getGitRepoStats(repo) {
  if (!repo) throw new Error('Repository name is required');
  const headers = {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
    'User-Agent': 'threejs-portfolio-backend',
    Accept: 'application/vnd.github+json',
  };

  // Get repo metadata to find default branch
  const repoMetaRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}`, { headers });
  const defaultBranch = repoMetaRes.data.default_branch;

  // Get total commits using pagination (efficient method)
  let totalCommits = 0;
  try {
    const commitsRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}/commits`, {
      headers,
      params: { sha: defaultBranch, per_page: 1 }
    });
    const linkHeader = commitsRes.headers['link'];
    if (linkHeader) {
      // Parse last page number from Link header
      const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
      if (match) {
        totalCommits = parseInt(match[1], 10);
      } else {
        totalCommits = 1; 
      }
    } else {
      totalCommits = Array.isArray(commitsRes.data) ? commitsRes.data.length : 1;
    }
  } catch (err) {
    totalCommits = 0;
  }

  // Get all branches
  const branchesRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}/branches`, { headers, params: { per_page: 100 } });
  const branches = branchesRes.data;
  const numberOfBranches = branches.length;

  // Get latest 5 commits from each branch, aggregate unique commits
  const commitMap = new Map();
  for (const branch of branches) {
    const branchName = branch.name;
    const commitsRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}/commits`, {
      headers,
      params: { sha: branchName, per_page: 5 }
    });
    for (const commit of commitsRes.data) {
      commitMap.set(commit.sha, commit);
    }
  }
  const allCommits = Array.from(commitMap.values());

  // Sort all unique commits by date (descending)
  allCommits.sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
  const latest5 = allCommits.slice(0, 5).map(commit => ({
    message: commit.commit.message,
    timeAgo: dayjs(commit.commit.author.date).fromNow(),
  }));

  // Get languages used
  const languagesRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}/languages`, { headers });
  const languagesData = languagesRes.data;
  const languages = Object.keys(languagesData);

  // Calculate language percentages
  const totalBytes = Object.values(languagesData).reduce((a, b) => a + b, 0);
  const languagePercentages = {};
  for (const [lang, bytes] of Object.entries(languagesData)) {
    languagePercentages[lang] = totalBytes > 0 ? ((bytes / totalBytes) * 100).toFixed(2) : "0.00";
  }

  // Get commits per week (last year) with retry logic
  let commitsPerWeek = [];
  let weeks = [];
  let attempts = 0;
  const maxAttempts = 5;
  const delay = ms => new Promise(res => setTimeout(res, ms));

  while (attempts < maxAttempts) {
    const statsRes = await axios.get(`${GITHUB_API_URL}/repos/${repo}/stats/commit_activity`, { headers });
    weeks = statsRes.data;
    if (Array.isArray(weeks) && weeks.length > 0) {
      commitsPerWeek = weeks.map(week => week.total);
      break;
    }
    // Wait 1 second before retrying (githup api has a weird bug where it returns an empty array sometimes....bruh)
    await delay(1000);
    attempts++;
  }

  return {
    totalCommits,
    latest5Commits: latest5,
    languages,
    languagePercentages,
    commitsPerWeek,
    numberOfBranches,
  };
}

module.exports = { getGitRepoStats }; 