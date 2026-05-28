export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  coverAlt: string;
  categories: string[];
  stack: string[];
  year: string;
  role: string;
  client: string;
  metrics: { label: string; value: string }[];
  challenge: string[];
  insights: { title: string; body: string }[];
  process: { title: string; body: string }[];
  gallery: { image: string; alt: string; caption: string }[];
  solution: string[];
  codeSample?: { file: string; language: string; code: string };
};

export const site = {
  name: "Warm Story",
  title: "Warm Story Portfolio",
  description:
    "Portfolio editorial bertema hangat yang memadukan storytelling, UI yang refined, dan studi kasus produk digital.",
  email: "hello@warmstory.com",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  availability: "Available for new projects",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Resume", href: "#" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const featuredProjects: Project[] = [
  {
    slug: "brewing-better-ux",
    title: "Brewing Better UX",
    summary:
      "Redesign aplikasi pemesanan coffee shop untuk mengurangi friksi pada jam sibuk pagi tanpa menghilangkan rasa hospitality brand.",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBElddqhX6gEpUZao78l7MguBtrUMa5wl1syoZolxnsWVrc8yVa0ILI1tWv6LIfq-saJW59eljI6yJv0ql-hrM9owetkthJT-cdxAzyZecl77LlkmPNyI7ZTUGQMjdV10QX6Ty-rMBd6peTrIuSleUmJ8jlXKfGfmpj8h43Jp7C-QUisDtQ5NvbmvJiKhXIv-Q48_nEacUXm1A6JWleoR2QHQJM8kCdls1ep9vuAruucHuRNDBJiiNgWj0fulYkBN5vDmJMAgaTV03",
    coverAlt: "Coffee ordering app on a phone beside a latte in warm morning light.",
    categories: ["UX Research", "UI Design"],
    stack: ["Laravel", "PostgreSQL", "Tailwind CSS"],
    year: "2024",
    role: "Lead Product Designer",
    client: "Boutique Coffee Subscription",
    metrics: [
      { label: "Checkout completion", value: "+24%" },
      { label: "Order abandonment", value: "-18%" },
      { label: "Pickup clarity", value: "78% users preferred guided status" },
    ],
    challenge: [
      "Independent coffee shops perlu melayani pelanggan yang ingin serba cepat tanpa mengubah pengalaman menjadi terasa seperti vending machine.",
      "Solusi digital lama terlalu transaksional, minim konteks produk, dan tidak memberi estimasi pickup yang meyakinkan.",
    ],
    insights: [
      {
        title: "Time sensitivity",
        body: "Pengguna meninggalkan proses checkout saat estimasi pickup terasa samar atau terlalu lama.",
      },
      {
        title: "Editorial discovery",
        body: "Pengunjung tetap ingin membaca tasting notes dan detail roast, bukan sekadar daftar nama menu.",
      },
    ],
    process: [
      {
        title: "Spatial mapping",
        body: "Wireframe awal memprioritaskan hierarki visual antara foto produk, rasa, ukuran, dan waktu pickup.",
      },
      {
        title: "Micro-interaction pass",
        body: "State brewing dibuat hangat dan jelas agar pengguna merasa proses fisik di toko benar-benar berjalan.",
      },
    ],
    gallery: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByYOtpg7AReFRxrCNTZu6cdagAUlgRV-XNjVxoiZxhY5f9KMFGnAFtPuhEHlgWtdIoH_Z6N3FujGi-FskznXMdZhk7JsI6urkQTtJSi9zJ5X_LHVCYZm7H1nadvo_UGB3KvBi60qRqd0oFsMFzu6AzWuhNXzzl8lQet0raQy0SuXCx_a7tIaLsFQse2l3ZZgGj0BE_S8JXDfBF1cHTVI5mi0x5KeeFMlqWrUe2kLJuI7thyf0hG9jIVXVOFs_X32w5swSQkIxMhzbD",
        alt: "Notebook with hand-drawn mobile UI sketches beside coffee.",
        caption: "Early ideation untuk alur pre-order dan pickup.",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDarSPjYWKS6jANi6ql-spln1WRJgENYMzcfXaokt4h8jf3sDLFsXPNJyq2PywMh_tzH3gPxvQwxpiQcPT6OTyBMsgMjyBKEbToYBxXp7eRvDOfdUe8avj2OarbjdQc_smWy_1kQpsTM6IG7aAiOMbVQAxN3ol-NBOtYXENheWIh3IsMrm_bXNGjIGCBauv_E0Ix--930LRx-vp9VPxf-OVRrKqZKqOcJiwjk21VoHfbRa7iO43ZJWa8x22mPaHJmK210zgY5__j9qy",
        alt: "Low-fidelity mobile wireframes on a soft neutral background.",
        caption: "Mid-fidelity wireframes untuk validasi struktur.",
      },
    ],
    solution: [
      "Sistem visual akhir menggabungkan espresso tones, cream highlights, dan chip metadata untuk menjaga rasa hangat sekaligus informatif.",
      "Status order dibuat progresif dengan bahasa yang lebih manusiawi agar pengguna paham apa yang sedang terjadi di balik layar.",
    ],
    codeSample: {
      file: "OrderTracker.js",
      language: "javascript",
      code: `const brewingStages = {\n  RECEIVED: { label: "Order Received", icon: "receipt_long" },\n  GRINDING: { label: "Grinding Beans", icon: "grain" },\n  POURING: { label: "Careful Pour", icon: "water_drop" },\n  READY: { label: "Ready for Pickup", icon: "check_circle" },\n};\n\nexport function updateStatusIndicator(currentStageId) {\n  const stage = brewingStages[currentStageId];\n  if (!stage) return;\n\n  UI.setStatusText(stage.label);\n  UI.animateIcon(stage.icon, {\n    duration: 300,\n    easing: "cubic-bezier(0.4, 0, 0.2, 1)",\n  });\n\n  if (currentStageId === "READY") {\n    UI.triggerHapticFeedback("success");\n    UI.highlightContainer("bg-success");\n  }\n}`,
    },
  },
  {
    slug: "latte-interface",
    title: "Latte Interface",
    summary:
      "Eksplorasi dashboard komunitas dengan fokus pada tipografi lembut, kontras aksesibel, dan ritme visual yang tenang.",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxRCjWD6aBjuOoMfnW9xKssvs4L-WiPi0YhZlDYizq890UyHLA533U3S0S-nXVU6n6if8nnrlXywRfahtZCb9zkJPaPV2NIGHOMyuRi_Mn2pM9LePIkscZgwIUfv-5wFkPckDwUVR9LZgs5a-p9bIGGNfHKAaG4QNoeDggwbmsfWx_4jfoCDicytKe3Me5gOMnfok1qItjnBKFdwXBtBK1EOSHgCzqzdI2swPVnFtfzIMFYDIINMkB4k_KWTRrEFdH7by_Mz0Sy5U3",
    coverAlt: "Minimalist dashboard on a laptop beside a dark coffee mug.",
    categories: ["UI Design"],
    stack: ["React", "PostgreSQL", "CSS"],
    year: "2023",
    role: "UI Designer",
    client: "Community Operations Team",
    metrics: [
      { label: "Task completion", value: "+17%" },
      { label: "Visual consistency", value: "1 shared dashboard language" },
    ],
    challenge: [
      "Dashboard lama terasa dingin dan terlalu teknis untuk tim non-analitik.",
    ],
    insights: [
      {
        title: "Soft hierarchy",
        body: "Tim lebih cepat memahami data ketika warna dan tipografi dibangun dengan tone yang lebih kalem.",
      },
    ],
    process: [
      {
        title: "Interface rhythm",
        body: "Fokus pada card density, whitespace, dan pengurangan visual noise.",
      },
    ],
    gallery: [],
    solution: [
      "Membuat sistem panel dengan jarak yang lebih lapang dan fokus pada scannability.",
    ],
  },
  {
    slug: "espresso-design-system",
    title: "Espresso Design System",
    summary:
      "Library komponen yang scalable untuk tim produk dengan perhatian besar pada DX, dokumentasi, dan aksesibilitas.",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALPCsSn7rCqjKlGyxk2ENPhYU3z-6d_iUYY_L5KQ3CU2m5n-cvA7eHXNMzvSkccj_rHDibDyaZeUufY9g6rLlQ4IwKMacTvvUlkkONM1Tf_rT87peJS7RVcVbqZownGfIwn-45_ONenJXthudmv7kGklpheVdyLkpQY6ntcHzgp7tBsyri0U7xsf69xl4k3_IGdI_mdU4cxCmGhuNtbQ_fWzxcApShEa5w5kv29N-zcj3P0tpZfxJGQK7vWIksOP8t8qcf6ijRNIcx",
    coverAlt: "Design system documentation on a monitor with earthy swatches.",
    categories: ["Design Systems", "Development"],
    stack: ["HTML", "Bootstrap", "SQL"],
    year: "2022",
    role: "Design System Lead",
    client: "Fintech Startup",
    metrics: [
      { label: "Reusable components", value: "42+" },
      { label: "UI regression issues", value: "-31%" },
    ],
    challenge: ["Tim produk tumbuh cepat dan tidak memiliki bahasa UI yang seragam."],
    insights: [
      {
        title: "Shared vocabulary",
        body: "Dokumentasi dan naming convention sama pentingnya dengan visual component.",
      },
    ],
    process: [
      {
        title: "System audit",
        body: "Memetakan pola yang berulang dan menetapkan primitives bersama.",
      },
    ],
    gallery: [],
    solution: [
      "Dokumentasi komponen dibuat ringkas namun cukup jelas untuk developer dan designer.",
    ],
  },
  {
    slug: "moka-ecommerce",
    title: "Moka E-commerce",
    summary:
      "Checkout flow untuk brand roasting artisanal yang menyeimbangkan storytelling visual dengan target konversi.",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB39Ew1cCVkGSrui7XlafvaBoVhxI3s7wJpc1Bv2JBGrqggZy1beOXKA5IqcIUQY7zJOeyoxdp6a41WmE3MRa8zosVIhQ15BE6DRPWeFVXQ1HcQtR8Vy9M6WBlTp3FIGkvcoTPsnZ5NQ4enDA0LXO9-xY3CvOnRirwvSrFU5NhCq3_OZOfvVG6lzTalB4g30ZGULPxycVCEGIWBizcGobOcbxVNOR-fckhhsgA0wOenPiBiBm_c3YyOO6NQq8KYiUnnkdFkdPFatXK5",
    coverAlt: "Minimal retail product page shown on a tablet.",
    categories: ["UI Design", "E-commerce"],
    stack: ["Vue.js", "Firebase", "Tailwind CSS"],
    year: "2023",
    role: "Product Designer",
    client: "Artisanal Roasting Company",
    metrics: [{ label: "Checkout drop-off", value: "-14%" }],
    challenge: ["Brand storytelling hilang saat pengguna masuk ke flow checkout."],
    insights: [],
    process: [],
    gallery: [],
    solution: [
      "Menyisipkan context visual ringan dan ringkasan pesanan yang lebih meyakinkan.",
    ],
  },
  {
    slug: "cold-brew-dashboard",
    title: "Cold Brew Dashboard",
    summary:
      "Dashboard analytics untuk inventory manager dengan fokus pada keterbacaan data dan pemisahan tonal yang halus.",
    cover:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIcqWGxumQ8L8L9W01amk63iJ3-3Ynn-hAD--8V2I8dH_mObnUhyStSmo-02GdUbCIz96-gl40lyM-hqi8mFdcfE7Rh8yp9BHPSnMu_OGja7UwPqAO8BmuXhDFAB0luB2pixMopZHGeE_kK0uyQcqOnW052UseK2WVde-uiUlrgWpsLz-pvilvK32RHkT5yriWtpExo6ZMpySOawbOz6amVDd4jRJlUwUXe3vpTUt86U3Bm6krEgfb9g3MtwBveeZzfWkKccFoafsT",
    coverAlt: "Dark analytics dashboard on a curved monitor with muted charts.",
    categories: ["UX Research", "Dashboard"],
    stack: ["Next.js", "TypeScript", "D3.js"],
    year: "2024",
    role: "UX Designer",
    client: "Inventory Operations",
    metrics: [{ label: "Reporting speed", value: "+21%" }],
    challenge: ["Pengguna kesulitan membaca insight karena dashboard terlalu padat."],
    insights: [],
    process: [],
    gallery: [],
    solution: [
      "Membuat layout yang lebih modular dan grafik yang lebih cepat dipindai.",
    ],
  },
];

export const skills = [
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
    body: "Menghidupkan desain melalui kode yang semantik, ringan, dan sadar aksesibilitas.",
    tags: ["HTML/CSS", "Tailwind", "JavaScript"],
  },
];

