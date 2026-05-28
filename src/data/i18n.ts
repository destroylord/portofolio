import { featuredProjects, skills as baseSkills, type Project } from "./site";
import { getAboutContentModule, getSiteContentModule } from "../lib/server/content.js";
import { getProjectBySlugFromDb, getProjectsFromDb } from "../lib/server/projects.js";

export type Lang = "id" | "en";

const siteMeta = {
  name: "Warm Story",
  title: "Warm Story Portfolio",
  email: "hello@warmstory.com",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Resume", href: "#" },
  ],
};

const englishProjectCopy: Record<string, Partial<Project>> = {
  "brewing-better-ux": {
    summary:
      "A coffee ordering app redesign focused on reducing peak-hour friction without flattening the brand's sense of hospitality.",
    metrics: [
      { label: "Checkout completion", value: "+24%" },
      { label: "Order abandonment", value: "-18%" },
      { label: "Pickup clarity", value: "78% preferred guided status" },
    ],
    challenge: [
      "Independent coffee shops need to serve customers who want speed without making the experience feel like a vending machine.",
      "The previous digital flow was too transactional, offered little product context, and failed to communicate pickup timing with confidence.",
    ],
    insights: [
      {
        title: "Time sensitivity",
        body: "Users were likely to drop off when pickup estimates felt vague or stretched too long.",
      },
      {
        title: "Editorial discovery",
        body: "Customers still wanted tasting notes and roast details, not just a list of menu names.",
      },
    ],
    process: [
      {
        title: "Spatial mapping",
        body: "The initial wireframes prioritized the relationship between product imagery, flavor notes, size selection, and pickup timing.",
      },
      {
        title: "Micro-interaction pass",
        body: "Brewing states were made warmer and clearer so users could feel the physical process happening behind the counter.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByYOtpg7AReFRxrCNTZu6cdagAUlgRV-XNjVxoiZxhY5f9KMFGnAFtPuhEHlgWtdIoH_Z6N3FujGi-FskznXMdZhk7JsI6urkQTtJSi9zJ5X_LHVCYZm7H1nadvo_UGB3KvBi60qRqd0oFsMFzu6AzWuhNXzzl8lQet0raQy0SuXCx_a7tIaLsFQse2l3ZZgGj0BE_S8JXDfBF1cHTVI5mi0x5KeeFMlqWrUe2kLJuI7thyf0hG9jIVXVOFs_X32w5swSQkIxMhzbD",
        alt: "Notebook with hand-drawn mobile UI sketches beside coffee.",
        caption: "Early ideation for the preorder and pickup flow.",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDarSPjYWKS6jANi6ql-spln1WRJgENYMzcfXaokt4h8jf3sDLFsXPNJyq2PywMh_tzH3gPxvQwxpiQcPT6OTyBMsgMjyBKEbToYBxXp7eRvDOfdUe8avj2OarbjdQc_smWy_1kQpsTM6IG7aAiOMbVQAxN3ol-NBOtYXENheWIh3IsMrm_bXNGjIGCBauv_E0Ix--930LRx-vp9VPxf-OVRrKqZKqOcJiwjk21VoHfbRa7iO43ZJWa8x22mPaHJmK210zgY5__j9qy",
        alt: "Low-fidelity mobile wireframes on a soft neutral background.",
        caption: "Mid-fidelity wireframes used to validate structure.",
      },
    ],
    solution: [
      "The final system blended espresso tones, cream highlights, and metadata chips to keep the interface warm while still informative.",
      "Order status was rewritten in more human language so users could understand what was happening behind the scenes.",
    ],
  },
  "latte-interface": {
    summary:
      "A community dashboard exploration focused on soft typography, accessible contrast, and a quieter visual rhythm.",
    challenge: ["The legacy dashboard felt cold and overly technical for non-analytic teams."],
    insights: [
      {
        title: "Soft hierarchy",
        body: "Teams understood dense information faster when color and type felt calmer and more deliberate.",
      },
    ],
    process: [
      {
        title: "Interface rhythm",
        body: "The work focused on card density, whitespace, and removing unnecessary visual noise.",
      },
    ],
    solution: ["A calmer panel system made the dashboard easier to scan and less mentally taxing."],
  },
  "espresso-design-system": {
    summary:
      "A scalable component library for a growing product team with strong attention to developer experience, documentation, and accessibility.",
    challenge: ["The product team was growing quickly without a shared UI language."],
    insights: [
      {
        title: "Shared vocabulary",
        body: "Documentation and naming conventions mattered as much as the visual component itself.",
      },
    ],
    process: [
      {
        title: "System audit",
        body: "Recurring patterns were mapped first before defining shared primitives and component behavior.",
      },
    ],
    solution: [
      "Documentation was intentionally concise but clear enough for both designers and developers to use with confidence.",
    ],
  },
  "moka-ecommerce": {
    summary:
      "A checkout flow for an artisanal roasting brand that balances visual storytelling with conversion goals.",
    challenge: ["Brand storytelling disappeared as soon as users entered the checkout flow."],
    solution: ["Light contextual cues and a stronger order summary helped maintain trust through checkout."],
  },
  "cold-brew-dashboard": {
    summary:
      "An analytics dashboard for inventory managers focused on data readability and subtle tonal separation.",
    challenge: ["Users struggled to read insight quickly because the dashboard was overly dense."],
    solution: ["A more modular layout and faster-to-scan chart treatment reduced cognitive load."],
  },
};

