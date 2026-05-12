import { CalendarDays, Clock3 } from "lucide-react";
import { experiences } from "@/data/experiences";
import { FadeIn } from "@/components/shared/fade-in";

const schedule = ["08:30 Đón khách & giới thiệu", "09:00 Workshop nghề", "11:00 Trưng bày thành phẩm", "11:30 Kết nối nghệ nhân"];

export default function ExperiencePage() {
  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury p-8">
        <h1 className="text-5xl">Trải nghiệm làng nghề</h1>
        <p className="mt-3 text-[#5c4033]/80">Workshop thủ công, lịch hoạt động và giao diện booking mô phỏng hiện đại, dễ dùng trên mọi thiết bị.</p>
      </FadeIn>

      <div className="grid gap-6 xl:grid-cols-4">
        {experiences.map((item, idx) => (
          <FadeIn key={item.title} delay={idx * 0.08} className="card-luxury p-5">
            <h2 className="text-2xl">{item.title}</h2>
            <p className="mt-2 text-sm text-[#7b1e1e]">{item.subtitle}</p>
            <p className="mt-3 text-sm text-[#5c4033]/80">Thời lượng: {item.duration}</p>
            <p className="text-sm text-[#5c4033]/80">Trình độ: {item.level}</p>
          </FadeIn>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-6">
          <h3 className="text-3xl">Booking mockup</h3>
          <div className="mt-4 space-y-3">
            <input placeholder="Họ và tên" className="w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3 text-sm" />
            <input placeholder="Số điện thoại" className="w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3 text-sm" />
            <input placeholder="Ngày tham gia" className="w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3 text-sm" />
            <button type="button" className="w-full rounded-xl bg-[#7b1e1e] py-3 text-sm font-semibold text-[#f5efe6]">Gửi yêu cầu</button>
          </div>
        </FadeIn>
        <FadeIn className="card-luxury p-6" delay={0.1}>
          <h3 className="text-3xl">Timeline hoạt động</h3>
          <ul className="mt-4 space-y-3">
            {schedule.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-[#d9c8b2] bg-white/70 p-3 text-sm text-[#5c4033]/80">
                <Clock3 className="size-4 text-[#7b1e1e]" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#7b1e1e]"><CalendarDays className="size-4" /> Lịch được cập nhật mỗi tuần</p>
        </FadeIn>
      </div>
    </div>
  );
}
