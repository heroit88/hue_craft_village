"use client";

import { motion } from "framer-motion";
import { marketCards, startupMessages, startupResources, startupRoadmap } from "@/data/startup";

export default function StartupChatbotPage() {
  return (
    <div className="container-luxury grid gap-6 py-8 md:py-10 xl:grid-cols-[1.2fr_1fr]">
      <section className="card-luxury p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl">Chatbot Khởi nghiệp</h1>
        <p className="mt-2 text-[#5c4033]/80">Dashboard + chat hybrid cho hành trình xây dựng mô hình kinh doanh làng nghề.</p>
        <div className="mt-6 space-y-3">
          {startupMessages.map((m, i) => (
            <motion.div
              key={`${m.text}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm sm:max-w-[85%] ${m.role === "user" ? "ml-auto bg-[#0f3d3e] text-[#f5efe6]" : "bg-white/80 text-[#5c4033]"}`}
            >
              {m.text}
            </motion.div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <input className="rounded-xl border border-[#d9c8b2] bg-white/70 px-3 py-2 text-sm outline-none" placeholder="Nhập ý tưởng kinh doanh..." />
          <button type="button" className="rounded-xl bg-[#0f3d3e] px-4 py-2 text-sm text-[#f5efe6]">Gửi</button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {marketCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-[#d9c8b2] bg-white/70 p-4">
              <p className="text-sm text-[#5c4033]/80">{card.title}</p>
              <p className="mt-2 font-heading text-2xl text-[#7b1e1e]">{card.value}</p>
              <p className="mt-1 text-xs text-[#5c4033]/70">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <aside className="space-y-6">
        <div className="card-luxury p-4 sm:p-6">
          <h2 className="text-2xl">Roadmap khởi nghiệp</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#5c4033]/85">
            {startupRoadmap.map((step, i) => <li key={step}>0{i + 1}. {step}</li>)}
          </ul>
        </div>
        <div className="card-luxury p-4 sm:p-6">
          <h2 className="text-2xl">Tài nguyên hữu ích</h2>
          <ul className="mt-4 space-y-3">
            {startupResources.map((resource) => (
              <li key={resource} className="rounded-xl border border-[#d9c8b2] bg-white/70 px-3 py-2 text-sm text-[#5c4033]/85">{resource}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