export function getSiteCopy(lang: Lang) {
  return {
    ...siteMeta,
    description:
      lang === "id"
        ? "Portofolio editorial bertema hangat yang memadukan storytelling, UI yang refined, dan studi kasus produk digital."
        : "A warm editorial portfolio blending storytelling, refined UI, and thoughtful product case studies.",
    availability:
      lang === "id" ? "Tersedia untuk proyek baru terpilih" : "Available for selected collaborations",
    footerCopy:
      lang === "id"
        ? "Diracik dengan kopi, ketelitian, dan perhatian pada detail digital."
        : "Crafted with coffee, care, and a sharp eye for digital detail.",
    nav: [
      { label: lang === "id" ? "Beranda" : "Home", href: "/" },
      { label: lang === "id" ? "Proyek" : "Projects", href: "/projects" },
      { label: lang === "id" ? "Tentang" : "About", href: "/about" },
      { label: lang === "id" ? "Kontak" : "Contact", href: "/contact" },
    ],
    ctaLabel: "Hire Me",
    mobileEyebrow: lang === "id" ? "Portofolio Kreatif" : "Creative Portfolio",
    mobileCta: lang === "id" ? "Mulai Proyek" : "Start a Project",
  };
}

export function getHomeCopy(lang: Lang) {
  return lang === "id"
    ? {
        title: "Warm Story | Portofolio Produk Editorial",
        eyebrow: "Portofolio Produk Editorial",
        heroTitle: "Selamat datang di sudut kopi saya.",
        heroBody:
          "Kumpulan interface, cerita produk, dan design system yang diracik dengan empati, restraint, dan sudut pandang visual yang kuat.",
        primaryCta: "Hire Me",
        secondaryCta: "Lihat Proyek",
        heroNoteTitle: "Tersedia untuk kolaborasi terpilih",
        heroNoteBody:
          "Saya membantu tim produk membentuk pengalaman digital yang tenang, mudah dibaca, dan kaya narasi.",
        sectionEyebrow: "Roast Pilihan",
        sectionTitle:
          "Karya pilihan yang menyeimbangkan hospitality, struktur, dan dampak produk yang terukur.",
        sectionBody:
          "Setiap proyek disusun sebagai cerita yang utuh: apa yang berubah, kenapa itu penting, dan bagaimana produk menjadi lebih mudah dipercaya.",
        strengthsEyebrow: "Yang Saya Bawa",
        strengthsTitle:
          "Praktik desain produk yang berangkat dari riset, visual yang hangat, dan kesadaran implementasi.",
        strengths: [
          {
            label: "Pendekatan",
            value: "Berbasis Riset",
            body: "Berangkat dari perilaku pengguna, lalu menyusun interface dari insight yang benar-benar terasa.",
          },
          {
            label: "Rasa Visual",
            value: "UI Editorial",
            body: "Layout bersih, tipografi yang intentional, dan palet hangat yang tidak terasa generik.",
          },
          {
            label: "Eksekusi",
            value: "System-minded",
            body: "Komponen, state, dan handoff dirancang supaya lebih mudah dipelihara tim produk.",
          },
        ],
      }
    : {
        title: "Warm Story | Editorial Product Portfolio",
        eyebrow: "Editorial Product Portfolio",
        heroTitle: "Welcome to my coffee corner.",
        heroBody:
          "A curated collection of thoughtful interfaces, product stories, and design systems brewed with empathy, restraint, and a strong point of view.",
        primaryCta: "Hire Me",
        secondaryCta: "View Projects",
        heroNoteTitle: "Available for selected collaborations",
        heroNoteBody:
          "I help product teams shape calm, readable, and story-rich digital experiences.",
        sectionEyebrow: "Featured Roasts",
        sectionTitle:
          "Selected work that balances hospitality, structure, and measurable product impact.",
        sectionBody:
          "Each project is presented as a crafted story: what changed, why it mattered, and how the product became easier to trust.",
        strengthsEyebrow: "What I Bring",
        strengthsTitle:
          "A product design practice grounded in research, visual warmth, and implementation awareness.",
        strengths: [
          {
            label: "Approach",
            value: "Research-led",
            body: "Starting from human behavior, then shaping interfaces from insight that can actually be felt.",
          },
          {
            label: "Taste",
            value: "Editorial UI",
            body: "Clean layouts, intentional typography, and a warm palette that does not feel generic.",
          },
          {
            label: "Delivery",
            value: "System-minded",
            body: "Components, states, and handoff are built to be easier for product teams to maintain.",
          },
        ],
      };
}

