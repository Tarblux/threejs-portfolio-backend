
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model chess_games
 * 
 */
export type chess_games = $Result.DefaultSelection<Prisma.$chess_gamesPayload>
/**
 * Model chess_games_dev
 * 
 */
export type chess_games_dev = $Result.DefaultSelection<Prisma.$chess_games_devPayload>
/**
 * Model chess_ratings
 * 
 */
export type chess_ratings = $Result.DefaultSelection<Prisma.$chess_ratingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const game_result: {
  win: 'win',
  loss: 'loss',
  draw: 'draw',
  aborted: 'aborted',
  timeout: 'timeout'
};

export type game_result = (typeof game_result)[keyof typeof game_result]


export const piece_color: {
  white: 'white',
  black: 'black'
};

export type piece_color = (typeof piece_color)[keyof typeof piece_color]


export const rating_type: {
  bullet: 'bullet',
  blitz: 'blitz',
  rapid: 'rapid',
  puzzle: 'puzzle'
};

export type rating_type = (typeof rating_type)[keyof typeof rating_type]


export const time_control_type: {
  bullet: 'bullet',
  blitz: 'blitz',
  rapid: 'rapid',
  classical: 'classical'
};

export type time_control_type = (typeof time_control_type)[keyof typeof time_control_type]

}

export type game_result = $Enums.game_result

export const game_result: typeof $Enums.game_result

export type piece_color = $Enums.piece_color

export const piece_color: typeof $Enums.piece_color

export type rating_type = $Enums.rating_type

export const rating_type: typeof $Enums.rating_type

export type time_control_type = $Enums.time_control_type

