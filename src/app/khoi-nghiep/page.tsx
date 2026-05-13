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
        <p className="text-sm uppercase tracking-[0.2em] text-[#0B8CB4]">Khởi nghiệp</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Chuyên mục Khởi nghiệp – Kinh doanh</h1>
        <p className="mt-4 max-w-3xl text-[#5c4033]/85">
          Kết nối di sản làng nghề với mô hình kinh doanh bền vững, phù hợp học sinh – sinh viên và người trẻ muốn khởi nghiệp tại Huế.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-[#5c4033]/85">
          Quy trình, tài liệu và chatbot hỗ trợ bạn hình thành ý tưởng kinh doanh phù hợp.
        </p>
        <div className="relative mt-6 aspect-video w-full max-w-3xl overflow-hidden rounded-lg border border-[#c8dce8] bg-black shadow-sm ring-1 ring-[#0B8CB4]/12">
          <iframe
            className="absolute inset-0 size-full"
            src="https://www.youtube.com/embed/QLAsmB68m7I"
            title="Video chuyên mục khởi nghiệp"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className="mt-2 max-w-3xl text-xs text-[#5c4033]/65">
          Xem trên{" "}
          <a
            href="https://www.youtube.com/watch?v=QLAsmB68m7I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-[#cfe8f0] bg-[#f4fafc] px-2 py-0.5 font-medium text-[#0B8CB4] underline-offset-2 transition hover:border-[#a8d4e8] hover:bg-white hover:underline"
          >
            YouTube
          </a>
          .
        </p>
        <Link
          href="/chatbot-khoi-nghiep"
          className="mt-6 inline-flex rounded-full bg-[#0B8CB4] px-6 py-3 text-sm font-medium text-[#f5efe6] transition hover:bg-[#086b8d]"
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