export function getAboutCopy(lang: Lang) {
  return lang === "id"
    ? {
        title: `Tentang | ${siteMeta.name}`,
        eyebrow: "Peracik di Balik Brew Ini",
        heroTitle: "Merancang ritual digital yang terasa hangat, jelas, dan layak diingat.",
        heroBody:
          "Saya memadukan riset yang sistematis dengan bahasa visual yang ekspresif agar produk tidak hanya efisien, tapi juga terasa dibuat dengan pertimbangan dan empati.",
        storyEyebrow: "Cerita Saya",
        storyTitle: "Dari struktur editorial menuju produk digital yang punya denyut.",
        story: [
          "Perjalanan saya dimulai dari dunia layout dan print, tempat saya belajar bahwa grid, spacing, dan ritme baca bukan detail kecil, melainkan fondasi dari cara orang menyerap makna.",
          "Ketika berpindah ke produk digital, saya membawa disiplin editorial itu ke interface: setiap halaman harus punya alur, setiap state harus punya alasan, dan setiap keputusan visual harus membantu pengguna bergerak dengan lebih tenang.",
          "Saya percaya teknologi tidak harus terasa dingin. Produk yang baik bisa tetap efisien sekaligus hangat, jelas, dan terasa dibuat dengan empati.",
        ],
        quote:
          "Desain yang baik bukan hanya soal sejelas apa sesuatu bekerja, tetapi juga sehalus apa ia menyapa orang yang memakainya.",
        quoteBy: "Prinsip yang memandu Warm Story",
        skillsEyebrow: "Roasting Profile",
        skillsTitle: "Kekuatan inti yang membentuk cara saya meneliti, merancang, dan mengirimkan produk.",
      }
    : {
        title: `About | ${siteMeta.name}`,
        eyebrow: "The Maker Behind the Brew",
        heroTitle: "Designing digital rituals that feel warm, clear, and worth remembering.",
        heroBody:
          "I blend systematic research with expressive visual language so products do not just work efficiently, but also feel considered and humane.",
        storyEyebrow: "My Story",
        storyTitle: "From editorial structure to digital products with a pulse.",
        story: [
          "My journey started in layout and print, where I learned that grids, spacing, and reading rhythm are not minor details but the foundation of how people absorb meaning.",
          "When I moved into digital products, I brought that editorial discipline into interface work: every page should have a flow, every state should have a reason, and every visual decision should help the user move with less friction.",
          "I believe technology does not have to feel cold. A strong product can stay efficient while still feeling warm, clear, and built with empathy.",
        ],
        quote:
          "Great design is not only about how clearly something works, but also about how gently it meets the person using it.",
        quoteBy: "A guiding principle behind Warm Story",
        skillsEyebrow: "The Roasting Profile",
        skillsTitle: "Core strengths that shape the way I research, design, and ship.",
      };
}

