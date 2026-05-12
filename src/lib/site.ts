export type NavLink = {
  label: string;
  href: string;
};

export type NavItemWithChildren = NavLink & {
  children: NavLink[];
  /** false: dropdown/accordion chỉ hiển thị children, không thêm dòng “Tổng quan” */
  showOverviewInDropdown?: boolean;
};

export type NavItem = NavLink | NavItemWithChildren;

/** Hai mục trọng tâm (chatbot) — có thể thêm tone để navbar tô nổi */
export type SpotlightNavItem = NavItemWithChildren & {
  tone: "burgundy" | "forest";
};

export function navItemHasChildren(item: NavItem): item is NavItemWithChildren {
  return "children" in item && Array.isArray(item.children) && item.children.length > 0;
}

/** Menu cấp một (Hỏi & Đáp đặt sau Khởi nghiệp — render riêng trong navbar) */
export const siteNavPrimaryLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
] as const;

export const siteNavHoiDap = { label: "Hỏi & Đáp", href: "/hoi-dap" } as const;

/** Sau Hỏi & Đáp */
export const siteNavAfterHoiDap = [
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;

/** Gom làng nghề, trải nghiệm, thư viện ảnh */
export const siteNavExplore = {
  label: "Khám phá",
  href: "/lang-nghe",
  showOverviewInDropdown: false,
  children: [
    { label: "Làng nghề", href: "/lang-nghe" },
    { label: "Trải nghiệm", href: "/trai-nghiem" },
    { label: "Thư viện ảnh", href: "/thu-vien-anh" },
  ],
} satisfies NavItemWithChildren;

/** Trọng tâm: hai chatbot + link nội dung kèm theo */
export const siteNavSpotlight: SpotlightNavItem[] = [
  {
    label: "Tư vấn hướng nghiệp",
    href: "/chatbot-huong-nghiep",
    tone: "burgundy",
    showOverviewInDropdown: false,
    children: [
      { label: "Chatbot AI hướng nghiệp", href: "/chatbot-huong-nghiep" },
      { label: "Nội dung & quy trình tư vấn", href: "/tu-van-huong-nghiep" },
    ],
  },
  {
    label: "Khởi nghiệp",
    href: "/chatbot-khoi-nghiep",
    tone: "forest",
    showOverviewInDropdown: false,
    children: [
      { label: "Chatbot AI khởi nghiệp", href: "/chatbot-khoi-nghiep" },
      { label: "Quy trình & tài liệu", href: "/khoi-nghiep" },
    ],
  },
];

export const siteConfig = {
  name: "Làng Nghề Huế",
  description:
    "Không gian số tôn vinh làng nghề truyền thống Huế, kết nối trải nghiệm văn hoá, hướng nghiệp và khởi nghiệp cho thế hệ mới.",
} as const;
