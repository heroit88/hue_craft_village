import { FadeIn } from "@/components/shared/fade-in";

const timeline = [
  { year: "1601", text: "Hình thành các phường nghề quanh kinh thành." },
  { year: "1885", text: "Nghề thủ công bước vào giai đoạn cung ứng cung đình." },
  { year: "1993", text: "Quần thể di tích Huế được UNESCO công nhận." },
  { year: "2026", text: "Chuyển đổi số làng nghề với nền tảng trải nghiệm mới." },
];

export default function AboutPage() {
  return (
    <div className="container-luxury space-y-12 py-10">
      <FadeIn className="card-luxury p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Giới thiệu</p>
        <h1 className="mt-3 text-5xl">Câu chuyện Làng Nghề Huế</h1>
        <p className="mt-5 max-w-4xl text-[#5c4033]/85">
          Làng nghề Huế là ký ức sống của đất Cố đô, nơi nghề thủ công không chỉ tạo ra sản phẩm mà còn lưu giữ lễ nghi, mỹ cảm và tri thức truyền đời.
        </p>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-8">
          <h2 className="text-3xl">Sứ mệnh</h2>
          <p className="mt-3 text-[#5c4033]/80">Bảo tồn tinh hoa nghề Huế thông qua giáo dục trải nghiệm, truyền cảm hứng nghề nghiệp và kết nối thị trường bền vững.</p>
        </FadeIn>
        <FadeIn className="card-luxury p-8" delay={0.1}>
          <h2 className="text-3xl">Tầm nhìn</h2>
          <p className="mt-3 text-[#5c4033]/80">Trở thành hệ sinh thái văn hoá - du lịch - sáng tạo hàng đầu miền Trung cho các cộng đồng làng nghề truyền thống.</p>
        </FadeIn>
      </div>

      <FadeIn className="card-luxury p-8">
        <h2 className="text-3xl">Timeline phát triển</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-2xl border border-[#d9c8b2] bg-white/60 p-4">
              <p className="text-sm tracking-[0.2em] text-[#7b1e1e]">{item.year}</p>
              <p className="mt-2 text-[#5c4033]/85">{item.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