export function getProjectsCopy(lang: Lang) {
  return lang === "id"
    ? {
        title: `Proyek | ${siteMeta.name}`,
        eyebrow: "Roast Terpilih",
        heading:
          "Koleksi karya produk yang diracik dengan perhatian, struktur, dan sudut pandang visual yang kuat.",
        body:
          "Baris filter di bawah ini masih dipakai sebagai penanda kategori dan fondasi interaktivitas berikutnya; untuk versi ini fokus utamanya tetap pada kejelasan struktur.",
        all: "Semua",
      }
    : {
        title: `Projects | ${siteMeta.name}`,
        eyebrow: "Selected Roasts",
        heading:
          "A curated collection of product work brewed with care, structure, and a strong visual point of view.",
        body:
          "The filter row below is presented as a visual cue for taxonomy and future interactivity; this first version prioritizes clarity and reusable structure.",
        all: "All",
      };
}

export function getProjectDetailCopy(lang: Lang) {
  return lang === "id"
    ? {
        caseStudy: "Studi Kasus",
        role: "Peran",
        year: "Tahun",
        client: "Klien",
        tech: "Teknologi",
        challengeEyebrow: "Tantangan",
        challengeTitle: "Mengubah friksi produk menjadi alur digital yang lebih manusiawi dan lebih kredibel.",
        insightsEyebrow: "Insight Kunci",
        insightsTitle: "Apa yang muncul dari riset sebelum keputusan visual dibuat.",
        processEyebrow: "Proses",
        processTitle: "Dari sketsa dan wireframe menuju bahasa interaksi yang lebih hangat.",
        outcomeEyebrow: "Hasil Akhir",
        outcomeTitle: "Apa yang perlu dikomunikasikan sistem final, bukan sekadar ditampilkan.",
        metricsEyebrow: "Sinyal Proyek",
        metricsTitle: "Beberapa outcome yang layak tetap terlihat.",
      }
    : {
        caseStudy: "Case Study",
        role: "Role",
        year: "Year",
        client: "Client",
        tech: "Tech",
        challengeEyebrow: "The Challenge",
        challengeTitle: "Turning product friction into a more human, more credible digital flow.",
        insightsEyebrow: "Key Insights",
        insightsTitle: "What research surfaced before visual decisions were made.",
        processEyebrow: "The Process",
        processTitle: "From sketches and wireframes to a warmer interaction language.",
        outcomeEyebrow: "The Outcome",
        outcomeTitle: "What the final system needed to communicate, not just display.",
        metricsEyebrow: "Project Signals",
        metricsTitle: "A few outcomes worth keeping visible.",
      };
}

export function getContactCopy(lang: Lang) {
  return lang === "id"
    ? {
        title: `Kontak | ${siteMeta.name}`,
        eyebrow: "Mari Meracik Sesuatu yang Hebat",
        heading: "Kalau kamu butuh partner produk yang thoughtful, saya siap mendengar.",
        body:
          "Entah kebutuhanmu adalah UX direction, perapihan interface, atau design system yang siap diterjemahkan ke frontend, saya lebih suka percakapan yang spesifik, jujur, dan betul-betul ingin membuat produk lebih baik.",
        linkedIn: "Profil LinkedIn",
        github: "Repositori GitHub",
        name: "Nama",
        email: "Email",
        subject: "Subjek / Layanan",
        message: "Pesan",
        select: "Pilih salah satu",
        options: ["UX Research", "UI Design", "Design Systems", "Kolaborasi Frontend"],
        messagePlaceholder:
          "Ceritakan tentang produknya, titik tegangnya, dan dukungan seperti apa yang kamu butuhkan.",
        button: "Kirim Pesan",
      }
    : {
        title: `Contact | ${siteMeta.name}`,
        eyebrow: "Let's Brew Something Great",
        heading: "If you need a thoughtful product partner, I'm ready to listen.",
        body:
          "Whether the ask is UX direction, interface refinement, or a frontend-ready design system, I prefer conversations that are specific, honest, and aimed at making the product better.",
        linkedIn: "LinkedIn Profile",
        github: "GitHub Repository",
        name: "Name",
        email: "Email",
        subject: "Subject / Service",
        message: "Message",
        select: "Select an option",
        options: ["UX Research", "UI Design", "Design Systems", "Frontend Collaboration"],
        messagePlaceholder:
          "Tell me about the product, the tension, and what kind of support you need.",
        button: "Send Message",
      };
}

export function getSkills(lang: Lang) {
  if (lang === "id") {
    return baseSkills;
  }

  return [
    {
      title: "UX Research",
      body: "Reading user behavior before drawing the first frame, then translating that into calmer and more accurate product decisions.",
      tags: ["Interviews", "Personas", "Usability Testing"],
    },
    {
      title: "UI Design",
      body: "Composing typography, whitespace rhythm, and a warm palette so interfaces feel editorial without losing function.",
      tags: ["Figma", "Design Systems", "Prototyping"],
    },
    {
      title: "Frontend Development",
      body: "Bringing design to life through semantic, lightweight code with accessibility in mind.",
      tags: ["HTML/CSS", "Tailwind", "JavaScript"],
    },
  ];
}

