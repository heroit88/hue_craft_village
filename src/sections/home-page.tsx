"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Compass, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { villages } from "@/data/villages";
import { events } from "@/data/events";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -55]);
  const heroLayerY = useTransform(scrollY, [0, 500], [0, -110]);

  return (
    <div className="space-y-16 pb-8 md:space-y-24">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden md:min-h-[84vh]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/hero/home-hero.png"
            alt="Không gian làng nghề Huế"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div style={{ y: heroLayerY }} className="absolute inset-0 hidden md:block">
          <Image
            src="/images/hero/hero-layer.png"
            alt="Lớp parallax làng nghề"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-35 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f120f]/75 via-[#1f120f]/45 to-[#1f120f]/25" />
        <div className="container-luxury relative py-14 text-[#f5efe6] md:py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl text-4xl leading-tight md:text-7xl">
            Khám phá tinh hoa <span className="text-[#c8a96b]">Làng Nghề Huế</span>
          </motion.h1>
          <p className="mt-4 max-w-xl text-sm text-[#f5efe6]/90 md:mt-6 md:text-base">
            Hành trình chạm vào hồn nghề xứ Huế qua không gian văn hoá sống động, trải nghiệm thủ công và câu chuyện di sản đầy cảm xúc.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/lang-nghe" className="rounded-full bg-[#7B1E1E] px-6 py-3 text-center font-medium">Khám phá ngay</Link>
            <Link href="/thu-vien-anh" className="rounded-full border border-white/40 px-6 py-3 text-center font-medium">Xem thư viện ảnh</Link>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["700+", "Năm lịch sử"],
              ["10+", "Làng nghề sống"],
              ["100+", "Nghệ nhân"],
              ["50K+", "Khách trải nghiệm"],
            ].map((item) => (
              <div key={item[0]} className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                <p className="font-heading text-2xl text-[#c8a96b]">{item[0]}</p>
                <p className="text-xs text-[#f5efe6]/85">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxury">
        <SectionHeading eyebrow="Làng nghề nổi bật" title="Bốn sắc nghề làm nên bản sắc Huế" description="Mỗi làng nghề là một lớp trầm tích văn hóa, nơi bàn tay nghệ nhân lưu giữ ký ức và chuyển hóa thành tác phẩm." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {villages.map((v, index) => (
            <FadeIn key={v.slug} delay={index * 0.08} className="card-luxury overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  quality={75}
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl">{v.name}</h3>
                <p className="mt-2 text-sm text-[#5c4033]/80">{v.shortDescription}</p>
                <Link href={`/lang-nghe/${v.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7B1E1E]">
                  Khám phá <ArrowRight className="size-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-luxury grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-8">
          <h3 className="font-heading text-3xl">Trải nghiệm văn hoá Huế</h3>
          <p className="mt-3 text-[#5c4033]/80">Workshop thủ công, tour làng nghề và giao lưu nghệ nhân cho cá nhân, gia đình và doanh nghiệp.</p>
          <Link href="/trai-nghiem" className="mt-5 inline-flex items-center gap-2 text-[#7B1E1E]">Xem lịch trải nghiệm <Compass className="size-4" /></Link>
        </FadeIn>
        <FadeIn className="card-luxury p-8" delay={0.1}>
          <h3 className="font-heading text-3xl">Video và thư viện ảnh</h3>
          <p className="mt-3 text-[#5c4033]/80">Những khung hình cinematic kể câu chuyện làng nghề qua ánh sáng, bàn tay và nhịp thở đời sống Huế.</p>
          <Link href="/thu-vien-anh" className="mt-5 inline-flex items-center gap-2 text-[#7B1E1E]">Khám phá bộ sưu tập <Sparkles className="size-4" /></Link>
        </FadeIn>
      </section>

      <section className="container-luxury grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn className="card-luxury overflow-hidden p-4 md:p-6">
          <h3 className="font-heading text-2xl md:text-3xl">Video giới thiệu</h3>
          <div className="relative mt-4 h-52 overflow-hidden rounded-2xl md:h-72">
            <Image src="/images/events/events-banner.png" alt="Video giới thiệu làng nghề" fill sizes="(max-width: 1024px) 100vw, 60vw" quality={78} className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <p className="mt-3 text-sm text-[#5c4033]/80">Cinematic trailer về nhịp sống nghề truyền thống giữa lòng cố đô.</p>
        </FadeIn>
        <FadeIn className="card-luxury overflow-hidden p-4 md:p-6" delay={0.1}>
          <h3 className="font-heading text-2xl md:text-3xl">Gallery preview</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {["/images/gallery/gallery-1.png", "/images/gallery/gallery-2.png", "/images/gallery/gallery-3.png", "/images/gallery/gallery-4.png"].map((src, i) => (
              <div key={src} className={`relative overflow-hidden rounded-xl ${i === 0 ? "h-32" : "h-24 md:h-32"}`}>
                <Image src={src} alt={`Ảnh thư viện ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" quality={72} className="object-cover" />
              </div>
            ))}
          </div>
          <Link href="/thu-vien-anh" className="mt-3 inline-flex text-sm text-[#7B1E1E]">Xem toàn bộ thư viện</Link>
        </FadeIn>
      </section>

      <section className="container-luxury">
        <SectionHeading eyebrow="Tin tức & sự kiện" title="Nhịp sống làng nghề hôm nay" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {events.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.06} className="card-luxury p-5">
              <p className="text-xs tracking-[0.2em] text-[#7B1E1E]">{item.date}</p>
              <h4 className="mt-2 font-heading text-2xl">{item.title}</h4>
              <p className="mt-2 text-sm text-[#5c4033]/80">{item.location}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-luxury grid gap-6 lg:grid-cols-2">
        <FadeIn className="card-luxury p-8">
          <div className="inline-flex rounded-full bg-[#7B1E1E]/10 p-2 text-[#7B1E1E]"><Briefcase className="size-5" /></div>
          <h3 className="mt-4 font-heading text-3xl">Chatbot Hướng nghiệp</h3>
          <p className="mt-3 text-[#5c4033]/80">Định hướng nghề thủ công phù hợp với tính cách, sở thích và mục tiêu phát triển cá nhân.</p>
          <Link href="/chatbot-huong-nghiep" className="mt-5 inline-flex items-center gap-2 text-[#7B1E1E]">Bắt đầu trò chuyện <ArrowRight className="size-4" /></Link>
        </FadeIn>
        <FadeIn className="card-luxury p-8" delay={0.1}>
          <div className="inline-flex rounded-full bg-[#7B1E1E]/10 p-2 text-[#7B1E1E]"><Sparkles className="size-5" /></div>
          <h3 className="mt-4 font-heading text-3xl">Chatbot Khởi nghiệp</h3>
          <p className="mt-3 text-[#5c4033]/80">Tư vấn ý tưởng kinh doanh làng nghề, phân tích thị trường và gợi ý roadmap triển khai thực tế.</p>
          <Link href="/chatbot-khoi-nghiep" className="mt-5 inline-flex items-center gap-2 text-[#7B1E1E]">Mở dashboard AI <ArrowRight className="size-4" /></Link>
        </FadeIn>
      </section>
    </div>
  );
}
