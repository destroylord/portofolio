import {
  boolean,
  index,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt", { fsp: 3 }).notNull(),
  updatedAt: timestamp("updatedAt", { fsp: 3 }).notNull(),
});

export const session = mysqlTable(
  "session",
  {
    id: varchar("id", { length: 36 }).primaryKey().notNull(),
    expiresAt: timestamp("expiresAt", { fsp: 3 }).notNull(),
    token: varchar("token", { length: 255 }).notNull().unique(),
    createdAt: timestamp("createdAt", { fsp: 3 }).notNull(),
    updatedAt: timestamp("updatedAt", { fsp: 3 }).notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: varchar("userId", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => ({
    sessionUserIdIdx: index("session_userId_idx").on(table.userId),
  })
);

export const account = mysqlTable(
  "account",
  {
    id: varchar("id", { length: 36 }).primaryKey().notNull(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    userId: varchar("userId", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    accessTokenExpiresAt: timestamp("accessTokenExpiresAt", { fsp: 3 }),
    refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt", { fsp: 3 }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("createdAt", { fsp: 3 }).notNull(),
    updatedAt: timestamp("updatedAt", { fsp: 3 }).notNull(),
  },
  (table) => ({
    accountUserIdIdx: index("account_userId_idx").on(table.userId),
  })
);

export const verification = mysqlTable(
  "verification",
  {
    id: varchar("id", { length: 36 }).primaryKey().notNull(),
    identifier: varchar("identifier", { length: 255 }).notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt", { fsp: 3 }).notNull(),
    createdAt: timestamp("createdAt", { fsp: 3 }).notNull(),
    updatedAt: timestamp("updatedAt", { fsp: 3 }).notNull(),
  },
  (table) => ({
    verificationIdentifierIdx: index("verification_identifier_idx").on(table.identifier),
  })
);

export const authSchema = {
  user,
  session,
  account,
  verification,
};

