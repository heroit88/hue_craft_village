import { notFound } from "next/navigation";
import Image from "next/image";
import { FadeIn } from "@/components/shared/fade-in";
import { villages } from "@/data/villages";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Trang tĩnh dưới `lang-nghe/<slug>/` thay cho `[slug]` */
const SLUGS_STATIC_PAGE = new Set([
  "hoa-giay-thanh-tien",
  "lang-huong-thuy-xuan",
  "gom-phuoc-tich",
  "deng-a-luoi",
  "tranh-lang-sinh",
  "quat-giay-bao-vinh",
  "long-cung-dinh-hue",
]);

export function generateStaticParams() {
  return villages.filter((v) => !SLUGS_STATIC_PAGE.has(v.slug)).map((v) => ({ slug: v.slug }));
}

export default async function VillageDetailPage({ params }: Props) {
  const { slug } = await params;
  const village = villages.find((v) => v.slug === slug);

  if (!village) return notFound();

  return (
    <div className="container-luxury space-y-10 py-10">
      <FadeIn className="card-luxury overflow-hidden">
        <div className="relative h-72 w-full">
          <Image src={village.image} alt={village.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="p-8">
          <p className="text-sm tracking-[0.2em] text-[#7b1e1e] uppercase">{village.category}</p>
          <h1 className="mt-2 text-5xl">{village.name}</h1>
          <p className="mt-4 max-w-3xl text-[#5c4033]/80">{village.description}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-6">
          <h2 className="text-3xl">Nghệ nhân tiêu biểu</h2>
          <p className="mt-3 text-[#5c4033]/80">{village.artisan}</p>
          <p className="mt-2 text-sm text-[#7b1e1e]">{village.years}</p>
        </FadeIn>
        <FadeIn className="card-luxury p-6" delay={0.1}>
          <h2 className="text-3xl">Trải nghiệm nổi bật</h2>
          <ul className="mt-3 space-y-2 text-[#5c4033]/80">
            {village.experiences.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </FadeIn>
      </div>

      <FadeIn className="card-luxury p-6">
        <h2 className="text-3xl">Gallery & video</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {village.gallery.map((item, index) => (
            <div key={item} className="rounded-2xl border border-[#d9c8b2] bg-white/70 p-4">
              <div className="relative h-28 overflow-hidden rounded-xl">
                <Image src={village.image} alt={item} fill className="object-cover" />
              </div>
              <p className="mt-3 text-sm text-[#5c4033]/80">{item}</p>
              <p className="text-xs text-[#7b1e1e]">Khoảnh khắc {index + 1}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
