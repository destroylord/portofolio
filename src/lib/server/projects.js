import { and, asc, desc, eq } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { db } from "./db.js";
import { project as projectTable } from "./schema/project.schema.js";
import { featuredProjects } from "../../data/site";

function normalizeLocalizedText(value, fallback = "") {
  if (!value || typeof value !== "object") {
    return { id: fallback, en: fallback };
  }

  return {
    id: typeof value.id === "string" ? value.id : fallback,
    en: typeof value.en === "string" ? value.en : fallback,
  };
}

function normalizeStringArray(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((item) => typeof item === "string");
}

function normalizeObjectArray(value, shape) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => item && typeof item === "object")
    .map((item) => shape(item));
}

function fromDbProject(record, lang) {
  const localizedTitle = normalizeLocalizedText(record.title);
  const localizedSummary = normalizeLocalizedText(record.summary);
  const localizedRole = normalizeLocalizedText(record.role);
  const localizedClient = normalizeLocalizedText(record.client);

  const metrics = normalizeObjectArray(record.metrics, (item) => ({
    label:
      typeof item?.label?.[lang] === "string"
        ? item.label[lang]
        : typeof item?.label?.id === "string"
          ? item.label.id
          : "",
    value: typeof item?.value === "string" ? item.value : "",
  }));

  const challenge = normalizeStringArray(record.challenge?.[lang] ?? record.challenge?.id);
  const solution = normalizeStringArray(record.solution?.[lang] ?? record.solution?.id);

  const insights = normalizeObjectArray(record.insights?.[lang] ?? record.insights?.id, (item) => ({
    title: typeof item?.title === "string" ? item.title : "",
    body: typeof item?.body === "string" ? item.body : "",
  }));

  const process = normalizeObjectArray(record.process?.[lang] ?? record.process?.id, (item) => ({
    title: typeof item?.title === "string" ? item.title : "",
    body: typeof item?.body === "string" ? item.body : "",
  }));

  const gallery = normalizeObjectArray(record.gallery?.[lang] ?? record.gallery?.id, (item) => ({
    image: typeof item?.image === "string" ? item.image : "",
    alt: typeof item?.alt === "string" ? item.alt : "",
    caption: typeof item?.caption === "string" ? item.caption : "",
  }));

  const codeSample = record.codeSample && typeof record.codeSample === "object"
    ? {
        file: typeof record.codeSample.file === "string" ? record.codeSample.file : "",
        language: typeof record.codeSample.language === "string" ? record.codeSample.language : "",
        code: typeof record.codeSample.code === "string" ? record.codeSample.code : "",
      }
    : undefined;

  return {
    slug: record.slug,
    title: localizedTitle[lang] || localizedTitle.id,
    summary: localizedSummary[lang] || localizedSummary.id,
    cover: record.cover,
    coverAlt: record.coverAlt,
    categories: normalizeStringArray(record.categories),
    stack: normalizeStringArray(record.stack),
    year: record.year,
    role: localizedRole[lang] || localizedRole.id,
    client: localizedClient[lang] || localizedClient.id,
    metrics,
    challenge,
    insights,
    process,
    gallery,
    solution,
    codeSample,
  };
}

export async function getProjectsFromDb(lang) {
  try {
    const rows = await db
      .select()
      .from(projectTable)
      .where(eq(projectTable.published, true))
      .orderBy(desc(projectTable.featured), asc(projectTable.sortOrder), desc(projectTable.createdAt));

    if (!rows.length) {
      return featuredProjects;
    }

    return rows.map((record) => fromDbProject(record, lang));
  } catch {
    return featuredProjects;
  }
}

export async function getProjectBySlugFromDb(lang, slug) {
  try {
    const rows = await db
      .select()
      .from(projectTable)
      .where(and(eq(projectTable.slug, slug), eq(projectTable.published, true)))
      .limit(1);

    if (!rows[0]) {
      return featuredProjects.find((item) => item.slug === slug) ?? null;
    }

    return fromDbProject(rows[0], lang);
  } catch {
    return featuredProjects.find((item) => item.slug === slug) ?? null;
  }
}

export async function listAdminProjects() {
  return db
    .select()
    .from(projectTable)
    .orderBy(desc(projectTable.featured), asc(projectTable.sortOrder), desc(projectTable.updatedAt));
}

export async function getAdminProjectById(id) {
  const rows = await db.select().from(projectTable).where(eq(projectTable.id, id)).limit(1);
  return rows[0] ?? null;
}

function parseLocalizedJson(formData, prefix) {
  return {
    id: String(formData.get(`${prefix}Id`) || "").trim(),
    en: String(formData.get(`${prefix}En`) || "").trim(),
  };
}