export const time_control_type: typeof $Enums.time_control_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chess_games
 * const chess_games = await prisma.chess_games.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chess_games
   * const chess_games = await prisma.chess_games.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chess_games`: Exposes CRUD operations for the **chess_games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chess_games
    * const chess_games = await prisma.chess_games.findMany()
    * ```
    */
  get chess_games(): Prisma.chess_gamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chess_games_dev`: Exposes CRUD operations for the **chess_games_dev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chess_games_devs
    * const chess_games_devs = await prisma.chess_games_dev.findMany()
    * ```
    */
  get chess_games_dev(): Prisma.chess_games_devDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chess_ratings`: Exposes CRUD operations for the **chess_ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chess_ratings
    * const chess_ratings = await prisma.chess_ratings.findMany()
    * ```
    */
  get chess_ratings(): Prisma.chess_ratingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    chess_games: 'chess_games',
    chess_games_dev: 'chess_games_dev',
    chess_ratings: 'chess_ratings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chess_games" | "chess_games_dev" | "chess_ratings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chess_games: {
        payload: Prisma.$chess_gamesPayload<ExtArgs>
        fields: Prisma.chess_gamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chess_gamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chess_gamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          findFirst: {
            args: Prisma.chess_gamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chess_gamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          findMany: {
            args: Prisma.chess_gamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>[]
          }
          create: {
            args: Prisma.chess_gamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          createMany: {
            args: Prisma.chess_gamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chess_gamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>[]
          }
          delete: {
            args: Prisma.chess_gamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          update: {
            args: Prisma.chess_gamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          deleteMany: {
            args: Prisma.chess_gamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chess_gamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chess_gamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>[]
          }
          upsert: {
            args: Prisma.chess_gamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_gamesPayload>
          }
          aggregate: {
            args: Prisma.Chess_gamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChess_games>
          }
          groupBy: {
            args: Prisma.chess_gamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chess_gamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.chess_gamesCountArgs<ExtArgs>
            result: $Utils.Optional<Chess_gamesCountAggregateOutputType> | number
          }
        }
      }
      chess_games_dev: {
        payload: Prisma.$chess_games_devPayload<ExtArgs>
        fields: Prisma.chess_games_devFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chess_games_devFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chess_games_devFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          findFirst: {
            args: Prisma.chess_games_devFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chess_games_devFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          findMany: {
            args: Prisma.chess_games_devFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>[]
          }
          create: {
            args: Prisma.chess_games_devCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          createMany: {
            args: Prisma.chess_games_devCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chess_games_devCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>[]
          }
          delete: {
            args: Prisma.chess_games_devDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          update: {
            args: Prisma.chess_games_devUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          deleteMany: {
            args: Prisma.chess_games_devDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chess_games_devUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chess_games_devUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>[]
          }
          upsert: {
            args: Prisma.chess_games_devUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_games_devPayload>
          }
          aggregate: {
            args: Prisma.Chess_games_devAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChess_games_dev>
          }
          groupBy: {
            args: Prisma.chess_games_devGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chess_games_devGroupByOutputType>[]
          }
          count: {
            args: Prisma.chess_games_devCountArgs<ExtArgs>
            result: $Utils.Optional<Chess_games_devCountAggregateOutputType> | number
          }
        }
      }
      chess_ratings: {
        payload: Prisma.$chess_ratingsPayload<ExtArgs>
        fields: Prisma.chess_ratingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chess_ratingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chess_ratingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          findFirst: {
            args: Prisma.chess_ratingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chess_ratingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          findMany: {
            args: Prisma.chess_ratingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>[]
          }
          create: {
            args: Prisma.chess_ratingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          createMany: {
            args: Prisma.chess_ratingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chess_ratingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>[]
          }
          delete: {
            args: Prisma.chess_ratingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          update: {
            args: Prisma.chess_ratingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          deleteMany: {
            args: Prisma.chess_ratingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chess_ratingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chess_ratingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>[]
          }
          upsert: {
            args: Prisma.chess_ratingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chess_ratingsPayload>
          }
          aggregate: {
            args: Prisma.Chess_ratingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChess_ratings>
          }
          groupBy: {
            args: Prisma.chess_ratingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chess_ratingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.chess_ratingsCountArgs<ExtArgs>
            result: $Utils.Optional<Chess_ratingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chess_games?: chess_gamesOmit
    chess_games_dev?: chess_games_devOmit
    chess_ratings?: chess_ratingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model chess_games
   */

  export type AggregateChess_games = {
    _count: Chess_gamesCountAggregateOutputType | null
    _avg: Chess_gamesAvgAggregateOutputType | null
    _sum: Chess_gamesSumAggregateOutputType | null
    _min: Chess_gamesMinAggregateOutputType | null
    _max: Chess_gamesMaxAggregateOutputType | null
  }

  export type Chess_gamesAvgAggregateOutputType = {
    id: number | null
    my_rating: number | null
    opponent_rating: number | null
    move_count: number | null
  }

  export type Chess_gamesSumAggregateOutputType = {
    id: number | null
    my_rating: number | null
    opponent_rating: number | null
    move_count: number | null
  }

  export type Chess_gamesMinAggregateOutputType = {
    id: number | null
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
  }

  export type Chess_gamesMaxAggregateOutputType = {
    id: number | null
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
  }

  export type Chess_gamesCountAggregateOutputType = {
    id: number
    game_id: number
    date: number
    game_url: number
    time_control: number
    time: number
    my_color: number
    my_rating: number
    opponent_name: number
    opponent_url: number
    opponent_rating: number
    opponent_color: number
    opponent_flag: number
    result: number
    move_count: number
    _all: number
  }


  export type Chess_gamesAvgAggregateInputType = {
    id?: true
    my_rating?: true
    opponent_rating?: true
    move_count?: true
  }

  export type Chess_gamesSumAggregateInputType = {
    id?: true
    my_rating?: true
    opponent_rating?: true
    move_count?: true
  }

  export type Chess_gamesMinAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
  }

  export type Chess_gamesMaxAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
  }

  export type Chess_gamesCountAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
    _all?: true
  }

  export type Chess_gamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_games to aggregate.
     */
    where?: chess_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games to fetch.
     */
    orderBy?: chess_gamesOrderByWithRelationInput | chess_gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chess_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chess_games
    **/
    _count?: true | Chess_gamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chess_gamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chess_gamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chess_gamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chess_gamesMaxAggregateInputType
  }

  export type GetChess_gamesAggregateType<T extends Chess_gamesAggregateArgs> = {
        [P in keyof T & keyof AggregateChess_games]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChess_games[P]>
      : GetScalarType<T[P], AggregateChess_games[P]>
  }




  export type chess_gamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chess_gamesWhereInput
    orderBy?: chess_gamesOrderByWithAggregationInput | chess_gamesOrderByWithAggregationInput[]
    by: Chess_gamesScalarFieldEnum[] | Chess_gamesScalarFieldEnum
    having?: chess_gamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chess_gamesCountAggregateInputType | true
    _avg?: Chess_gamesAvgAggregateInputType
    _sum?: Chess_gamesSumAggregateInputType
    _min?: Chess_gamesMinAggregateInputType
    _max?: Chess_gamesMaxAggregateInputType
  }

  export type Chess_gamesGroupByOutputType = {
    id: number
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
    _count: Chess_gamesCountAggregateOutputType | null
    _avg: Chess_gamesAvgAggregateOutputType | null
    _sum: Chess_gamesSumAggregateOutputType | null
    _min: Chess_gamesMinAggregateOutputType | null
    _max: Chess_gamesMaxAggregateOutputType | null
  }

  type GetChess_gamesGroupByPayload<T extends chess_gamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chess_gamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chess_gamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chess_gamesGroupByOutputType[P]>
            : GetScalarType<T[P], Chess_gamesGroupByOutputType[P]>
        }
      >
    >


  export type chess_gamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games"]>

  export type chess_gamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games"]>

  export type chess_gamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games"]>

  export type chess_gamesSelectScalar = {
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }

  export type chess_gamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "game_id" | "date" | "game_url" | "time_control" | "time" | "my_color" | "my_rating" | "opponent_name" | "opponent_url" | "opponent_rating" | "opponent_color" | "opponent_flag" | "result" | "move_count", ExtArgs["result"]["chess_games"]>

  export type $chess_gamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chess_games"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: string | null
      date: Date | null
      game_url: string | null
      time_control: string | null
      time: string | null
      my_color: string | null
      my_rating: number | null
      opponent_name: string | null
      opponent_url: string | null
      opponent_rating: number | null
      opponent_color: string | null
      opponent_flag: string | null
      result: string | null
      move_count: number | null
    }, ExtArgs["result"]["chess_games"]>
    composites: {}
  }

  type chess_gamesGetPayload<S extends boolean | null | undefined | chess_gamesDefaultArgs> = $Result.GetResult<Prisma.$chess_gamesPayload, S>

  type chess_gamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chess_gamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chess_gamesCountAggregateInputType | true
    }

  export interface chess_gamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chess_games'], meta: { name: 'chess_games' } }
    /**
     * Find zero or one Chess_games that matches the filter.
     * @param {chess_gamesFindUniqueArgs} args - Arguments to find a Chess_games
     * @example
     * // Get one Chess_games
     * const chess_games = await prisma.chess_games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chess_gamesFindUniqueArgs>(args: SelectSubset<T, chess_gamesFindUniqueArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chess_games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chess_gamesFindUniqueOrThrowArgs} args - Arguments to find a Chess_games
     * @example
     * // Get one Chess_games
     * const chess_games = await prisma.chess_games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chess_gamesFindUniqueOrThrowArgs>(args: SelectSubset<T, chess_gamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesFindFirstArgs} args - Arguments to find a Chess_games
     * @example
     * // Get one Chess_games
     * const chess_games = await prisma.chess_games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chess_gamesFindFirstArgs>(args?: SelectSubset<T, chess_gamesFindFirstArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesFindFirstOrThrowArgs} args - Arguments to find a Chess_games
     * @example
     * // Get one Chess_games
     * const chess_games = await prisma.chess_games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chess_gamesFindFirstOrThrowArgs>(args?: SelectSubset<T, chess_gamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chess_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chess_games
     * const chess_games = await prisma.chess_games.findMany()
     * 
     * // Get first 10 Chess_games
     * const chess_games = await prisma.chess_games.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chess_gamesWithIdOnly = await prisma.chess_games.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chess_gamesFindManyArgs>(args?: SelectSubset<T, chess_gamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chess_games.
     * @param {chess_gamesCreateArgs} args - Arguments to create a Chess_games.
     * @example
     * // Create one Chess_games
     * const Chess_games = await prisma.chess_games.create({
     *   data: {
     *     // ... data to create a Chess_games
     *   }
     * })
     * 
     */
    create<T extends chess_gamesCreateArgs>(args: SelectSubset<T, chess_gamesCreateArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chess_games.
     * @param {chess_gamesCreateManyArgs} args - Arguments to create many Chess_games.
     * @example
     * // Create many Chess_games
     * const chess_games = await prisma.chess_games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chess_gamesCreateManyArgs>(args?: SelectSubset<T, chess_gamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chess_games and returns the data saved in the database.
     * @param {chess_gamesCreateManyAndReturnArgs} args - Arguments to create many Chess_games.
     * @example
     * // Create many Chess_games
     * const chess_games = await prisma.chess_games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chess_games and only return the `id`
     * const chess_gamesWithIdOnly = await prisma.chess_games.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chess_gamesCreateManyAndReturnArgs>(args?: SelectSubset<T, chess_gamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chess_games.
     * @param {chess_gamesDeleteArgs} args - Arguments to delete one Chess_games.
     * @example
     * // Delete one Chess_games
     * const Chess_games = await prisma.chess_games.delete({
     *   where: {
     *     // ... filter to delete one Chess_games
     *   }
     * })
     * 
     */
    delete<T extends chess_gamesDeleteArgs>(args: SelectSubset<T, chess_gamesDeleteArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chess_games.
     * @param {chess_gamesUpdateArgs} args - Arguments to update one Chess_games.
     * @example
     * // Update one Chess_games
     * const chess_games = await prisma.chess_games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chess_gamesUpdateArgs>(args: SelectSubset<T, chess_gamesUpdateArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chess_games.
     * @param {chess_gamesDeleteManyArgs} args - Arguments to filter Chess_games to delete.
     * @example
     * // Delete a few Chess_games
     * const { count } = await prisma.chess_games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chess_gamesDeleteManyArgs>(args?: SelectSubset<T, chess_gamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chess_games
     * const chess_games = await prisma.chess_games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chess_gamesUpdateManyArgs>(args: SelectSubset<T, chess_gamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_games and returns the data updated in the database.
     * @param {chess_gamesUpdateManyAndReturnArgs} args - Arguments to update many Chess_games.
     * @example
     * // Update many Chess_games
     * const chess_games = await prisma.chess_games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chess_games and only return the `id`
     * const chess_gamesWithIdOnly = await prisma.chess_games.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chess_gamesUpdateManyAndReturnArgs>(args: SelectSubset<T, chess_gamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chess_games.
     * @param {chess_gamesUpsertArgs} args - Arguments to update or create a Chess_games.
     * @example
     * // Update or create a Chess_games
     * const chess_games = await prisma.chess_games.upsert({
     *   create: {
     *     // ... data to create a Chess_games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chess_games we want to update
     *   }
     * })
     */
    upsert<T extends chess_gamesUpsertArgs>(args: SelectSubset<T, chess_gamesUpsertArgs<ExtArgs>>): Prisma__chess_gamesClient<$Result.GetResult<Prisma.$chess_gamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chess_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesCountArgs} args - Arguments to filter Chess_games to count.
     * @example
     * // Count the number of Chess_games
     * const count = await prisma.chess_games.count({
     *   where: {
     *     // ... the filter for the Chess_games we want to count
     *   }
     * })
    **/
    count<T extends chess_gamesCountArgs>(
      args?: Subset<T, chess_gamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chess_gamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chess_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chess_gamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chess_gamesAggregateArgs>(args: Subset<T, Chess_gamesAggregateArgs>): Prisma.PrismaPromise<GetChess_gamesAggregateType<T>>

    /**
     * Group by Chess_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_gamesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chess_gamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chess_gamesGroupByArgs['orderBy'] }
        : { orderBy?: chess_gamesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chess_gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChess_gamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chess_games model
   */
  readonly fields: chess_gamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chess_games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chess_gamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chess_games model
   */
  interface chess_gamesFieldRefs {
    readonly id: FieldRef<"chess_games", 'Int'>
    readonly game_id: FieldRef<"chess_games", 'String'>
    readonly date: FieldRef<"chess_games", 'DateTime'>
    readonly game_url: FieldRef<"chess_games", 'String'>
    readonly time_control: FieldRef<"chess_games", 'String'>
    readonly time: FieldRef<"chess_games", 'String'>
    readonly my_color: FieldRef<"chess_games", 'String'>
    readonly my_rating: FieldRef<"chess_games", 'Int'>
    readonly opponent_name: FieldRef<"chess_games", 'String'>
    readonly opponent_url: FieldRef<"chess_games", 'String'>
    readonly opponent_rating: FieldRef<"chess_games", 'Int'>
    readonly opponent_color: FieldRef<"chess_games", 'String'>
    readonly opponent_flag: FieldRef<"chess_games", 'String'>
    readonly result: FieldRef<"chess_games", 'String'>
    readonly move_count: FieldRef<"chess_games", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chess_games findUnique
   */
  export type chess_gamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter, which chess_games to fetch.
     */
    where: chess_gamesWhereUniqueInput
  }

  /**
   * chess_games findUniqueOrThrow
   */
  export type chess_gamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter, which chess_games to fetch.
     */
    where: chess_gamesWhereUniqueInput
  }

  /**
   * chess_games findFirst
   */
  export type chess_gamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter, which chess_games to fetch.
     */
    where?: chess_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games to fetch.
     */
    orderBy?: chess_gamesOrderByWithRelationInput | chess_gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_games.
     */
    cursor?: chess_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_games.
     */
    distinct?: Chess_gamesScalarFieldEnum | Chess_gamesScalarFieldEnum[]
  }

  /**
   * chess_games findFirstOrThrow
   */
  export type chess_gamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter, which chess_games to fetch.
     */
    where?: chess_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games to fetch.
     */
    orderBy?: chess_gamesOrderByWithRelationInput | chess_gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_games.
     */
    cursor?: chess_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_games.
     */
    distinct?: Chess_gamesScalarFieldEnum | Chess_gamesScalarFieldEnum[]
  }

  /**
   * chess_games findMany
   */
  export type chess_gamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter, which chess_games to fetch.
     */
    where?: chess_gamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games to fetch.
     */
    orderBy?: chess_gamesOrderByWithRelationInput | chess_gamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chess_games.
     */
    cursor?: chess_gamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games.
     */
    skip?: number
    distinct?: Chess_gamesScalarFieldEnum | Chess_gamesScalarFieldEnum[]
  }

  /**
   * chess_games create
   */
  export type chess_gamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * The data needed to create a chess_games.
     */
    data?: XOR<chess_gamesCreateInput, chess_gamesUncheckedCreateInput>
  }

  /**
   * chess_games createMany
   */
  export type chess_gamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chess_games.
     */
    data: chess_gamesCreateManyInput | chess_gamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_games createManyAndReturn
   */
  export type chess_gamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * The data used to create many chess_games.
     */
    data: chess_gamesCreateManyInput | chess_gamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_games update
   */
  export type chess_gamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * The data needed to update a chess_games.
     */
    data: XOR<chess_gamesUpdateInput, chess_gamesUncheckedUpdateInput>
    /**
     * Choose, which chess_games to update.
     */
    where: chess_gamesWhereUniqueInput
  }

  /**
   * chess_games updateMany
   */
  export type chess_gamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chess_games.
     */
    data: XOR<chess_gamesUpdateManyMutationInput, chess_gamesUncheckedUpdateManyInput>
    /**
     * Filter which chess_games to update
     */
    where?: chess_gamesWhereInput
    /**
     * Limit how many chess_games to update.
     */
    limit?: number
  }

  /**
   * chess_games updateManyAndReturn
   */
  export type chess_gamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * The data used to update chess_games.
     */
    data: XOR<chess_gamesUpdateManyMutationInput, chess_gamesUncheckedUpdateManyInput>
    /**
     * Filter which chess_games to update
     */
    where?: chess_gamesWhereInput
    /**
     * Limit how many chess_games to update.
     */
    limit?: number
  }

  /**
   * chess_games upsert
   */
  export type chess_gamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * The filter to search for the chess_games to update in case it exists.
     */
    where: chess_gamesWhereUniqueInput
    /**
     * In case the chess_games found by the `where` argument doesn't exist, create a new chess_games with this data.
     */
    create: XOR<chess_gamesCreateInput, chess_gamesUncheckedCreateInput>
    /**
     * In case the chess_games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chess_gamesUpdateInput, chess_gamesUncheckedUpdateInput>
  }

  /**
   * chess_games delete
   */
  export type chess_gamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
    /**
     * Filter which chess_games to delete.
     */
    where: chess_gamesWhereUniqueInput
  }

  /**
   * chess_games deleteMany
   */
  export type chess_gamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_games to delete
     */
    where?: chess_gamesWhereInput
    /**
     * Limit how many chess_games to delete.
     */
    limit?: number
  }

  /**
   * chess_games without action
   */
  export type chess_gamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games
     */
    select?: chess_gamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games
     */
    omit?: chess_gamesOmit<ExtArgs> | null
  }


  /**
   * Model chess_games_dev
   */

  export type AggregateChess_games_dev = {
    _count: Chess_games_devCountAggregateOutputType | null
    _avg: Chess_games_devAvgAggregateOutputType | null
    _sum: Chess_games_devSumAggregateOutputType | null
    _min: Chess_games_devMinAggregateOutputType | null
    _max: Chess_games_devMaxAggregateOutputType | null
  }

  export type Chess_games_devAvgAggregateOutputType = {
    id: number | null
    my_rating: number | null
    opponent_rating: number | null
    move_count: number | null
  }

  export type Chess_games_devSumAggregateOutputType = {
    id: number | null
    my_rating: number | null
    opponent_rating: number | null
    move_count: number | null
  }

  export type Chess_games_devMinAggregateOutputType = {
    id: number | null
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
  }

  export type Chess_games_devMaxAggregateOutputType = {
    id: number | null
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
  }

  export type Chess_games_devCountAggregateOutputType = {
    id: number
    game_id: number
    date: number
    game_url: number
    time_control: number
    time: number
    my_color: number
    my_rating: number
    opponent_name: number
    opponent_url: number
    opponent_rating: number
    opponent_color: number
    opponent_flag: number
    result: number
    move_count: number
    _all: number
  }


  export type Chess_games_devAvgAggregateInputType = {
    id?: true
    my_rating?: true
    opponent_rating?: true
    move_count?: true
  }

  export type Chess_games_devSumAggregateInputType = {
    id?: true
    my_rating?: true
    opponent_rating?: true
    move_count?: true
  }

  export type Chess_games_devMinAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
  }

  export type Chess_games_devMaxAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
  }

  export type Chess_games_devCountAggregateInputType = {
    id?: true
    game_id?: true
    date?: true
    game_url?: true
    time_control?: true
    time?: true
    my_color?: true
    my_rating?: true
    opponent_name?: true
    opponent_url?: true
    opponent_rating?: true
    opponent_color?: true
    opponent_flag?: true
    result?: true
    move_count?: true
    _all?: true
  }

  export type Chess_games_devAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_games_dev to aggregate.
     */
    where?: chess_games_devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games_devs to fetch.
     */
    orderBy?: chess_games_devOrderByWithRelationInput | chess_games_devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chess_games_devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games_devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games_devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chess_games_devs
    **/
    _count?: true | Chess_games_devCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chess_games_devAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chess_games_devSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chess_games_devMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chess_games_devMaxAggregateInputType
  }

  export type GetChess_games_devAggregateType<T extends Chess_games_devAggregateArgs> = {
        [P in keyof T & keyof AggregateChess_games_dev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChess_games_dev[P]>
      : GetScalarType<T[P], AggregateChess_games_dev[P]>
  }




  export type chess_games_devGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chess_games_devWhereInput
    orderBy?: chess_games_devOrderByWithAggregationInput | chess_games_devOrderByWithAggregationInput[]
    by: Chess_games_devScalarFieldEnum[] | Chess_games_devScalarFieldEnum
    having?: chess_games_devScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chess_games_devCountAggregateInputType | true
    _avg?: Chess_games_devAvgAggregateInputType
    _sum?: Chess_games_devSumAggregateInputType
    _min?: Chess_games_devMinAggregateInputType
    _max?: Chess_games_devMaxAggregateInputType
  }

  export type Chess_games_devGroupByOutputType = {
    id: number
    game_id: string | null
    date: Date | null
    game_url: string | null
    time_control: string | null
    time: string | null
    my_color: string | null
    my_rating: number | null
    opponent_name: string | null
    opponent_url: string | null
    opponent_rating: number | null
    opponent_color: string | null
    opponent_flag: string | null
    result: string | null
    move_count: number | null
    _count: Chess_games_devCountAggregateOutputType | null
    _avg: Chess_games_devAvgAggregateOutputType | null
    _sum: Chess_games_devSumAggregateOutputType | null
    _min: Chess_games_devMinAggregateOutputType | null
    _max: Chess_games_devMaxAggregateOutputType | null
  }

  type GetChess_games_devGroupByPayload<T extends chess_games_devGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chess_games_devGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chess_games_devGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chess_games_devGroupByOutputType[P]>
            : GetScalarType<T[P], Chess_games_devGroupByOutputType[P]>
        }
      >
    >


  export type chess_games_devSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games_dev"]>

  export type chess_games_devSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games_dev"]>

  export type chess_games_devSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }, ExtArgs["result"]["chess_games_dev"]>

  export type chess_games_devSelectScalar = {
    id?: boolean
    game_id?: boolean
    date?: boolean
    game_url?: boolean
    time_control?: boolean
    time?: boolean
    my_color?: boolean
    my_rating?: boolean
    opponent_name?: boolean
    opponent_url?: boolean
    opponent_rating?: boolean
    opponent_color?: boolean
    opponent_flag?: boolean
    result?: boolean
    move_count?: boolean
  }

  export type chess_games_devOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "game_id" | "date" | "game_url" | "time_control" | "time" | "my_color" | "my_rating" | "opponent_name" | "opponent_url" | "opponent_rating" | "opponent_color" | "opponent_flag" | "result" | "move_count", ExtArgs["result"]["chess_games_dev"]>

  export type $chess_games_devPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chess_games_dev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      game_id: string | null
      date: Date | null
      game_url: string | null
      time_control: string | null
      time: string | null
      my_color: string | null
      my_rating: number | null
      opponent_name: string | null
      opponent_url: string | null
      opponent_rating: number | null
      opponent_color: string | null
      opponent_flag: string | null
      result: string | null
      move_count: number | null
    }, ExtArgs["result"]["chess_games_dev"]>
    composites: {}
  }

  type chess_games_devGetPayload<S extends boolean | null | undefined | chess_games_devDefaultArgs> = $Result.GetResult<Prisma.$chess_games_devPayload, S>

  type chess_games_devCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chess_games_devFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chess_games_devCountAggregateInputType | true
    }

  export interface chess_games_devDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chess_games_dev'], meta: { name: 'chess_games_dev' } }
    /**
     * Find zero or one Chess_games_dev that matches the filter.
     * @param {chess_games_devFindUniqueArgs} args - Arguments to find a Chess_games_dev
     * @example
     * // Get one Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chess_games_devFindUniqueArgs>(args: SelectSubset<T, chess_games_devFindUniqueArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chess_games_dev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chess_games_devFindUniqueOrThrowArgs} args - Arguments to find a Chess_games_dev
     * @example
     * // Get one Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chess_games_devFindUniqueOrThrowArgs>(args: SelectSubset<T, chess_games_devFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_games_dev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devFindFirstArgs} args - Arguments to find a Chess_games_dev
     * @example
     * // Get one Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chess_games_devFindFirstArgs>(args?: SelectSubset<T, chess_games_devFindFirstArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_games_dev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devFindFirstOrThrowArgs} args - Arguments to find a Chess_games_dev
     * @example
     * // Get one Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chess_games_devFindFirstOrThrowArgs>(args?: SelectSubset<T, chess_games_devFindFirstOrThrowArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chess_games_devs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chess_games_devs
     * const chess_games_devs = await prisma.chess_games_dev.findMany()
     * 
     * // Get first 10 Chess_games_devs
     * const chess_games_devs = await prisma.chess_games_dev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chess_games_devWithIdOnly = await prisma.chess_games_dev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chess_games_devFindManyArgs>(args?: SelectSubset<T, chess_games_devFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chess_games_dev.
     * @param {chess_games_devCreateArgs} args - Arguments to create a Chess_games_dev.
     * @example
     * // Create one Chess_games_dev
     * const Chess_games_dev = await prisma.chess_games_dev.create({
     *   data: {
     *     // ... data to create a Chess_games_dev
     *   }
     * })
     * 
     */
    create<T extends chess_games_devCreateArgs>(args: SelectSubset<T, chess_games_devCreateArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chess_games_devs.
     * @param {chess_games_devCreateManyArgs} args - Arguments to create many Chess_games_devs.
     * @example
     * // Create many Chess_games_devs
     * const chess_games_dev = await prisma.chess_games_dev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chess_games_devCreateManyArgs>(args?: SelectSubset<T, chess_games_devCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chess_games_devs and returns the data saved in the database.
     * @param {chess_games_devCreateManyAndReturnArgs} args - Arguments to create many Chess_games_devs.
     * @example
     * // Create many Chess_games_devs
     * const chess_games_dev = await prisma.chess_games_dev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chess_games_devs and only return the `id`
     * const chess_games_devWithIdOnly = await prisma.chess_games_dev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chess_games_devCreateManyAndReturnArgs>(args?: SelectSubset<T, chess_games_devCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chess_games_dev.
     * @param {chess_games_devDeleteArgs} args - Arguments to delete one Chess_games_dev.
     * @example
     * // Delete one Chess_games_dev
     * const Chess_games_dev = await prisma.chess_games_dev.delete({
     *   where: {
     *     // ... filter to delete one Chess_games_dev
     *   }
     * })
     * 
     */
    delete<T extends chess_games_devDeleteArgs>(args: SelectSubset<T, chess_games_devDeleteArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chess_games_dev.
     * @param {chess_games_devUpdateArgs} args - Arguments to update one Chess_games_dev.
     * @example
     * // Update one Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chess_games_devUpdateArgs>(args: SelectSubset<T, chess_games_devUpdateArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chess_games_devs.
     * @param {chess_games_devDeleteManyArgs} args - Arguments to filter Chess_games_devs to delete.
     * @example
     * // Delete a few Chess_games_devs
     * const { count } = await prisma.chess_games_dev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chess_games_devDeleteManyArgs>(args?: SelectSubset<T, chess_games_devDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_games_devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chess_games_devs
     * const chess_games_dev = await prisma.chess_games_dev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chess_games_devUpdateManyArgs>(args: SelectSubset<T, chess_games_devUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_games_devs and returns the data updated in the database.
     * @param {chess_games_devUpdateManyAndReturnArgs} args - Arguments to update many Chess_games_devs.
     * @example
     * // Update many Chess_games_devs
     * const chess_games_dev = await prisma.chess_games_dev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chess_games_devs and only return the `id`
     * const chess_games_devWithIdOnly = await prisma.chess_games_dev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chess_games_devUpdateManyAndReturnArgs>(args: SelectSubset<T, chess_games_devUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chess_games_dev.
     * @param {chess_games_devUpsertArgs} args - Arguments to update or create a Chess_games_dev.
     * @example
     * // Update or create a Chess_games_dev
     * const chess_games_dev = await prisma.chess_games_dev.upsert({
     *   create: {
     *     // ... data to create a Chess_games_dev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chess_games_dev we want to update
     *   }
     * })
     */
    upsert<T extends chess_games_devUpsertArgs>(args: SelectSubset<T, chess_games_devUpsertArgs<ExtArgs>>): Prisma__chess_games_devClient<$Result.GetResult<Prisma.$chess_games_devPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chess_games_devs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devCountArgs} args - Arguments to filter Chess_games_devs to count.
     * @example
     * // Count the number of Chess_games_devs
     * const count = await prisma.chess_games_dev.count({
     *   where: {
     *     // ... the filter for the Chess_games_devs we want to count
     *   }
     * })
    **/
    count<T extends chess_games_devCountArgs>(
      args?: Subset<T, chess_games_devCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chess_games_devCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chess_games_dev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chess_games_devAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chess_games_devAggregateArgs>(args: Subset<T, Chess_games_devAggregateArgs>): Prisma.PrismaPromise<GetChess_games_devAggregateType<T>>

    /**
     * Group by Chess_games_dev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_games_devGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chess_games_devGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chess_games_devGroupByArgs['orderBy'] }
        : { orderBy?: chess_games_devGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chess_games_devGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChess_games_devGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chess_games_dev model
   */
  readonly fields: chess_games_devFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chess_games_dev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chess_games_devClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chess_games_dev model
   */
  interface chess_games_devFieldRefs {
    readonly id: FieldRef<"chess_games_dev", 'Int'>
    readonly game_id: FieldRef<"chess_games_dev", 'String'>
    readonly date: FieldRef<"chess_games_dev", 'DateTime'>
    readonly game_url: FieldRef<"chess_games_dev", 'String'>
    readonly time_control: FieldRef<"chess_games_dev", 'String'>
    readonly time: FieldRef<"chess_games_dev", 'String'>
    readonly my_color: FieldRef<"chess_games_dev", 'String'>
    readonly my_rating: FieldRef<"chess_games_dev", 'Int'>
    readonly opponent_name: FieldRef<"chess_games_dev", 'String'>
    readonly opponent_url: FieldRef<"chess_games_dev", 'String'>
    readonly opponent_rating: FieldRef<"chess_games_dev", 'Int'>
    readonly opponent_color: FieldRef<"chess_games_dev", 'String'>
    readonly opponent_flag: FieldRef<"chess_games_dev", 'String'>
    readonly result: FieldRef<"chess_games_dev", 'String'>
    readonly move_count: FieldRef<"chess_games_dev", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chess_games_dev findUnique
   */
  export type chess_games_devFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter, which chess_games_dev to fetch.
     */
    where: chess_games_devWhereUniqueInput
  }

  /**
   * chess_games_dev findUniqueOrThrow
   */
  export type chess_games_devFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter, which chess_games_dev to fetch.
     */
    where: chess_games_devWhereUniqueInput
  }

  /**
   * chess_games_dev findFirst
   */
  export type chess_games_devFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter, which chess_games_dev to fetch.
     */
    where?: chess_games_devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games_devs to fetch.
     */
    orderBy?: chess_games_devOrderByWithRelationInput | chess_games_devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_games_devs.
     */
    cursor?: chess_games_devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games_devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games_devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_games_devs.
     */
    distinct?: Chess_games_devScalarFieldEnum | Chess_games_devScalarFieldEnum[]
  }

  /**
   * chess_games_dev findFirstOrThrow
   */
  export type chess_games_devFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter, which chess_games_dev to fetch.
     */
    where?: chess_games_devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games_devs to fetch.
     */
    orderBy?: chess_games_devOrderByWithRelationInput | chess_games_devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_games_devs.
     */
    cursor?: chess_games_devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games_devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games_devs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_games_devs.
     */
    distinct?: Chess_games_devScalarFieldEnum | Chess_games_devScalarFieldEnum[]
  }

  /**
   * chess_games_dev findMany
   */
  export type chess_games_devFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter, which chess_games_devs to fetch.
     */
    where?: chess_games_devWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_games_devs to fetch.
     */
    orderBy?: chess_games_devOrderByWithRelationInput | chess_games_devOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chess_games_devs.
     */
    cursor?: chess_games_devWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_games_devs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_games_devs.
     */
    skip?: number
    distinct?: Chess_games_devScalarFieldEnum | Chess_games_devScalarFieldEnum[]
  }

  /**
   * chess_games_dev create
   */
  export type chess_games_devCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * The data needed to create a chess_games_dev.
     */
    data?: XOR<chess_games_devCreateInput, chess_games_devUncheckedCreateInput>
  }

  /**
   * chess_games_dev createMany
   */
  export type chess_games_devCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chess_games_devs.
     */
    data: chess_games_devCreateManyInput | chess_games_devCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_games_dev createManyAndReturn
   */
  export type chess_games_devCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * The data used to create many chess_games_devs.
     */
    data: chess_games_devCreateManyInput | chess_games_devCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_games_dev update
   */
  export type chess_games_devUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * The data needed to update a chess_games_dev.
     */
    data: XOR<chess_games_devUpdateInput, chess_games_devUncheckedUpdateInput>
    /**
     * Choose, which chess_games_dev to update.
     */
    where: chess_games_devWhereUniqueInput
  }

  /**
   * chess_games_dev updateMany
   */
  export type chess_games_devUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chess_games_devs.
     */
    data: XOR<chess_games_devUpdateManyMutationInput, chess_games_devUncheckedUpdateManyInput>
    /**
     * Filter which chess_games_devs to update
     */
    where?: chess_games_devWhereInput
    /**
     * Limit how many chess_games_devs to update.
     */
    limit?: number
  }

  /**
   * chess_games_dev updateManyAndReturn
   */
  export type chess_games_devUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * The data used to update chess_games_devs.
     */
    data: XOR<chess_games_devUpdateManyMutationInput, chess_games_devUncheckedUpdateManyInput>
    /**
     * Filter which chess_games_devs to update
     */
    where?: chess_games_devWhereInput
    /**
     * Limit how many chess_games_devs to update.
     */
    limit?: number
  }

  /**
   * chess_games_dev upsert
   */
  export type chess_games_devUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * The filter to search for the chess_games_dev to update in case it exists.
     */
    where: chess_games_devWhereUniqueInput
    /**
     * In case the chess_games_dev found by the `where` argument doesn't exist, create a new chess_games_dev with this data.
     */
    create: XOR<chess_games_devCreateInput, chess_games_devUncheckedCreateInput>
    /**
     * In case the chess_games_dev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chess_games_devUpdateInput, chess_games_devUncheckedUpdateInput>
  }

  /**
   * chess_games_dev delete
   */
  export type chess_games_devDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
    /**
     * Filter which chess_games_dev to delete.
     */
    where: chess_games_devWhereUniqueInput
  }

  /**
   * chess_games_dev deleteMany
   */
  export type chess_games_devDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_games_devs to delete
     */
    where?: chess_games_devWhereInput
    /**
     * Limit how many chess_games_devs to delete.
     */
    limit?: number
  }

  /**
   * chess_games_dev without action
   */
  export type chess_games_devDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_games_dev
     */
    select?: chess_games_devSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_games_dev
     */
    omit?: chess_games_devOmit<ExtArgs> | null
  }


  /**
   * Model chess_ratings
   */

  export type AggregateChess_ratings = {
    _count: Chess_ratingsCountAggregateOutputType | null
    _avg: Chess_ratingsAvgAggregateOutputType | null
    _sum: Chess_ratingsSumAggregateOutputType | null
    _min: Chess_ratingsMinAggregateOutputType | null
    _max: Chess_ratingsMaxAggregateOutputType | null
  }

  export type Chess_ratingsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    change: number | null
    percentile: number | null
    global_rank: number | null
  }

  export type Chess_ratingsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    change: number | null
    percentile: number | null
    global_rank: number | null
  }

  export type Chess_ratingsMinAggregateOutputType = {
    id: number | null
    type: $Enums.rating_type | null
    rating: number | null
    change: number | null
    percentile: number | null
    global_rank: number | null
    recorded_at: Date | null
  }

  export type Chess_ratingsMaxAggregateOutputType = {
    id: number | null
    type: $Enums.rating_type | null
    rating: number | null
    change: number | null
    percentile: number | null
    global_rank: number | null
    recorded_at: Date | null
  }

  export type Chess_ratingsCountAggregateOutputType = {
    id: number
    type: number
    rating: number
    change: number
    percentile: number
    global_rank: number
    recorded_at: number
    _all: number
  }


  export type Chess_ratingsAvgAggregateInputType = {
    id?: true
    rating?: true
    change?: true
    percentile?: true
    global_rank?: true
  }

  export type Chess_ratingsSumAggregateInputType = {
    id?: true
    rating?: true
    change?: true
    percentile?: true
    global_rank?: true
  }

  export type Chess_ratingsMinAggregateInputType = {
    id?: true
    type?: true
    rating?: true
    change?: true
    percentile?: true
    global_rank?: true
    recorded_at?: true
  }

  export type Chess_ratingsMaxAggregateInputType = {
    id?: true
    type?: true
    rating?: true
    change?: true
    percentile?: true
    global_rank?: true
    recorded_at?: true
  }

  export type Chess_ratingsCountAggregateInputType = {
    id?: true
    type?: true
    rating?: true
    change?: true
    percentile?: true
    global_rank?: true
    recorded_at?: true
    _all?: true
  }

  export type Chess_ratingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_ratings to aggregate.
     */
    where?: chess_ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_ratings to fetch.
     */
    orderBy?: chess_ratingsOrderByWithRelationInput | chess_ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chess_ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chess_ratings
    **/
    _count?: true | Chess_ratingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chess_ratingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chess_ratingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chess_ratingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chess_ratingsMaxAggregateInputType
  }

  export type GetChess_ratingsAggregateType<T extends Chess_ratingsAggregateArgs> = {
        [P in keyof T & keyof AggregateChess_ratings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChess_ratings[P]>
      : GetScalarType<T[P], AggregateChess_ratings[P]>
  }




  export type chess_ratingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chess_ratingsWhereInput
    orderBy?: chess_ratingsOrderByWithAggregationInput | chess_ratingsOrderByWithAggregationInput[]
    by: Chess_ratingsScalarFieldEnum[] | Chess_ratingsScalarFieldEnum
    having?: chess_ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chess_ratingsCountAggregateInputType | true
    _avg?: Chess_ratingsAvgAggregateInputType
    _sum?: Chess_ratingsSumAggregateInputType
    _min?: Chess_ratingsMinAggregateInputType
    _max?: Chess_ratingsMaxAggregateInputType
  }

  export type Chess_ratingsGroupByOutputType = {
    id: number
    type: $Enums.rating_type
    rating: number
    change: number | null
    percentile: number | null
    global_rank: number | null
    recorded_at: Date
    _count: Chess_ratingsCountAggregateOutputType | null
    _avg: Chess_ratingsAvgAggregateOutputType | null
    _sum: Chess_ratingsSumAggregateOutputType | null
    _min: Chess_ratingsMinAggregateOutputType | null
    _max: Chess_ratingsMaxAggregateOutputType | null
  }

  type GetChess_ratingsGroupByPayload<T extends chess_ratingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chess_ratingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chess_ratingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chess_ratingsGroupByOutputType[P]>
            : GetScalarType<T[P], Chess_ratingsGroupByOutputType[P]>
        }
      >
    >


  export type chess_ratingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    rating?: boolean
    change?: boolean
    percentile?: boolean
    global_rank?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["chess_ratings"]>

  export type chess_ratingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    rating?: boolean
    change?: boolean
    percentile?: boolean
    global_rank?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["chess_ratings"]>

  export type chess_ratingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    rating?: boolean
    change?: boolean
    percentile?: boolean
    global_rank?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["chess_ratings"]>

  export type chess_ratingsSelectScalar = {
    id?: boolean
    type?: boolean
    rating?: boolean
    change?: boolean
    percentile?: boolean
    global_rank?: boolean
    recorded_at?: boolean
  }

  export type chess_ratingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "rating" | "change" | "percentile" | "global_rank" | "recorded_at", ExtArgs["result"]["chess_ratings"]>

  export type $chess_ratingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chess_ratings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.rating_type
      rating: number
      change: number | null
      percentile: number | null
      global_rank: number | null
      recorded_at: Date
    }, ExtArgs["result"]["chess_ratings"]>
    composites: {}
  }

  type chess_ratingsGetPayload<S extends boolean | null | undefined | chess_ratingsDefaultArgs> = $Result.GetResult<Prisma.$chess_ratingsPayload, S>

  type chess_ratingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chess_ratingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chess_ratingsCountAggregateInputType | true
    }

  export interface chess_ratingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chess_ratings'], meta: { name: 'chess_ratings' } }
    /**
     * Find zero or one Chess_ratings that matches the filter.
     * @param {chess_ratingsFindUniqueArgs} args - Arguments to find a Chess_ratings
     * @example
     * // Get one Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chess_ratingsFindUniqueArgs>(args: SelectSubset<T, chess_ratingsFindUniqueArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chess_ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chess_ratingsFindUniqueOrThrowArgs} args - Arguments to find a Chess_ratings
     * @example
     * // Get one Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chess_ratingsFindUniqueOrThrowArgs>(args: SelectSubset<T, chess_ratingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsFindFirstArgs} args - Arguments to find a Chess_ratings
     * @example
     * // Get one Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chess_ratingsFindFirstArgs>(args?: SelectSubset<T, chess_ratingsFindFirstArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chess_ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsFindFirstOrThrowArgs} args - Arguments to find a Chess_ratings
     * @example
     * // Get one Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chess_ratingsFindFirstOrThrowArgs>(args?: SelectSubset<T, chess_ratingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chess_ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findMany()
     * 
     * // Get first 10 Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chess_ratingsWithIdOnly = await prisma.chess_ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chess_ratingsFindManyArgs>(args?: SelectSubset<T, chess_ratingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chess_ratings.
     * @param {chess_ratingsCreateArgs} args - Arguments to create a Chess_ratings.
     * @example
     * // Create one Chess_ratings
     * const Chess_ratings = await prisma.chess_ratings.create({
     *   data: {
     *     // ... data to create a Chess_ratings
     *   }
     * })
     * 
     */
    create<T extends chess_ratingsCreateArgs>(args: SelectSubset<T, chess_ratingsCreateArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chess_ratings.
     * @param {chess_ratingsCreateManyArgs} args - Arguments to create many Chess_ratings.
     * @example
     * // Create many Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chess_ratingsCreateManyArgs>(args?: SelectSubset<T, chess_ratingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chess_ratings and returns the data saved in the database.
     * @param {chess_ratingsCreateManyAndReturnArgs} args - Arguments to create many Chess_ratings.
     * @example
     * // Create many Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chess_ratings and only return the `id`
     * const chess_ratingsWithIdOnly = await prisma.chess_ratings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chess_ratingsCreateManyAndReturnArgs>(args?: SelectSubset<T, chess_ratingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chess_ratings.
     * @param {chess_ratingsDeleteArgs} args - Arguments to delete one Chess_ratings.
     * @example
     * // Delete one Chess_ratings
     * const Chess_ratings = await prisma.chess_ratings.delete({
     *   where: {
     *     // ... filter to delete one Chess_ratings
     *   }
     * })
     * 
     */
    delete<T extends chess_ratingsDeleteArgs>(args: SelectSubset<T, chess_ratingsDeleteArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chess_ratings.
     * @param {chess_ratingsUpdateArgs} args - Arguments to update one Chess_ratings.
     * @example
     * // Update one Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chess_ratingsUpdateArgs>(args: SelectSubset<T, chess_ratingsUpdateArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chess_ratings.
     * @param {chess_ratingsDeleteManyArgs} args - Arguments to filter Chess_ratings to delete.
     * @example
     * // Delete a few Chess_ratings
     * const { count } = await prisma.chess_ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chess_ratingsDeleteManyArgs>(args?: SelectSubset<T, chess_ratingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chess_ratingsUpdateManyArgs>(args: SelectSubset<T, chess_ratingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chess_ratings and returns the data updated in the database.
     * @param {chess_ratingsUpdateManyAndReturnArgs} args - Arguments to update many Chess_ratings.
     * @example
     * // Update many Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chess_ratings and only return the `id`
     * const chess_ratingsWithIdOnly = await prisma.chess_ratings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chess_ratingsUpdateManyAndReturnArgs>(args: SelectSubset<T, chess_ratingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chess_ratings.
     * @param {chess_ratingsUpsertArgs} args - Arguments to update or create a Chess_ratings.
     * @example
     * // Update or create a Chess_ratings
     * const chess_ratings = await prisma.chess_ratings.upsert({
     *   create: {
     *     // ... data to create a Chess_ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chess_ratings we want to update
     *   }
     * })
     */
    upsert<T extends chess_ratingsUpsertArgs>(args: SelectSubset<T, chess_ratingsUpsertArgs<ExtArgs>>): Prisma__chess_ratingsClient<$Result.GetResult<Prisma.$chess_ratingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chess_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsCountArgs} args - Arguments to filter Chess_ratings to count.
     * @example
     * // Count the number of Chess_ratings
     * const count = await prisma.chess_ratings.count({
     *   where: {
     *     // ... the filter for the Chess_ratings we want to count
     *   }
     * })
    **/
    count<T extends chess_ratingsCountArgs>(
      args?: Subset<T, chess_ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chess_ratingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chess_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chess_ratingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Chess_ratingsAggregateArgs>(args: Subset<T, Chess_ratingsAggregateArgs>): Prisma.PrismaPromise<GetChess_ratingsAggregateType<T>>

    /**
     * Group by Chess_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chess_ratingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chess_ratingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chess_ratingsGroupByArgs['orderBy'] }
        : { orderBy?: chess_ratingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chess_ratingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChess_ratingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chess_ratings model
   */
  readonly fields: chess_ratingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chess_ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chess_ratingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chess_ratings model
   */
  interface chess_ratingsFieldRefs {
    readonly id: FieldRef<"chess_ratings", 'Int'>
    readonly type: FieldRef<"chess_ratings", 'rating_type'>
    readonly rating: FieldRef<"chess_ratings", 'Int'>
    readonly change: FieldRef<"chess_ratings", 'Int'>
    readonly percentile: FieldRef<"chess_ratings", 'Float'>
    readonly global_rank: FieldRef<"chess_ratings", 'Int'>
    readonly recorded_at: FieldRef<"chess_ratings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chess_ratings findUnique
   */
  export type chess_ratingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter, which chess_ratings to fetch.
     */
    where: chess_ratingsWhereUniqueInput
  }

  /**
   * chess_ratings findUniqueOrThrow
   */
  export type chess_ratingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter, which chess_ratings to fetch.
     */
    where: chess_ratingsWhereUniqueInput
  }

  /**
   * chess_ratings findFirst
   */
  export type chess_ratingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter, which chess_ratings to fetch.
     */
    where?: chess_ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_ratings to fetch.
     */
    orderBy?: chess_ratingsOrderByWithRelationInput | chess_ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_ratings.
     */
    cursor?: chess_ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_ratings.
     */
    distinct?: Chess_ratingsScalarFieldEnum | Chess_ratingsScalarFieldEnum[]
  }

  /**
   * chess_ratings findFirstOrThrow
   */
  export type chess_ratingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter, which chess_ratings to fetch.
     */
    where?: chess_ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_ratings to fetch.
     */
    orderBy?: chess_ratingsOrderByWithRelationInput | chess_ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chess_ratings.
     */
    cursor?: chess_ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chess_ratings.
     */
    distinct?: Chess_ratingsScalarFieldEnum | Chess_ratingsScalarFieldEnum[]
  }

  /**
   * chess_ratings findMany
   */
  export type chess_ratingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter, which chess_ratings to fetch.
     */
    where?: chess_ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chess_ratings to fetch.
     */
    orderBy?: chess_ratingsOrderByWithRelationInput | chess_ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chess_ratings.
     */
    cursor?: chess_ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chess_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chess_ratings.
     */
    skip?: number
    distinct?: Chess_ratingsScalarFieldEnum | Chess_ratingsScalarFieldEnum[]
  }

  /**
   * chess_ratings create
   */
  export type chess_ratingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * The data needed to create a chess_ratings.
     */
    data: XOR<chess_ratingsCreateInput, chess_ratingsUncheckedCreateInput>
  }

  /**
   * chess_ratings createMany
   */
  export type chess_ratingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chess_ratings.
     */
    data: chess_ratingsCreateManyInput | chess_ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_ratings createManyAndReturn
   */
  export type chess_ratingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * The data used to create many chess_ratings.
     */
    data: chess_ratingsCreateManyInput | chess_ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chess_ratings update
   */
  export type chess_ratingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * The data needed to update a chess_ratings.
     */
    data: XOR<chess_ratingsUpdateInput, chess_ratingsUncheckedUpdateInput>
    /**
     * Choose, which chess_ratings to update.
     */
    where: chess_ratingsWhereUniqueInput
  }

  /**
   * chess_ratings updateMany
   */
  export type chess_ratingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chess_ratings.
     */
    data: XOR<chess_ratingsUpdateManyMutationInput, chess_ratingsUncheckedUpdateManyInput>
    /**
     * Filter which chess_ratings to update
     */
    where?: chess_ratingsWhereInput
    /**
     * Limit how many chess_ratings to update.
     */
    limit?: number
  }

  /**
   * chess_ratings updateManyAndReturn
   */
  export type chess_ratingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * The data used to update chess_ratings.
     */
    data: XOR<chess_ratingsUpdateManyMutationInput, chess_ratingsUncheckedUpdateManyInput>
    /**
     * Filter which chess_ratings to update
     */
    where?: chess_ratingsWhereInput
    /**
     * Limit how many chess_ratings to update.
     */
    limit?: number
  }

  /**
   * chess_ratings upsert
   */
  export type chess_ratingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * The filter to search for the chess_ratings to update in case it exists.
     */
    where: chess_ratingsWhereUniqueInput
    /**
     * In case the chess_ratings found by the `where` argument doesn't exist, create a new chess_ratings with this data.
     */
    create: XOR<chess_ratingsCreateInput, chess_ratingsUncheckedCreateInput>
    /**
     * In case the chess_ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chess_ratingsUpdateInput, chess_ratingsUncheckedUpdateInput>
  }

  /**
   * chess_ratings delete
   */
  export type chess_ratingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
    /**
     * Filter which chess_ratings to delete.
     */
    where: chess_ratingsWhereUniqueInput
  }

  /**
   * chess_ratings deleteMany
   */
  export type chess_ratingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chess_ratings to delete
     */
    where?: chess_ratingsWhereInput
    /**
     * Limit how many chess_ratings to delete.
     */
    limit?: number
  }

  /**
   * chess_ratings without action
   */
  export type chess_ratingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chess_ratings
     */
    select?: chess_ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chess_ratings
     */
    omit?: chess_ratingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Chess_gamesScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    date: 'date',
    game_url: 'game_url',
    time_control: 'time_control',
    time: 'time',
    my_color: 'my_color',
    my_rating: 'my_rating',
    opponent_name: 'opponent_name',
    opponent_url: 'opponent_url',
    opponent_rating: 'opponent_rating',
    opponent_color: 'opponent_color',
    opponent_flag: 'opponent_flag',
    result: 'result',
    move_count: 'move_count'
  };

  export type Chess_gamesScalarFieldEnum = (typeof Chess_gamesScalarFieldEnum)[keyof typeof Chess_gamesScalarFieldEnum]


  export const Chess_games_devScalarFieldEnum: {
    id: 'id',
    game_id: 'game_id',
    date: 'date',
    game_url: 'game_url',
    time_control: 'time_control',
    time: 'time',
    my_color: 'my_color',
    my_rating: 'my_rating',
    opponent_name: 'opponent_name',
    opponent_url: 'opponent_url',
    opponent_rating: 'opponent_rating',
    opponent_color: 'opponent_color',
    opponent_flag: 'opponent_flag',
    result: 'result',
    move_count: 'move_count'
  };

  export type Chess_games_devScalarFieldEnum = (typeof Chess_games_devScalarFieldEnum)[keyof typeof Chess_games_devScalarFieldEnum]


  export const Chess_ratingsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    rating: 'rating',
    change: 'change',
    percentile: 'percentile',
    global_rank: 'global_rank',
    recorded_at: 'recorded_at'
  };

  export type Chess_ratingsScalarFieldEnum = (typeof Chess_ratingsScalarFieldEnum)[keyof typeof Chess_ratingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'rating_type'
   */
  export type Enumrating_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rating_type'>
    


  /**
   * Reference to a field of type 'rating_type[]'
   */
  export type ListEnumrating_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rating_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type chess_gamesWhereInput = {
    AND?: chess_gamesWhereInput | chess_gamesWhereInput[]
    OR?: chess_gamesWhereInput[]
    NOT?: chess_gamesWhereInput | chess_gamesWhereInput[]
    id?: IntFilter<"chess_games"> | number
    game_id?: StringNullableFilter<"chess_games"> | string | null
    date?: DateTimeNullableFilter<"chess_games"> | Date | string | null
    game_url?: StringNullableFilter<"chess_games"> | string | null
    time_control?: StringNullableFilter<"chess_games"> | string | null
    time?: StringNullableFilter<"chess_games"> | string | null
    my_color?: StringNullableFilter<"chess_games"> | string | null
    my_rating?: IntNullableFilter<"chess_games"> | number | null
    opponent_name?: StringNullableFilter<"chess_games"> | string | null
    opponent_url?: StringNullableFilter<"chess_games"> | string | null
    opponent_rating?: IntNullableFilter<"chess_games"> | number | null
    opponent_color?: StringNullableFilter<"chess_games"> | string | null
    opponent_flag?: StringNullableFilter<"chess_games"> | string | null
    result?: StringNullableFilter<"chess_games"> | string | null
    move_count?: IntNullableFilter<"chess_games"> | number | null
  }

  export type chess_gamesOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    game_url?: SortOrderInput | SortOrder
    time_control?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    my_color?: SortOrderInput | SortOrder
    my_rating?: SortOrderInput | SortOrder
    opponent_name?: SortOrderInput | SortOrder
    opponent_url?: SortOrderInput | SortOrder
    opponent_rating?: SortOrderInput | SortOrder
    opponent_color?: SortOrderInput | SortOrder
    opponent_flag?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    move_count?: SortOrderInput | SortOrder
  }

  export type chess_gamesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: string
    AND?: chess_gamesWhereInput | chess_gamesWhereInput[]
    OR?: chess_gamesWhereInput[]
    NOT?: chess_gamesWhereInput | chess_gamesWhereInput[]
    date?: DateTimeNullableFilter<"chess_games"> | Date | string | null
    game_url?: StringNullableFilter<"chess_games"> | string | null
    time_control?: StringNullableFilter<"chess_games"> | string | null
    time?: StringNullableFilter<"chess_games"> | string | null
    my_color?: StringNullableFilter<"chess_games"> | string | null
    my_rating?: IntNullableFilter<"chess_games"> | number | null
    opponent_name?: StringNullableFilter<"chess_games"> | string | null
    opponent_url?: StringNullableFilter<"chess_games"> | string | null
    opponent_rating?: IntNullableFilter<"chess_games"> | number | null
    opponent_color?: StringNullableFilter<"chess_games"> | string | null
    opponent_flag?: StringNullableFilter<"chess_games"> | string | null
    result?: StringNullableFilter<"chess_games"> | string | null
    move_count?: IntNullableFilter<"chess_games"> | number | null
  }, "id" | "game_id">

  export type chess_gamesOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    game_url?: SortOrderInput | SortOrder
    time_control?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    my_color?: SortOrderInput | SortOrder
    my_rating?: SortOrderInput | SortOrder
    opponent_name?: SortOrderInput | SortOrder
    opponent_url?: SortOrderInput | SortOrder
    opponent_rating?: SortOrderInput | SortOrder
    opponent_color?: SortOrderInput | SortOrder
    opponent_flag?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    move_count?: SortOrderInput | SortOrder
    _count?: chess_gamesCountOrderByAggregateInput
    _avg?: chess_gamesAvgOrderByAggregateInput
    _max?: chess_gamesMaxOrderByAggregateInput
    _min?: chess_gamesMinOrderByAggregateInput
    _sum?: chess_gamesSumOrderByAggregateInput
  }

  export type chess_gamesScalarWhereWithAggregatesInput = {
    AND?: chess_gamesScalarWhereWithAggregatesInput | chess_gamesScalarWhereWithAggregatesInput[]
    OR?: chess_gamesScalarWhereWithAggregatesInput[]
    NOT?: chess_gamesScalarWhereWithAggregatesInput | chess_gamesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chess_games"> | number
    game_id?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"chess_games"> | Date | string | null
    game_url?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    time_control?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    time?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    my_color?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    my_rating?: IntNullableWithAggregatesFilter<"chess_games"> | number | null
    opponent_name?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    opponent_url?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    opponent_rating?: IntNullableWithAggregatesFilter<"chess_games"> | number | null
    opponent_color?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    opponent_flag?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    result?: StringNullableWithAggregatesFilter<"chess_games"> | string | null
    move_count?: IntNullableWithAggregatesFilter<"chess_games"> | number | null
  }

  export type chess_games_devWhereInput = {
    AND?: chess_games_devWhereInput | chess_games_devWhereInput[]
    OR?: chess_games_devWhereInput[]
    NOT?: chess_games_devWhereInput | chess_games_devWhereInput[]
    id?: IntFilter<"chess_games_dev"> | number
    game_id?: StringNullableFilter<"chess_games_dev"> | string | null
    date?: DateTimeNullableFilter<"chess_games_dev"> | Date | string | null
    game_url?: StringNullableFilter<"chess_games_dev"> | string | null
    time_control?: StringNullableFilter<"chess_games_dev"> | string | null
    time?: StringNullableFilter<"chess_games_dev"> | string | null
    my_color?: StringNullableFilter<"chess_games_dev"> | string | null
    my_rating?: IntNullableFilter<"chess_games_dev"> | number | null
    opponent_name?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_url?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_rating?: IntNullableFilter<"chess_games_dev"> | number | null
    opponent_color?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_flag?: StringNullableFilter<"chess_games_dev"> | string | null
    result?: StringNullableFilter<"chess_games_dev"> | string | null
    move_count?: IntNullableFilter<"chess_games_dev"> | number | null
  }

  export type chess_games_devOrderByWithRelationInput = {
    id?: SortOrder
    game_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    game_url?: SortOrderInput | SortOrder
    time_control?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    my_color?: SortOrderInput | SortOrder
    my_rating?: SortOrderInput | SortOrder
    opponent_name?: SortOrderInput | SortOrder
    opponent_url?: SortOrderInput | SortOrder
    opponent_rating?: SortOrderInput | SortOrder
    opponent_color?: SortOrderInput | SortOrder
    opponent_flag?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    move_count?: SortOrderInput | SortOrder
  }

  export type chess_games_devWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    game_id?: string
    AND?: chess_games_devWhereInput | chess_games_devWhereInput[]
    OR?: chess_games_devWhereInput[]
    NOT?: chess_games_devWhereInput | chess_games_devWhereInput[]
    date?: DateTimeNullableFilter<"chess_games_dev"> | Date | string | null
    game_url?: StringNullableFilter<"chess_games_dev"> | string | null
    time_control?: StringNullableFilter<"chess_games_dev"> | string | null
    time?: StringNullableFilter<"chess_games_dev"> | string | null
    my_color?: StringNullableFilter<"chess_games_dev"> | string | null
    my_rating?: IntNullableFilter<"chess_games_dev"> | number | null
    opponent_name?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_url?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_rating?: IntNullableFilter<"chess_games_dev"> | number | null
    opponent_color?: StringNullableFilter<"chess_games_dev"> | string | null
    opponent_flag?: StringNullableFilter<"chess_games_dev"> | string | null
    result?: StringNullableFilter<"chess_games_dev"> | string | null
    move_count?: IntNullableFilter<"chess_games_dev"> | number | null
  }, "id" | "game_id">

  export type chess_games_devOrderByWithAggregationInput = {
    id?: SortOrder
    game_id?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    game_url?: SortOrderInput | SortOrder
    time_control?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    my_color?: SortOrderInput | SortOrder
    my_rating?: SortOrderInput | SortOrder
    opponent_name?: SortOrderInput | SortOrder
    opponent_url?: SortOrderInput | SortOrder
    opponent_rating?: SortOrderInput | SortOrder
    opponent_color?: SortOrderInput | SortOrder
    opponent_flag?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    move_count?: SortOrderInput | SortOrder
    _count?: chess_games_devCountOrderByAggregateInput
    _avg?: chess_games_devAvgOrderByAggregateInput
    _max?: chess_games_devMaxOrderByAggregateInput
    _min?: chess_games_devMinOrderByAggregateInput
    _sum?: chess_games_devSumOrderByAggregateInput
  }

  export type chess_games_devScalarWhereWithAggregatesInput = {
    AND?: chess_games_devScalarWhereWithAggregatesInput | chess_games_devScalarWhereWithAggregatesInput[]
    OR?: chess_games_devScalarWhereWithAggregatesInput[]
    NOT?: chess_games_devScalarWhereWithAggregatesInput | chess_games_devScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chess_games_dev"> | number
    game_id?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"chess_games_dev"> | Date | string | null
    game_url?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    time_control?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    time?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    my_color?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    my_rating?: IntNullableWithAggregatesFilter<"chess_games_dev"> | number | null
    opponent_name?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    opponent_url?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    opponent_rating?: IntNullableWithAggregatesFilter<"chess_games_dev"> | number | null
    opponent_color?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    opponent_flag?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    result?: StringNullableWithAggregatesFilter<"chess_games_dev"> | string | null
    move_count?: IntNullableWithAggregatesFilter<"chess_games_dev"> | number | null
  }

  export type chess_ratingsWhereInput = {
    AND?: chess_ratingsWhereInput | chess_ratingsWhereInput[]
    OR?: chess_ratingsWhereInput[]
    NOT?: chess_ratingsWhereInput | chess_ratingsWhereInput[]
    id?: IntFilter<"chess_ratings"> | number
    type?: Enumrating_typeFilter<"chess_ratings"> | $Enums.rating_type
    rating?: IntFilter<"chess_ratings"> | number
    change?: IntNullableFilter<"chess_ratings"> | number | null
    percentile?: FloatNullableFilter<"chess_ratings"> | number | null
    global_rank?: IntNullableFilter<"chess_ratings"> | number | null
    recorded_at?: DateTimeFilter<"chess_ratings"> | Date | string
  }

  export type chess_ratingsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    change?: SortOrderInput | SortOrder
    percentile?: SortOrderInput | SortOrder
    global_rank?: SortOrderInput | SortOrder
    recorded_at?: SortOrder
  }

  export type chess_ratingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chess_ratingsWhereInput | chess_ratingsWhereInput[]
    OR?: chess_ratingsWhereInput[]
    NOT?: chess_ratingsWhereInput | chess_ratingsWhereInput[]
    type?: Enumrating_typeFilter<"chess_ratings"> | $Enums.rating_type
    rating?: IntFilter<"chess_ratings"> | number
    change?: IntNullableFilter<"chess_ratings"> | number | null
    percentile?: FloatNullableFilter<"chess_ratings"> | number | null
    global_rank?: IntNullableFilter<"chess_ratings"> | number | null
    recorded_at?: DateTimeFilter<"chess_ratings"> | Date | string
  }, "id">

  export type chess_ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    change?: SortOrderInput | SortOrder
    percentile?: SortOrderInput | SortOrder
    global_rank?: SortOrderInput | SortOrder
    recorded_at?: SortOrder
    _count?: chess_ratingsCountOrderByAggregateInput
    _avg?: chess_ratingsAvgOrderByAggregateInput
    _max?: chess_ratingsMaxOrderByAggregateInput
    _min?: chess_ratingsMinOrderByAggregateInput
    _sum?: chess_ratingsSumOrderByAggregateInput
  }

  export type chess_ratingsScalarWhereWithAggregatesInput = {
    AND?: chess_ratingsScalarWhereWithAggregatesInput | chess_ratingsScalarWhereWithAggregatesInput[]
    OR?: chess_ratingsScalarWhereWithAggregatesInput[]
    NOT?: chess_ratingsScalarWhereWithAggregatesInput | chess_ratingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chess_ratings"> | number
    type?: Enumrating_typeWithAggregatesFilter<"chess_ratings"> | $Enums.rating_type
    rating?: IntWithAggregatesFilter<"chess_ratings"> | number
    change?: IntNullableWithAggregatesFilter<"chess_ratings"> | number | null
    percentile?: FloatNullableWithAggregatesFilter<"chess_ratings"> | number | null
    global_rank?: IntNullableWithAggregatesFilter<"chess_ratings"> | number | null
    recorded_at?: DateTimeWithAggregatesFilter<"chess_ratings"> | Date | string
  }

  export type chess_gamesCreateInput = {
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_gamesUncheckedCreateInput = {
    id?: number
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_gamesUpdateInput = {
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_gamesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_gamesCreateManyInput = {
    id?: number
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_gamesUpdateManyMutationInput = {
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_gamesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_games_devCreateInput = {
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_games_devUncheckedCreateInput = {
    id?: number
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_games_devUpdateInput = {
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_games_devUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_games_devCreateManyInput = {
    id?: number
    game_id?: string | null
    date?: Date | string | null
    game_url?: string | null
    time_control?: string | null
    time?: string | null
    my_color?: string | null
    my_rating?: number | null
    opponent_name?: string | null
    opponent_url?: string | null
    opponent_rating?: number | null
    opponent_color?: string | null
    opponent_flag?: string | null
    result?: string | null
    move_count?: number | null
  }

  export type chess_games_devUpdateManyMutationInput = {
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_games_devUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game_url?: NullableStringFieldUpdateOperationsInput | string | null
    time_control?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    my_color?: NullableStringFieldUpdateOperationsInput | string | null
    my_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_name?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_url?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_rating?: NullableIntFieldUpdateOperationsInput | number | null
    opponent_color?: NullableStringFieldUpdateOperationsInput | string | null
    opponent_flag?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    move_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type chess_ratingsCreateInput = {
    type: $Enums.rating_type
    rating: number
    change?: number | null
    percentile?: number | null
    global_rank?: number | null
    recorded_at?: Date | string
  }

  export type chess_ratingsUncheckedCreateInput = {
    id?: number
    type: $Enums.rating_type
    rating: number
    change?: number | null
    percentile?: number | null
    global_rank?: number | null
    recorded_at?: Date | string
  }

  export type chess_ratingsUpdateInput = {
    type?: Enumrating_typeFieldUpdateOperationsInput | $Enums.rating_type
    rating?: IntFieldUpdateOperationsInput | number
    change?: NullableIntFieldUpdateOperationsInput | number | null
    percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    global_rank?: NullableIntFieldUpdateOperationsInput | number | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chess_ratingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumrating_typeFieldUpdateOperationsInput | $Enums.rating_type
    rating?: IntFieldUpdateOperationsInput | number
    change?: NullableIntFieldUpdateOperationsInput | number | null
    percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    global_rank?: NullableIntFieldUpdateOperationsInput | number | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chess_ratingsCreateManyInput = {
    id?: number
    type: $Enums.rating_type
    rating: number
    change?: number | null
    percentile?: number | null
    global_rank?: number | null
    recorded_at?: Date | string
  }

  export type chess_ratingsUpdateManyMutationInput = {
    type?: Enumrating_typeFieldUpdateOperationsInput | $Enums.rating_type
    rating?: IntFieldUpdateOperationsInput | number
    change?: NullableIntFieldUpdateOperationsInput | number | null
    percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    global_rank?: NullableIntFieldUpdateOperationsInput | number | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chess_ratingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumrating_typeFieldUpdateOperationsInput | $Enums.rating_type
    rating?: IntFieldUpdateOperationsInput | number
    change?: NullableIntFieldUpdateOperationsInput | number | null
    percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    global_rank?: NullableIntFieldUpdateOperationsInput | number | null
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chess_gamesCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_gamesAvgOrderByAggregateInput = {
    id?: SortOrder
    my_rating?: SortOrder
    opponent_rating?: SortOrder
    move_count?: SortOrder
  }

  export type chess_gamesMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_gamesMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_gamesSumOrderByAggregateInput = {
    id?: SortOrder
    my_rating?: SortOrder
    opponent_rating?: SortOrder
    move_count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type chess_games_devCountOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_games_devAvgOrderByAggregateInput = {
    id?: SortOrder
    my_rating?: SortOrder
    opponent_rating?: SortOrder
    move_count?: SortOrder
  }

  export type chess_games_devMaxOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_games_devMinOrderByAggregateInput = {
    id?: SortOrder
    game_id?: SortOrder
    date?: SortOrder
    game_url?: SortOrder
    time_control?: SortOrder
    time?: SortOrder
    my_color?: SortOrder
    my_rating?: SortOrder
    opponent_name?: SortOrder
    opponent_url?: SortOrder
    opponent_rating?: SortOrder
    opponent_color?: SortOrder
    opponent_flag?: SortOrder
    result?: SortOrder
    move_count?: SortOrder
  }

  export type chess_games_devSumOrderByAggregateInput = {
    id?: SortOrder
    my_rating?: SortOrder
    opponent_rating?: SortOrder
    move_count?: SortOrder
  }

  export type Enumrating_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.rating_type | Enumrating_typeFieldRefInput<$PrismaModel>
    in?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrating_typeFilter<$PrismaModel> | $Enums.rating_type
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type chess_ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    change?: SortOrder
    percentile?: SortOrder
    global_rank?: SortOrder
    recorded_at?: SortOrder
  }

  export type chess_ratingsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    change?: SortOrder
    percentile?: SortOrder
    global_rank?: SortOrder
  }

  export type chess_ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    change?: SortOrder
    percentile?: SortOrder
    global_rank?: SortOrder
    recorded_at?: SortOrder
  }

  export type chess_ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    rating?: SortOrder
    change?: SortOrder
    percentile?: SortOrder
    global_rank?: SortOrder
    recorded_at?: SortOrder
  }

  export type chess_ratingsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    change?: SortOrder
    percentile?: SortOrder
    global_rank?: SortOrder
  }

  export type Enumrating_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rating_type | Enumrating_typeFieldRefInput<$PrismaModel>
    in?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrating_typeWithAggregatesFilter<$PrismaModel> | $Enums.rating_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrating_typeFilter<$PrismaModel>
    _max?: NestedEnumrating_typeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumrating_typeFieldUpdateOperationsInput = {
    set?: $Enums.rating_type
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumrating_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.rating_type | Enumrating_typeFieldRefInput<$PrismaModel>
    in?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrating_typeFilter<$PrismaModel> | $Enums.rating_type
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumrating_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rating_type | Enumrating_typeFieldRefInput<$PrismaModel>
    in?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rating_type[] | ListEnumrating_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumrating_typeWithAggregatesFilter<$PrismaModel> | $Enums.rating_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrating_typeFilter<$PrismaModel>
    _max?: NestedEnumrating_typeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}