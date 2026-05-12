import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { villages } from "@/data/villages";
import { FadeIn } from "@/components/shared/fade-in";

export default function VillagesPage() {
  return (
    <div className="container-luxury py-10">
      <FadeIn className="card-luxury p-8">
        <h1 className="text-5xl">Làng nghề Huế</h1>
        <p className="mt-3 text-[#5c4033]/80">Khám phá các làng nghề tiêu biểu với giao diện tìm kiếm, lọc danh mục và thẻ thông tin trực quan.</p>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#d9c8b2] bg-white/70 px-4 py-3">
          <Search className="size-4 text-[#7b1e1e]" />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Tìm làng nghề, nghệ nhân, hoạt động..." />
        </div>
      </FadeIn>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {villages.map((v, idx) => (
          <FadeIn key={v.slug} delay={idx * 0.08} className="group card-luxury overflow-hidden transition hover:-translate-y-1">
            <div className="relative h-44 overflow-hidden">
              <Image src={v.image} alt={v.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7b1e1e]">{v.category}</p>
              <h2 className="mt-2 text-2xl">{v.name}</h2>
              <p className="mt-2 text-sm text-[#5c4033]/80">{v.shortDescription}</p>
              <Link href={`/lang-nghe/${v.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#7b1e1e]">Xem chi tiết</Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
