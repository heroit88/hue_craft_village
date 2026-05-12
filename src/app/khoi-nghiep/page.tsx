import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";

const sections = [
  {
    id: "quy-trinh",
    title: "Quy trình khởi nghiệp",
    body:
      "Từ ý tưởng gắn làng nghề, kiểm chứng thị trường, hoàn thiện mô hình kinh doanh tinh gọn đến thử nghiệm sản phẩm và mở rộng kênh bán.",
  },
  {
    id: "tai-lieu",
    title: "Tài liệu khởi nghiệp",
    body:
      "Mẫu kế hoạch, checklist pháp lý cơ bản, gợi ý nguồn vốn và cộng đồng hỗ trợ (nội dung minh họa trên website).",
  },
] as const;

export default function StartupHubPage() {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Khởi nghiệp</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Chuyên mục Khởi nghiệp – Kinh doanh</h1>
        <p className="mt-4 max-w-3xl text-[#5c4033]/85">
          Kết nối di sản làng nghề với mô hình kinh doanh bền vững, phù hợp học sinh – sinh viên và người trẻ muốn khởi nghiệp tại Huế.
        </p>
        <Link
          href="/chatbot-khoi-nghiep"
          className="mt-6 inline-flex rounded-full bg-[#0f3d3e] px-6 py-3 text-sm font-medium text-[#f5efe6]"
        >
          Mở Chatbot khởi nghiệp
        </Link>
      </FadeIn>

      {sections.map((s, i) => (
        <FadeIn key={s.id} delay={i * 0.05} className="scroll-mt-28 card-luxury p-6 md:p-8" id={s.id}>
          <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">{s.title}</h2>
          <p className="mt-3 text-[#5c4033]/85">{s.body}</p>
        </FadeIn>
      ))}
    </div>
  );
}
