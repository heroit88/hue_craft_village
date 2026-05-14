export const featuredNews = {
  title: "Festival Huế 2026 – Lễ hội mùa Hạ",
  excerpt:
    "Chuỗi hoạt động văn hóa, nghệ thuật và du lịch đặc sắc diễn ra xuyên suốt mùa hè với nhiều chương trình cộng đồng, biểu diễn nghệ thuật và trải nghiệm di sản.",
};

export type EventCard = {
  /** ISO YYYY-MM-DD — dùng để sắp xếp (ngày mới nhất lên trước) */
  sortDate: string;
  day: string;
  month: string;
  title: string;
  dateRange: string;
  description: string;
  location: string;
};

const eventsUnsorted: EventCard[] = [
  {
    sortDate: "2026-05-15",
    day: "15",
    month: "MAY",
    title: "Festival Huế 2026 – Lễ hội mùa Hạ",
    dateRange: "Tháng 5 – 6/2026",
    description:
      "Chuỗi hoạt động văn hóa, nghệ thuật và du lịch đặc sắc diễn ra xuyên suốt mùa hè với nhiều chương trình cộng đồng, biểu diễn nghệ thuật và trải nghiệm di sản.",
    location: "Đại Nội Huế & nhiều không gian di sản",
  },
  {
    sortDate: "2026-06-13",
    day: "13",
    month: "JUN",
    title: "Tuần lễ Festival Nghệ thuật Quốc tế Huế 2026",
    dateRange: "13/06/2026 – 18/06/2026",
    description:
      "Điểm nhấn lớn nhất của Festival Huế 2026 với nhiều chương trình nghệ thuật quốc tế, biểu diễn cung đình và hoạt động cộng đồng tại các không gian di sản.",
    location: "Thành phố Huế",
  },
  {
    sortDate: "2026-04-28",
    day: "28",
    month: "APR",
    title: "Chương trình “Hoàng cung huyền ảo”",
    dateRange: "Cuối tháng 4 – đầu tháng 5/2026",
    description:
      "Không gian trải nghiệm đêm tái hiện vẻ đẹp cung đình Huế kết hợp ánh sáng, nghệ thuật trình diễn và công nghệ hiện đại.",
    location: "Đại Nội Huế",
  },
  {
    sortDate: "2026-06-08",
    day: "08",
    month: "JUN",
    title: "Lễ hội Hoa đăng Huế",
    dateRange: "Trong khuôn khổ Festival Huế 2026",
    description:
      "Hoạt động văn hóa cộng đồng với hàng nghìn hoa đăng được thả trên sông Hương, tạo nên không gian lung linh đặc trưng của Huế.",
    location: "Khu vực sông Hương",
  },
  {
    sortDate: "2026-07-20",
    day: "20",
    month: "JUL",
    title: "Ngày hội Sen Huế 2026",
    dateRange: "Mùa hè 2026",
    description:
      "Sự kiện quảng bá văn hóa sen Huế kết hợp ẩm thực, nghệ thuật và các hoạt động trải nghiệm truyền thống.",
    location: "Thành phố Huế",
  },
  {
    sortDate: "2026-04-24",
    day: "24",
    month: "APR",
    title: "Triển lãm phong lan, cây cảnh và đá cảnh ba miền",
    dateRange: "24/04/2026 – 28/04/2026",
    description:
      "Không gian nghệ thuật sinh vật cảnh quy tụ hàng nghìn tác phẩm phong lan, bonsai và đá cảnh trong khuôn khổ Festival Huế 2026.",
    location: "Đại Nội Huế",
  },
  {
    sortDate: "2026-04-18",
    day: "18",
    month: "APR",
    title: "Lễ hội Điện Huệ Nam",
    dateRange: "18 – 19/04/2026",
    description:
      "Một trong những lễ hội tín ngưỡng dân gian lớn của Huế, thu hút đông đảo người dân và du khách tham gia.",
    location: "Điện Huệ Nam, Huế",
  },
  {
    sortDate: "2026-05-12",
    day: "12",
    month: "MAY",
    title: "Chợ quê ngày hội",
    dateRange: "Trong chuỗi Festival Huế 2026",
    description:
      "Hoạt động tái hiện không gian chợ quê truyền thống với ẩm thực, trò chơi dân gian và làng nghề thủ công.",
    location: "Các không gian văn hóa cộng đồng tại Huế",
  },
];

/** Ngày mới nhất (theo sortDate) hiển thị trước */
export const events: EventCard[] = [...eventsUnsorted].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);
