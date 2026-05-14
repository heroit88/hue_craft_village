export type CraftContentBlock =
  | { type: "paragraphs"; items: string[] }
  | { type: "bullets"; items: string[] };

export type CraftSubsection = {
  title: string;
  blocks: CraftContentBlock[];
};

export type CraftSection = {
  title: string;
  blocks?: CraftContentBlock[];
  subsections?: CraftSubsection[];
};

export type GoogleSitesCraftBundle = {
  pageTitle: string;
  metaDescription: string;
  categoryEyebrow: string;
  heroTitle: string;
  heroSubtitle?: string;
  /** Dòng giới thiệu ngắn trên nền ảnh hero */
  heroTagline: string;
  /** Đoạn mở dưới hero (nền kem) */
  introCardParagraphs: string[];
  heroImage: string;
  sections: CraftSection[];
  galleryFromSource: { src: string; alt: string }[];
  mapSearchQuery: string;
  youtubeEmbeds: { videoId: string; title: string }[];
  /** Nếu có trong `villages.ts` — hiển thị trải nghiệm + gallery nội bộ */
  villageSlug?: string;
};
