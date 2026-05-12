import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";

const faqs = [
  {
    q: "Website có kết nối trực tiếp với làng nghề không?",
    a: "Đây là phiên bản frontend minh họa. Kết nối thực tế có thể bổ sung qua form liên hệ hoặc tích hợp sau.",
  },
  {
    q: "Chatbot có thay thế tư vấn viên không?",
    a: "Chatbot hỗ trợ gợi ý ban đầu. Bạn nên trao đổi thêm với giáo viên hoặc chuyên gia hướng nghiệp tại trường.",
  },
] as const;

export default function QaPage() {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-8 md:p-10" id="chuyen-muc">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Hỏi đáp</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Chuyên mục Hỏi – Đáp</h1>
        <p className="mt-4 max-w-3xl text-[#5c4033]/85">
          Giải đáp nhanh các thắc mắc về nội dung website, hướng nghiệp và khởi nghiệp gắn làng nghề Huế.
        </p>
      </FadeIn>

      <FadeIn className="scroll-mt-28 card-luxury p-6 md:p-8" id="faq" delay={0.05}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Câu hỏi thường gặp</h2>
        <ul className="mt-4 space-y-4">
          {faqs.map((item) => (
            <li key={item.q} className="rounded-xl border border-[#d9c8b2] bg-white/60 p-4">
              <p className="font-medium text-[#2f2018]">{item.q}</p>
              <p className="mt-2 text-sm text-[#5c4033]/85">{item.a}</p>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className="scroll-mt-28 card-luxury p-6 md:p-8" id="gui-cau-hoi" delay={0.1}>
        <h2 className="font-heading text-2xl text-[#2f2018] md:text-3xl">Gửi câu hỏi</h2>
        <p className="mt-3 text-[#5c4033]/85">
          Bạn có thể gửi câu hỏi chi tiết qua trang liên hệ (form mô phỏng). Đội ngũ sẽ phản hồi khi tích hợp backend.
        </p>
        <Link href="/lien-he" className="mt-4 inline-flex text-sm font-semibold text-[#7b1e1e]">
          Đi tới Liên hệ
        </Link>
      </FadeIn>
    </div>
  );
}
