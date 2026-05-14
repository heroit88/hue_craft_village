import { events, featuredNews } from "@/data/events";
import { FadeIn } from "@/components/shared/fade-in";

export default function NewsPage() {
  return (
    <div className="container-luxury space-y-8 py-10">
      <FadeIn className="card-luxury overflow-hidden">
        <div className="h-64 bg-gradient-to-r from-[#7b1e1e] via-[#5c4033] to-[#2f2018]" />
        <div className="p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7b1e1e]">Bài nổi bật</p>
          <h1 className="mt-2 text-5xl">{featuredNews.title}</h1>
          <p className="mt-4 max-w-3xl text-[#5c4033]/80">{featuredNews.excerpt}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {events.map((item, idx) => (
          <FadeIn key={item.title} delay={idx * 0.08} className="card-luxury p-6">
            <p className="text-xs tracking-[0.2em] text-[#7b1e1e]">
              {item.day} {item.month} {item.sortDate.slice(0, 4)} · {item.dateRange}
            </p>
            <h2 className="mt-2 text-3xl">{item.title}</h2>
            <p className="mt-2 text-[#5c4033]/80">{item.location}</p>
            <p className="mt-2 text-sm text-[#5c4033]/75">{item.description}</p>
            <div className="mt-4 h-px w-full bg-[#d9c8b2]" />
            <p className="mt-4 text-sm text-[#5c4033]/70">Timeline sự kiện được cập nhật liên tục để du khách dễ dàng theo dõi và đăng ký tham dự.</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
