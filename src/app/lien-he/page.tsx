const faqs = [
  { q: "Làm sao để đặt tour trải nghiệm?", a: "Bạn điền form và đội ngũ tư vấn sẽ xác nhận lịch trong vòng 24 giờ." },
  { q: "Có chương trình cho đoàn doanh nghiệp không?", a: "Có, chúng tôi thiết kế riêng trải nghiệm team building văn hoá." },
  { q: "Có hỗ trợ hướng nghiệp cho học sinh - sinh viên?", a: "Có, chatbot và cố vấn nghề sẽ đồng hành theo từng lộ trình." },
];

export default function ContactPage() {
  return (
    <div className="container-luxury grid gap-6 py-10 lg:grid-cols-2">
      <section className="card-luxury p-8">
        <h1 className="text-5xl">Liên hệ</h1>
        <p className="mt-3 text-[#5c4033]/80">Gửi thông tin để được tư vấn tour, workshop, hướng nghiệp và hợp tác truyền thông làng nghề.</p>
        <div className="mt-6 space-y-3">
          <input className="w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3" placeholder="Họ và tên" />
          <input className="w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3" placeholder="Email" />
          <textarea className="h-28 w-full rounded-xl border border-[#d9c8b2] bg-white/70 px-4 py-3" placeholder="Nội dung liên hệ" />
          <button type="button" className="rounded-xl bg-[#7b1e1e] px-6 py-3 text-[#f5efe6]">Gửi tin nhắn</button>
        </div>
      </section>
      <section className="space-y-6">
        <div className="card-luxury p-6">
          <h2 className="text-2xl">Bản đồ</h2>
          <div className="mt-4 h-52 rounded-2xl border border-[#d9c8b2] bg-gradient-to-br from-[#d8c2a5] to-[#f5efe6] p-4 text-sm text-[#5c4033]/80">
            Placeholder Google Map - 12 Lê Lợi, TP. Huế
          </div>
        </div>
        <div className="card-luxury p-6">
          <h2 className="text-2xl">FAQ</h2>
          <div className="mt-3 space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl border border-[#d9c8b2] bg-white/70 p-3">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 text-sm text-[#5c4033]/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