export async function getSiteCopyContent(lang: Lang) {
  const fallback = getSiteCopy(lang);

  try {
    const content = await getSiteContentModule(lang);
    if (!content) return fallback;

    return {
      ...fallback,
      name: content.name || fallback.name,
      title: content.title || fallback.title,
      description: content.description || fallback.description,
      email: content.email || fallback.email,
      location: content.location || fallback.location,
      timezone: content.timezone || fallback.timezone,
      socials: content.socials.length ? content.socials : fallback.socials,
      availability: content.availability || fallback.availability,
      footerCopy: content.footerCopy || fallback.footerCopy,
      ctaLabel: content.ctaLabel || fallback.ctaLabel,
      mobileEyebrow: content.mobileEyebrow || fallback.mobileEyebrow,
      mobileCta: content.mobileCta || fallback.mobileCta,
    };
  } catch {
    return fallback;
  }
}

export async function getHomeCopyContent(lang: Lang) {
  const fallback = getHomeCopy(lang);

  try {
    const content = await getSiteContentModule(lang);
    if (!content) return fallback;

    return {
      ...fallback,
      eyebrow: content.homeEyebrow || fallback.eyebrow,
      heroTitle: content.homeHeroTitle || fallback.heroTitle,
      heroBody: content.homeHeroBody || fallback.heroBody,
      primaryCta: content.homePrimaryCta || fallback.primaryCta,
      secondaryCta: content.homeSecondaryCta || fallback.secondaryCta,
      heroNoteTitle: content.homeHeroNoteTitle || fallback.heroNoteTitle,
      heroNoteBody: content.homeHeroNoteBody || fallback.heroNoteBody,
    };
  } catch {
    return fallback;
  }
}

export async function getContactCopyContent(lang: Lang) {
  const fallback = getContactCopy(lang);

  try {
    const content = await getSiteContentModule(lang);
    if (!content) return fallback;

    return {
      ...fallback,
      eyebrow: content.contactEyebrow || fallback.eyebrow,
      heading: content.contactHeading || fallback.heading,
      body: content.contactBody || fallback.body,
    };
  } catch {
    return fallback;
  }
}

export async function getAboutCopyContent(lang: Lang) {
  const fallback = getAboutCopy(lang);

  try {
    const content = await getAboutContentModule(lang);
    if (!content) return fallback;

    return {
      ...fallback,
      eyebrow: content.eyebrow || fallback.eyebrow,
      heroTitle: content.heroTitle || fallback.heroTitle,
      heroBody: content.heroBody || fallback.heroBody,
      storyEyebrow: content.storyEyebrow || fallback.storyEyebrow,
      storyTitle: content.storyTitle || fallback.storyTitle,
      story: content.story.length ? content.story : fallback.story,
      quote: content.quote || fallback.quote,
      quoteBy: content.quoteBy || fallback.quoteBy,
      skillsEyebrow: content.skillsEyebrow || fallback.skillsEyebrow,
      skillsTitle: content.skillsTitle || fallback.skillsTitle,
    };
  } catch {
    return fallback;
  }
}

export async function getSkillsContent(lang: Lang) {
  const fallback = getSkills(lang);

  try {
    const content = await getAboutContentModule(lang);
    if (!content || !content.skills.length) return fallback;
    return content.skills;
  } catch {
    return fallback;
  }
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getProjectsFromDb(lang);

  if (projects === featuredProjects) {
    if (lang === "id") {
      return featuredProjects;
    }

    return featuredProjects.map((project) => {
      const copy = englishProjectCopy[project.slug];
      return copy ? { ...project, ...copy } : project;
    });
  }

  if (lang === "id") {
    return projects;
  }

  return projects.map((project) => {
    const copy = englishProjectCopy[project.slug];
    return copy ? { ...project, ...copy } : project;
  });
}

export async function getProjectBySlug(lang: Lang, slug: string): Promise<Project | null> {
  const project = await getProjectBySlugFromDb(lang, slug);
  if (!project) return null;

  if (lang === "id") return project;

  const copy = englishProjectCopy[project.slug];
  return copy ? { ...project, ...copy } : project;
}
