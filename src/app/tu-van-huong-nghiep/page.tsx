import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";

const sections = [
  {
    id: "tam-quan-trong",
    title: "Tầm quan trọng của việc chọn nghề",
    body:
      "Chọn nghề đúng giúp học sinh phát huy năng lực, giảm lãng phí thời gian đào tạo và gia tăng cơ hội gắn bó lâu dài với làng nghề truyền thống cùng thị trường lao động hiện đại.",
  },
  {
    id: "quy-trinh",
    title: "Quy trình tư vấn hướng nghiệp",
    body:
      "Khám phá bản thân, đối chiếu với nhóm nghề thủ công – dịch vụ – sáng tạo, lập lộ trình học nghề và kết nối cơ hội thực tập tại các làng nghề Huế.",
  },
  {
    id: "trac-nghiem",
    title: "Trắc nghiệm hướng nghiệp",
    body:
      "Bộ câu hỏi gợi ý (mock) giúp bạn nhận diện sở thích, phong cách làm việc và mức độ phù hợp với môi trường nghề thủ công – văn hóa.",
  },
  {
    id: "website-tham-khao",
    title: "Các website tư vấn hướng nghiệp",
    body:
      "Tham khảo thêm các nguồn uy tín về hướng nghiệp, thị trường lao động và chương trình đào tạo nghề tại địa phương.",
  },
] as const;

export default function CareerAdvicePage() {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Tư vấn hướng nghiệp</p>
        <h1 className="mt-2 text-4xl md:text-5xl">Định hướng nghề nghiệp có cơ sở khoa học</h1>
        <p className="mt-4 max-w-3xl text-[#5c4033]/85">
          Nội dung tham chiếu theo cấu trúc dự án Huế Craft Village 4.0: gắn học sinh với làng nghề và xu hướng lao động thời đại số.
        </p>
        <Link
          href="/chatbot-huong-nghiep"
          className="mt-6 inline-flex rounded-full bg-[#7b1e1e] px-6 py-3 text-sm font-medium text-[#f5efe6]"
        >
          Mở Chatbot hướng nghiệp
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
