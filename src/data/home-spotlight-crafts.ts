/** Nội dung & danh mục tham chiếu: https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7 — ảnh thẻ dùng file trong `public/images/villages`. */
export const hueCraftVillage40Site =
  "https://sites.google.com/view/hue-craft-village/trang-ch%E1%BB%A7";

export type HomeSpotlightCraft = {
  name: string;
  description: string;
  image: string;
  /** Đường dẫn nội bộ hoặc URL đầy đủ */
  href: string;
  external?: boolean;
};

/** Bổ sung khối “Làng nghề nổi bật” trang chủ (chưa có trang chi tiết nội bộ — link Google Sites). */
export const homeFeaturedExtraCrafts: HomeSpotlightCraft[] = [
  {
    name: "Nghề dệt Dèng A Lưới",
    description:
      "Hoa văn dệt thổ cẩm của đồng bào dân tộc thiểu số, phản ánh bản sắc văn hóa vùng miền núi gắn với Huế.",
    image: "/images/villages/det_deng_a_luoi.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Tranh làng Sình",
    description:
      "Dòng tranh dân gian đặc trưng với sắc điệp và đề tài lễ hội, phồn thực đời sống làng quê xứ Huế.",
    image: "/images/villages/tranh-lang-sinh.png",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Nghề làm lọng cung đình Huế",
    description:
      "Lọng cố đô với kỹ thuật khung tre, lụa và trang trí cung đình — di sản nghề thủ công đặc sắc Huế.",
    image: "/images/villages/lam-long-cung-dinh-hue.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Nghề làm quạt giấy phố cổ Bao Vinh",
    description:
      "Tinh hoa quạt giấy thủ công — họa tiết thanh nhã, gắn với phố cổ và ký ức thương cảng xưa.",
    image: "/images/villages/quat-giay-bao-vinh.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
];

export const homeSpotlightCrafts: HomeSpotlightCraft[] = [
  {
    name: "Làng hoa giấy Thanh Tiên",
    description:
      "Nghề hoa giấy mang sắc màu lễ hội và biểu tượng phúc lành, gắn với đời sống tinh thần người Huế.",
    image: "/images/villages/hoa-giay-thanh-tien.png",
    href: "/lang-nghe/hoa-giay-thanh-tien",
  },
  {
    name: "Làng hương trầm Thủy Xuân",
    description:
      "Không gian hương trầm cổ kính, nơi lưu giữ kỹ thuật pha chế và se hương truyền thống bên chân núi Ngự Bình.",
    image: "/images/villages/huong_tram_thuy_xuan.jpg",
    href: "/lang-nghe/lang-huong-thuy-xuan",
  },
  {
    name: "Nghề dệt Dèng A Lưới",
    description:
      "Hoa văn dệt thổ cẩm của đồng bào dân tộc thiểu số, phản ánh bản sắc văn hóa vùng miền núi gắn với Huế.",
    image: "/images/villages/det_deng_a_luoi.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Làng gốm Phước Tích",
    description:
      "Làng cổ ven sông Ô Lâu với nghề gốm mộc, lò nung truyền thống và những sản phẩm gốm gắn đời sống dân dã.",
    image: "/images/villages/gom-phuoc-tich.png",
    href: "/lang-nghe/gom-phuoc-tich",
  },
  {
    name: "Tranh làng Sình",
    description:
      "Dòng tranh dân gian đặc trưng với sắc điệp và đề tài lễ hội, phồn thực đời sống làng quê xứ Huế.",
    image: "/images/villages/tranh-lang-sinh.png",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Nghề làm quạt giấy phố cổ Bao Vinh",
    description:
      "Tinh hoa quạt giấy thủ công — họa tiết thanh nhã, gắn với phố cổ và ký ức thương cảng xưa.",
    image: "/images/villages/quat-giay-bao-vinh.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Nghề làm lọng cung đình Huế",
    description:
      "Lọng cố đô với kỹ thuật khung tre, lụa và trang trí cung đình — di sản nghề thủ công đặc sắc Huế.",
    image: "/images/villages/lam-long-cung-dinh-hue.jpg",
    href: hueCraftVillage40Site,
    external: true,
  },
  {
    name: "Làng nghề nón lá xứ Huế",
    description:
      "Nón lá Phú Cam và các vùng lân cận — chằm nón, lá và họa tiết tinh xảo gắn với hình ảnh người con gái Huế.",
    image: "/images/villages/non-la-phu-cam.png",
    href: "/lang-nghe/non-la-phu-cam",
  },
];
