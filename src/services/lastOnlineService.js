const LAST_ONLINE_API_URL = process.env.LAST_ONLINE_API_URL;

async function getLastOnline() {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  const response = await fetch(LAST_ONLINE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch last online data');
  }
  return await response.json();
}

module.exports = { getLastOnline }; 