function parseCsv(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLineList(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseJsonField(value, fallback, label) {
  const raw = String(value || "").trim();
  if (!raw) return fallback;

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`Format JSON tidak valid pada field "${label}".`);
  }
}

function requireValue(value, label) {
  if (!String(value || "").trim()) {
    throw new Error(`Field "${label}" wajib diisi.`);
  }
}

function requireLocalizedText(value, label) {
  if (!value.id || !value.en) {
    throw new Error(`Field "${label}" wajib diisi untuk bahasa Indonesia dan English.`);
  }
}

function validateProjectPayload(payload) {
  requireValue(payload.slug, "Slug");
  requireValue(payload.year, "Year");
  requireValue(payload.cover, "Cover URL");
  requireValue(payload.coverAlt, "Cover Alt");
  requireLocalizedText(payload.title, "Title");
  requireLocalizedText(payload.summary, "Summary");
  requireLocalizedText(payload.role, "Role");
  requireLocalizedText(payload.client, "Client");

  if (!Number.isFinite(payload.sortOrder)) {
    throw new Error('Field "Sort Order" harus berupa angka yang valid.');
  }
}

export function mapProjectFormData(formData) {
  const now = new Date();

  const title = parseLocalizedJson(formData, "title");
  const summary = parseLocalizedJson(formData, "summary");
  const role = parseLocalizedJson(formData, "role");
  const client = parseLocalizedJson(formData, "client");

  const payload = {
    slug: String(formData.get("slug") || "").trim(),
    title,
    summary,
    role,
    client,
    challenge: {
      id: parseLineList(formData.get("challengeId")),
      en: parseLineList(formData.get("challengeEn")),
    },
    insights: {
      id: parseJsonField(formData.get("insightsId"), [], "Insights ID"),
      en: parseJsonField(formData.get("insightsEn"), [], "Insights EN"),
    },
    process: {
      id: parseJsonField(formData.get("processId"), [], "Process ID"),
      en: parseJsonField(formData.get("processEn"), [], "Process EN"),
    },
    solution: {
      id: parseLineList(formData.get("solutionId")),
      en: parseLineList(formData.get("solutionEn")),
    },
    metrics: parseJsonField(formData.get("metrics"), [], "Metrics"),
    gallery: {
      id: parseJsonField(formData.get("galleryId"), [], "Gallery ID"),
      en: parseJsonField(formData.get("galleryEn"), [], "Gallery EN"),
    },
    codeSample: parseJsonField(formData.get("codeSample"), null, "Code Sample"),
    categories: parseCsv(formData.get("categories")),
    stack: parseCsv(formData.get("stack")),
    cover: String(formData.get("cover") || "").trim(),
    coverAlt: String(formData.get("coverAlt") || "").trim(),
    year: String(formData.get("year") || "").trim(),
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    sortOrder: Number(formData.get("sortOrder") || 0),
    updatedAt: now,
  };

  validateProjectPayload(payload);
  return payload;
}

export async function createProjectFromForm(formData) {
  const payload = mapProjectFormData(formData);
  const now = new Date();

  await db.insert(projectTable).values({
    id: randomUUID(),
    ...payload,
    createdAt: now,
    updatedAt: now,
  });
}

export async function updateProjectFromForm(id, formData) {
  const payload = mapProjectFormData(formData);

  await db
    .update(projectTable)
    .set({
      ...payload,
      updatedAt: new Date(),
    })
    .where(eq(projectTable.id, id));
}

export async function deleteProjectById(id) {
  await db.delete(projectTable).where(eq(projectTable.id, id));
}

export async function seedProjectsFromStaticSource() {
  for (let index = 0; index < featuredProjects.length; index += 1) {
    const item = featuredProjects[index];

    await db
      .insert(projectTable)
      .values({
        id: randomUUID(),
        slug: item.slug,
        title: { id: item.title, en: item.title },
        summary: { id: item.summary, en: item.summary },
        role: { id: item.role, en: item.role },
        client: { id: item.client, en: item.client },
        challenge: { id: item.challenge, en: item.challenge },
        insights: { id: item.insights, en: item.insights },
        process: { id: item.process, en: item.process },
        solution: { id: item.solution, en: item.solution },
        metrics: item.metrics.map((metric) => ({
          label: { id: metric.label, en: metric.label },
          value: metric.value,
        })),
        gallery: { id: item.gallery, en: item.gallery },
        codeSample: item.codeSample ?? null,
        categories: item.categories,
        stack: item.stack,
        cover: item.cover,
        coverAlt: item.coverAlt,
        year: item.year,
        featured: index < 3,
        published: true,
        sortOrder: index,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .onDuplicateKeyUpdate({
        set: {
          summary: { id: item.summary, en: item.summary },
          updatedAt: new Date(),
        },
      });
  }
}
