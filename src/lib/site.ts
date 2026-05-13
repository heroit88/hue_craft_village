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

/** Mục menu ngang: link phẳng hoặc nhóm có submenu */
export type ProminentNavItem = NavLink | NavItemWithChildren;

/** Hai mục trọng tâm (chatbot) — có thể thêm tone để navbar tô nổi */
export type SpotlightNavItem = NavItemWithChildren & {
  tone: "burgundy" | "forest";
};

export function navItemHasChildren(item: NavItem): item is NavItemWithChildren {
  return "children" in item && Array.isArray(item.children) && item.children.length > 0;
}

/** Active cho mục menu ngang (kể cả khi đang ở route của submenu) */
export function prominentNavItemIsActive(item: ProminentNavItem, pathname: string): boolean {
  if (navItemHasChildren(item)) {
    if (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) return true;
    return item.children.some((c) => {
      const pathOnly = c.href.split("#")[0] ?? c.href;
      return pathname === pathOnly || (pathOnly !== "/" && pathname.startsWith(pathOnly));
    });
  }
  return pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
}

/** Menu ngang kiểu landing (mockup HUE CRAFT VILLAGE) */
export const siteNavProminentBar = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Làng nghề", href: "/lang-nghe" },
  {
    label: "Tư Vấn Hướng Nghiệp",
    href: "/tu-van-huong-nghiep",
    children: [
      { label: "Tầm quan trọng của việc chọn nghề", href: "/tu-van-huong-nghiep#tam-quan-trong" },
      { label: "Quy trình tư vấn hướng nghiệp", href: "/tu-van-huong-nghiep#quy-trinh" },
      { label: "Trắc nghiệm hướng nghiệp", href: "/tu-van-huong-nghiep#trac-nghiem" },
      { label: "Chatbot hỗ trợ tư vấn, định hướng nghề nghiệp", href: "/chatbot-huong-nghiep" },
      { label: "Các website tư vấn hướng nghiệp", href: "/tu-van-huong-nghiep#website-tham-khao" },
    ],
  },
  {
    label: "Chuyên mục khởi nghiệp",
    href: "/khoi-nghiep",
    children: [
      { label: "Quy trình khởi nghiệp", href: "/khoi-nghiep#quy-trinh" },
      { label: "Tài liệu Khởi nghiệp", href: "/khoi-nghiep#tai-lieu" },
      { label: "Chatbot hỗ trợ tư vấn khởi nghiệp", href: "/chatbot-khoi-nghiep" },
    ],
  },
  { label: "Thư viện", href: "/thu-vien-anh" },
  { label: "Tin tức", href: "/tin-tuc" },
] satisfies readonly ProminentNavItem[];

/** Menu cấp một (Hỏi & Đáp đặt sau Khởi nghiệp — render riêng trong navbar) */
export const siteNavPrimaryLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
] as const;

export const siteNavHoiDap = { label: "Hỏi & Đáp", href: "/hoi-dap" } as const;

/** Sau Hỏi & Đáp */
export const siteNavAfterHoiDap = [{ label: "Tin tức", href: "/tin-tuc" }] as const;

/** Gom làng nghề, thư viện ảnh */
export const siteNavExplore = {
  label: "Khám phá",
  href: "/lang-nghe",
  showOverviewInDropdown: false,
  children: [
    { label: "Làng nghề", href: "/lang-nghe" },
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
