import {
  boolean,
  index,
  int,
  json,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const project = mysqlTable(
  "project",
  {
    id: varchar("id", { length: 36 }).primaryKey().notNull(),
    slug: varchar("slug", { length: 191 }).notNull().unique(),
    title: json("title").notNull(),
    summary: json("summary").notNull(),
    role: json("role").notNull(),
    client: json("client").notNull(),
    challenge: json("challenge").notNull(),
    insights: json("insights").notNull(),
    process: json("process").notNull(),
    solution: json("solution").notNull(),
    metrics: json("metrics").notNull(),
    gallery: json("gallery").notNull(),
    codeSample: json("codeSample"),
    categories: json("categories").notNull(),
    stack: json("stack").notNull(),
    cover: text("cover").notNull(),
    coverAlt: text("coverAlt").notNull(),
    year: varchar("year", { length: 16 }).notNull(),
    featured: boolean("featured").notNull().default(false),
    published: boolean("published").notNull().default(true),
    sortOrder: int("sortOrder").notNull().default(0),
    createdAt: timestamp("createdAt", { fsp: 3 }).notNull(),
    updatedAt: timestamp("updatedAt", { fsp: 3 }).notNull(),
  },
  (table) => ({
    projectSlugIdx: index("project_slug_idx").on(table.slug),
    projectPublishedIdx: index("project_published_idx").on(table.published),
    projectSortIdx: index("project_sort_idx").on(table.sortOrder),
  })
);

