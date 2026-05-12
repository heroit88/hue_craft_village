"use client";

import { motion } from "framer-motion";
import { careerMessages, careerRecommendations, careerSteps } from "@/data/chatbot";

export default function CareerChatbotPage() {
  return (
    <div className="container-luxury grid gap-6 py-8 md:py-10 lg:grid-cols-[1.2fr_1fr]">
      <section className="card-luxury p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl">Chatbot Hướng nghiệp</h1>
        <p className="mt-2 text-[#5c4033]/80">Tư vấn nghề phù hợp cho bạn trẻ yêu làng nghề Huế.</p>
        <div className="mt-6 space-y-3">
          {careerMessages.map((m, i) => (
            <motion.div
              key={`${m.text}-${i}`}
              initial={{ opacity: 0, x: m.role === "user" ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm sm:max-w-[80%] ${m.role === "user" ? "ml-auto bg-[#7b1e1e] text-[#f5efe6]" : "bg-white/80 text-[#5c4033]"}`}
            >
              {m.text}
            </motion.div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[#d9c8b2] bg-white/70 p-3 text-sm text-[#7b1e1e]">AI đang nhập...</div>
        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <input className="rounded-xl border border-[#d9c8b2] bg-white/70 px-3 py-2 text-sm outline-none" placeholder="Nhập điều bạn quan tâm..." />
          <button type="button" className="rounded-xl bg-[#7b1e1e] px-4 py-2 text-sm text-[#f5efe6]">Gửi</button>
        </div>
      </section>

      <aside className="space-y-6">
        <div className="card-luxury p-4 sm:p-6">
          <h2 className="text-2xl">Tiến trình định hướng</h2>
          <ul className="mt-4 space-y-2">
            {careerSteps.map((step, i) => (
              <li key={step} className="rounded-xl border border-[#d9c8b2] bg-white/70 px-3 py-2 text-sm text-[#5c4033]">
                Bước {i + 1}: {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-luxury p-4 sm:p-6">
          <h2 className="text-2xl">Gợi ý nghề</h2>
          <div className="mt-4 grid gap-3">
            {careerRecommendations.map((item) => (
              <div key={item.name} className="rounded-xl border border-[#d9c8b2] bg-white/70 p-3">
                <p className="font-semibold text-[#7b1e1e]">{item.name}</p>
                <p className="mt-1 text-sm text-[#5c4033]/80">{item.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
