import { seedDefaultAboutContent, seedDefaultSiteContent } from "../src/lib/server/content.js";

async function main() {
  await seedDefaultSiteContent({
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
    description: {
      id: "Portofolio editorial bertema hangat yang memadukan storytelling, UI yang refined, dan studi kasus produk digital.",
      en: "A warm editorial portfolio blending storytelling, refined UI, and thoughtful product case studies.",
    },
    availability: {
      id: "Tersedia untuk proyek baru terpilih",
      en: "Available for selected collaborations",
    },
    footerCopy: {
      id: "Diracik dengan kopi, ketelitian, dan perhatian pada detail digital.",
      en: "Crafted with coffee, care, and a sharp eye for digital detail.",
    },
    ctaLabel: {
      id: "Hire Me",
      en: "Hire Me",
    },
    mobileEyebrow: {
      id: "Portofolio Kreatif",
      en: "Creative Portfolio",
    },
    mobileCta: {
      id: "Mulai Proyek",
      en: "Start a Project",
    },
    homeEyebrow: {
      id: "Portofolio Produk Editorial",
      en: "Editorial Product Portfolio",
    },
    homeHeroTitle: {
      id: "Selamat datang di sudut kopi saya.",
      en: "Welcome to my coffee corner.",
    },
    homeHeroBody: {
      id: "Kumpulan interface, cerita produk, dan design system yang diracik dengan empati, restraint, dan sudut pandang visual yang kuat.",
      en: "A curated collection of thoughtful interfaces, product stories, and design systems brewed with empathy, restraint, and a strong point of view.",
    },
    homePrimaryCta: {
      id: "Hire Me",
      en: "Hire Me",
    },
    homeSecondaryCta: {
      id: "Lihat Proyek",
      en: "View Projects",
    },
    homeHeroNoteTitle: {
      id: "Tersedia untuk kolaborasi terpilih",
      en: "Available for selected collaborations",
    },
    homeHeroNoteBody: {
      id: "Saya membantu tim produk membentuk pengalaman digital yang tenang, mudah dibaca, dan kaya narasi.",
      en: "I help product teams shape calm, readable, and story-rich digital experiences.",
    },
    contactEyebrow: {
      id: "Mari Meracik Sesuatu yang Hebat",
      en: "Let's Brew Something Great",
    },
    contactHeading: {
      id: "Kalau kamu butuh partner produk yang thoughtful, saya siap mendengar.",
      en: "If you need a thoughtful product partner, I'm ready to listen.",
    },
    contactBody: {
      id: "Entah kebutuhanmu adalah UX direction, perapihan interface, atau design system yang siap diterjemahkan ke frontend, saya lebih suka percakapan yang spesifik, jujur, dan betul-betul ingin membuat produk lebih baik.",
      en: "Whether the ask is UX direction, interface refinement, or a frontend-ready design system, I prefer conversations that are specific, honest, and aimed at making the product better.",
    },
  });

  await seedDefaultAboutContent({
    eyebrow: {
      id: "Peracik di Balik Brew Ini",
      en: "The Maker Behind the Brew",
    },
    heroTitle: {
      id: "Merancang ritual digital yang terasa hangat, jelas, dan layak diingat.",
      en: "Designing digital rituals that feel warm, clear, and worth remembering.",
    },
    heroBody: {
      id: "Saya memadukan riset yang sistematis dengan bahasa visual yang ekspresif agar produk tidak hanya efisien, tapi juga terasa dibuat dengan pertimbangan dan empati.",
      en: "I blend systematic research with expressive visual language so products do not just work efficiently, but also feel considered and humane.",
    },
    storyEyebrow: {
      id: "Cerita Saya",
      en: "My Story",
    },
    storyTitle: {
      id: "Dari struktur editorial menuju produk digital yang punya denyut.",
      en: "From editorial structure to digital products with a pulse.",
    },
    story: {
      id: [
        "Perjalanan saya dimulai dari dunia layout dan print, tempat saya belajar bahwa grid, spacing, dan ritme baca bukan detail kecil, melainkan fondasi dari cara orang menyerap makna.",
        "Ketika berpindah ke produk digital, saya membawa disiplin editorial itu ke interface: setiap halaman harus punya alur, setiap state harus punya alasan, dan setiap keputusan visual harus membantu pengguna bergerak dengan lebih tenang.",
        "Saya percaya teknologi tidak harus terasa dingin. Produk yang baik bisa tetap efisien sekaligus hangat, jelas, dan terasa dibuat dengan empati.",
      ],
      en: [
        "My journey started in layout and print, where I learned that grids, spacing, and reading rhythm are not minor details but the foundation of how people absorb meaning.",
        "When I moved into digital products, I brought that editorial discipline into interface work: every page should have a flow, every state should have a reason, and every visual decision should help the user move with less friction.",
        "I believe technology does not have to feel cold. A strong product can stay efficient while still feeling warm, clear, and built with empathy.",
      ],
    },
    quote: {
      id: "Desain yang baik bukan hanya soal sejelas apa sesuatu bekerja, tetapi juga sehalus apa ia menyapa orang yang memakainya.",
      en: "Great design is not only about how clearly something works, but also about how gently it meets the person using it.",
    },
    quoteBy: {
      id: "Prinsip yang memandu Warm Story",
      en: "A guiding principle behind Warm Story",
    },
    skillsEyebrow: {
      id: "Roasting Profile",
      en: "The Roasting Profile",
    },
    skillsTitle: {
      id: "Kekuatan inti yang membentuk cara saya meneliti, merancang, dan mengirimkan produk.",
      en: "Core strengths that shape the way I research, design, and ship.",
    },
    skills: {
      id: [
        {
          title: "UX Research",
          body: "Membaca perilaku pengguna sebelum menggambar frame pertama, lalu menerjemahkannya menjadi keputusan produk yang lebih tenang dan tepat.",
          tags: ["Interviews", "Personas", "Usability Testing"],
        },
        {
          title: "UI Design",
          body: "Meracik tipografi, ritme whitespace, dan palet hangat agar interface terasa editorial tanpa kehilangan fungsi.",
          tags: ["Figma", "Design Systems", "Prototyping"],
        },
        {
          title: "Frontend Development",
          body: "Membawa desain ke implementasi melalui kode yang ringan, semantik, dan sadar aksesibilitas.",
          tags: ["HTML/CSS", "Tailwind", "JavaScript"],
        },
      ],
      en: [
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
      ],
    },
  });

  console.log("Site settings and about content seeded.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
