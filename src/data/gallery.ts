/** Ảnh trong `public/images/gallery` — thêm file mới vào mảng này */
export const galleryImagePaths = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.png",
  "/images/gallery/gallery-3.png",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.png",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.png",
] as const;

export const galleryCategories = ["Tất cả", "Lễ hội", "Nghệ nhân", "Workshop", "Không gian làng"] as const;

const rotateCategories = ["Lễ hội", "Nghệ nhân", "Workshop", "Không gian làng"] as const;

export type GalleryItem = {
  title: string;
  category: (typeof rotateCategories)[number];
  image: string;
};

export const galleryItems: GalleryItem[] = galleryImagePaths.map((image, i) => ({
  title: `Ảnh ${i + 1}`,
  category: rotateCategories[i % rotateCategories.length]!,
  image,
}));
