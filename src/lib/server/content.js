import { eq } from "drizzle-orm";
import { db } from "./db.js";
import { aboutContent as aboutContentTable, siteContent as siteContentTable } from "./schema/content.schema.js";

const SITE_CONTENT_ID = "default-site";
const ABOUT_CONTENT_ID = "default-about";

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

function normalizeObjectArray(value, mapper) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => item && typeof item === "object")
    .map((item) => mapper(item));
}

function parseJsonField(value, fallback) {
  const raw = String(value || "").trim();
  if (!raw) return fallback;

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Format JSON tidak valid.");
  }
}

function parseLocalizedJson(formData, prefix) {
  return {
    id: String(formData.get(`${prefix}Id`) || "").trim(),
    en: String(formData.get(`${prefix}En`) || "").trim(),
  };
}

function parseLineList(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function requireValue(value, label) {
  if (!String(value || "").trim()) {
    throw new Error(`Field "${label}" wajib diisi.`);
  }
}

function requireLocalizedText(value, label) {
  if (!value?.id || !value?.en) {
    throw new Error(`Field "${label}" wajib diisi untuk bahasa Indonesia dan English.`);
  }
}

function validateSiteContentPayload(payload) {
  requireValue(payload.name, "Brand Name");
  requireValue(payload.title, "Site Title");
  requireValue(payload.email, "Email");
  requireValue(payload.location, "Location");
  requireValue(payload.timezone, "Timezone");
  requireLocalizedText(payload.description, "Site Description");
  requireLocalizedText(payload.availability, "Availability");
  requireLocalizedText(payload.footerCopy, "Footer Copy");
  requireLocalizedText(payload.ctaLabel, "Header CTA");
  requireLocalizedText(payload.mobileEyebrow, "Mobile Eyebrow");
  requireLocalizedText(payload.mobileCta, "Mobile CTA");
  requireLocalizedText(payload.homeEyebrow, "Home Eyebrow");
  requireLocalizedText(payload.homeHeroTitle, "Home Hero Title");
  requireLocalizedText(payload.homeHeroBody, "Home Hero Body");
  requireLocalizedText(payload.homePrimaryCta, "Home Primary CTA");
  requireLocalizedText(payload.homeSecondaryCta, "Home Secondary CTA");
  requireLocalizedText(payload.homeHeroNoteTitle, "Home Note Title");
  requireLocalizedText(payload.homeHeroNoteBody, "Home Note Body");
  requireLocalizedText(payload.contactEyebrow, "Contact Eyebrow");
  requireLocalizedText(payload.contactHeading, "Contact Heading");
  requireLocalizedText(payload.contactBody, "Contact Body");

  if (!Array.isArray(payload.socials)) {
    throw new Error('Field "Social Links JSON" harus berupa array.');
  }
}

function validateAboutContentPayload(payload) {
  requireLocalizedText(payload.eyebrow, "Eyebrow");
  requireLocalizedText(payload.heroTitle, "Hero Title");
  requireLocalizedText(payload.heroBody, "Hero Body");
  requireLocalizedText(payload.storyEyebrow, "Story Eyebrow");
  requireLocalizedText(payload.storyTitle, "Story Title");
  requireLocalizedText(payload.quote, "Quote");
  requireLocalizedText(payload.quoteBy, "Quote By");
  requireLocalizedText(payload.skillsEyebrow, "Skills Eyebrow");
  requireLocalizedText(payload.skillsTitle, "Skills Title");

  if (!Array.isArray(payload.story.id) || !Array.isArray(payload.story.en)) {
    throw new Error('Field "Story Paragraphs" harus berupa daftar baris.');
  }

  if (!Array.isArray(payload.skills.id) || !Array.isArray(payload.skills.en)) {
    throw new Error('Field "Skills Cards JSON" harus berupa array.');
  }
}

export async function getSiteContentRecord() {
  const rows = await db.select().from(siteContentTable).where(eq(siteContentTable.id, SITE_CONTENT_ID)).limit(1);
  return rows[0] ?? null;
}

export async function getAboutContentRecord() {
  const rows = await db.select().from(aboutContentTable).where(eq(aboutContentTable.id, ABOUT_CONTENT_ID)).limit(1);
  return rows[0] ?? null;
}

export async function getSiteContentModule(lang) {
  const record = await getSiteContentRecord();
  if (!record) return null;

  return {
    name: record.name,
    title: record.title,
    email: record.email,
    location: record.location,
    timezone: record.timezone,
    socials: normalizeObjectArray(record.socials, (item) => ({
      label: typeof item?.label === "string" ? item.label : "",
      href: typeof item?.href === "string" ? item.href : "#",
    })),
    description: normalizeLocalizedText(record.description)[lang],
    availability: normalizeLocalizedText(record.availability)[lang],
    footerCopy: normalizeLocalizedText(record.footerCopy)[lang],
    ctaLabel: normalizeLocalizedText(record.ctaLabel)[lang],
    mobileEyebrow: normalizeLocalizedText(record.mobileEyebrow)[lang],
    mobileCta: normalizeLocalizedText(record.mobileCta)[lang],
    homeEyebrow: normalizeLocalizedText(record.homeEyebrow)[lang],
    homeHeroTitle: normalizeLocalizedText(record.homeHeroTitle)[lang],
    homeHeroBody: normalizeLocalizedText(record.homeHeroBody)[lang],
    homePrimaryCta: normalizeLocalizedText(record.homePrimaryCta)[lang],
    homeSecondaryCta: normalizeLocalizedText(record.homeSecondaryCta)[lang],
    homeHeroNoteTitle: normalizeLocalizedText(record.homeHeroNoteTitle)[lang],
    homeHeroNoteBody: normalizeLocalizedText(record.homeHeroNoteBody)[lang],
    contactEyebrow: normalizeLocalizedText(record.contactEyebrow)[lang],
    contactHeading: normalizeLocalizedText(record.contactHeading)[lang],
    contactBody: normalizeLocalizedText(record.contactBody)[lang],
  };
}

export async function getAboutContentModule(lang) {
  const record = await getAboutContentRecord();
  if (!record) return null;

  return {
    eyebrow: normalizeLocalizedText(record.eyebrow)[lang],
    heroTitle: normalizeLocalizedText(record.heroTitle)[lang],
    heroBody: normalizeLocalizedText(record.heroBody)[lang],
    storyEyebrow: normalizeLocalizedText(record.storyEyebrow)[lang],
    storyTitle: normalizeLocalizedText(record.storyTitle)[lang],
    story: normalizeStringArray(record.story?.[lang] ?? record.story?.id),
    quote: normalizeLocalizedText(record.quote)[lang],
    quoteBy: normalizeLocalizedText(record.quoteBy)[lang],
    skillsEyebrow: normalizeLocalizedText(record.skillsEyebrow)[lang],
    skillsTitle: normalizeLocalizedText(record.skillsTitle)[lang],
    skills: normalizeObjectArray(record.skills?.[lang] ?? record.skills?.id, (item) => ({
      title: typeof item?.title === "string" ? item.title : "",
      body: typeof item?.body === "string" ? item.body : "",
      tags: normalizeStringArray(item?.tags),
    })),
  };
}

export function mapSiteContentFormData(formData) {
  const now = new Date();

  const payload = {
    name: String(formData.get("name") || "").trim(),
    title: String(formData.get("title") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    timezone: String(formData.get("timezone") || "").trim(),
    socials: parseJsonField(formData.get("socials"), []),
    description: parseLocalizedJson(formData, "description"),
    availability: parseLocalizedJson(formData, "availability"),
    footerCopy: parseLocalizedJson(formData, "footerCopy"),
    ctaLabel: parseLocalizedJson(formData, "ctaLabel"),
    mobileEyebrow: parseLocalizedJson(formData, "mobileEyebrow"),
    mobileCta: parseLocalizedJson(formData, "mobileCta"),
    homeEyebrow: parseLocalizedJson(formData, "homeEyebrow"),
    homeHeroTitle: parseLocalizedJson(formData, "homeHeroTitle"),
    homeHeroBody: parseLocalizedJson(formData, "homeHeroBody"),
    homePrimaryCta: parseLocalizedJson(formData, "homePrimaryCta"),
    homeSecondaryCta: parseLocalizedJson(formData, "homeSecondaryCta"),
    homeHeroNoteTitle: parseLocalizedJson(formData, "homeHeroNoteTitle"),
    homeHeroNoteBody: parseLocalizedJson(formData, "homeHeroNoteBody"),
    contactEyebrow: parseLocalizedJson(formData, "contactEyebrow"),
    contactHeading: parseLocalizedJson(formData, "contactHeading"),
    contactBody: parseLocalizedJson(formData, "contactBody"),
    updatedAt: now,
  };

  validateSiteContentPayload(payload);
  return payload;
}

export function mapAboutContentFormData(formData) {
  const now = new Date();

  const payload = {
    eyebrow: parseLocalizedJson(formData, "eyebrow"),
    heroTitle: parseLocalizedJson(formData, "heroTitle"),
    heroBody: parseLocalizedJson(formData, "heroBody"),
    storyEyebrow: parseLocalizedJson(formData, "storyEyebrow"),
    storyTitle: parseLocalizedJson(formData, "storyTitle"),
    story: {
      id: parseLineList(formData.get("storyId")),
      en: parseLineList(formData.get("storyEn")),
    },
    quote: parseLocalizedJson(formData, "quote"),
    quoteBy: parseLocalizedJson(formData, "quoteBy"),
    skillsEyebrow: parseLocalizedJson(formData, "skillsEyebrow"),
    skillsTitle: parseLocalizedJson(formData, "skillsTitle"),
    skills: {
      id: parseJsonField(formData.get("skillsId"), []),
      en: parseJsonField(formData.get("skillsEn"), []),
    },
    updatedAt: now,
  };

  validateAboutContentPayload(payload);
  return payload;
}

async function upsertSiteContent(payload) {
  const existing = await getSiteContentRecord();

  if (existing) {
    await db.update(siteContentTable).set(payload).where(eq(siteContentTable.id, SITE_CONTENT_ID));
    return;
  }

  const now = new Date();
  await db.insert(siteContentTable).values({
    id: SITE_CONTENT_ID,
    ...payload,
    createdAt: now,
    updatedAt: now,
  });
}

async function upsertAboutContent(payload) {
  const existing = await getAboutContentRecord();

  if (existing) {
    await db.update(aboutContentTable).set(payload).where(eq(aboutContentTable.id, ABOUT_CONTENT_ID));
    return;
  }

  const now = new Date();
  await db.insert(aboutContentTable).values({
    id: ABOUT_CONTENT_ID,
    ...payload,
    createdAt: now,
    updatedAt: now,
  });
}

export async function upsertSiteContentFromForm(formData) {
  const payload = mapSiteContentFormData(formData);
  await upsertSiteContent(payload);
}

export async function upsertAboutContentFromForm(formData) {
  const payload = mapAboutContentFormData(formData);
  await upsertAboutContent(payload);
}

export async function seedDefaultSiteContent(payload) {
  await upsertSiteContent({
    ...payload,
    updatedAt: new Date(),
  });
}

export async function seedDefaultAboutContent(payload) {
  await upsertAboutContent({
    ...payload,
    updatedAt: new Date(),
  });
}
