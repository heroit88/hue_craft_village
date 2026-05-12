export type Village = {
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  artisan: string;
  years: string;
  hero: string;
  gallery: string[];
  experiences: string[];
};

export const villages: Village[] = [
  {
    slug: "lang-huong-thuy-xuan",
    name: "Làng hương Thủy Xuân",
    category: "Hương truyền thống",
    image: "/images/villages/lang-huong-thuy-xuan.png",
    shortDescription: "Sắc hương cổ kính nhuộm tím ký ức đất Cố đô.",
    description:
      "Nghề làm hương ở Thủy Xuân lưu giữ kỹ thuật pha trầm, se hương và phối sắc thủ công, tạo nên không gian tâm linh đậm chất Huế.",
    artisan: "Nghệ nhân Trần Thị Huệ",
    years: "Hơn 700 năm",
    hero: "linear-gradient(120deg, rgba(123,30,30,0.8), rgba(92,64,51,0.62))",
    gallery: ["Sân hương nhiều màu", "Se tăm hương", "Nhuộm màu tự nhiên"],
    experiences: ["Se hương thủ công", "Pha hương theo mùi", "Gói hương lễ"],
  },
  {
    slug: "non-la-phu-cam",
    name: "Nón lá Phú Cam",
    category: "Thủ công mỹ nghệ",
    image: "/images/villages/non-la-phu-cam.png",
    shortDescription: "Tinh xảo trong từng lớp lá, nhẹ như thơ xứ Huế.",
    description:
      "Nghề chằm nón lá Phú Cam nổi tiếng bởi kỹ thuật lên khung chuẩn, ép lá mượt và thêu họa tiết thanh nhã mang hồn cung đình.",
    artisan: "Nghệ nhân Nguyễn Thị Lan",
    years: "Hơn 300 năm",
    hero: "linear-gradient(120deg, rgba(200,169,107,0.8), rgba(92,64,51,0.64))",
    gallery: ["Chằm vành nón", "Sấy lá", "Thêu họa tiết"],
    experiences: ["Chằm 1 chiếc nón mini", "Vẽ hoa văn", "Trải nghiệm áo dài nón lá"],
  },
  {
    slug: "gom-phuoc-tich",
    name: "Làng gốm Phước Tích",
    category: "Gốm truyền thống",
    image: "/images/villages/gom-phuoc-tich.png",
    shortDescription: "Đất nung kể chuyện thời gian bên dòng Ô Lâu.",
    description:
      "Phước Tích gìn giữ lò gốm cổ với quy trình nhào đất, xoay bàn và nung củi, tạo nên chất gốm mộc mạc nhưng bền chắc.",
    artisan: "Nghệ nhân Lê Quang Vinh",
    years: "Trên 500 năm",
    hero: "linear-gradient(120deg, rgba(92,64,51,0.82), rgba(123,30,30,0.58))",
    gallery: ["Lò nung cổ", "Nặn gốm", "Tô men"],
    experiences: ["Nặn cốc gốm", "Trang trí men", "Tham quan làng cổ"],
  },
  {
    slug: "hoa-giay-thanh-tien",
    name: "Làng hoa giấy Thanh Tiên",
    category: "Trang trí dân gian",
    image: "/images/villages/hoa-giay-thanh-tien.png",
    shortDescription: "Sắc hoa giấy rực rỡ trong lễ nghi truyền thống Huế.",
    description:
      "Nghề hoa giấy Thanh Tiên mang vẻ đẹp tượng trưng cho phúc lành, được tạo tác hoàn toàn thủ công với kỹ thuật nhuộm và xếp cánh tinh tế.",
    artisan: "Nghệ nhân Phan Văn Minh",
    years: "Gần 400 năm",
    hero: "linear-gradient(120deg, rgba(123,30,30,0.78), rgba(200,169,107,0.66))",
    gallery: ["Xếp cánh hoa", "Nhuộm giấy", "Trưng bày lễ hội"],
    experiences: ["Làm hoa sen giấy", "Cắm bình truyền thống", "Kể chuyện lễ tiết"],
  },
];
