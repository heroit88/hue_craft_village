import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export function MainFooter() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-[#351d18] via-[#4b1f1f] to-[#261512] text-[#f5efe6]">
      <div className="container-luxury grid gap-10 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl">Hue Craft Village</h3>
          <p className="mt-3 text-sm text-[#f5efe6]/80">
            Giữ hồn di sản - kết nối thế hệ trẻ qua những trải nghiệm văn hóa tinh tế.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xl">Liên kết</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#f5efe6]/80">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/lang-nghe">Làng nghề</Link></li>
            <li><Link href="/trai-nghiem">Trải nghiệm</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xl">Thông tin liên hệ</h4>
          <div className="mt-3 space-y-2 text-sm text-[#f5efe6]/80">
            <p className="flex items-center gap-2"><MapPin className="size-4" /> 12 Lê Lợi, TP. Huế</p>
            <p className="flex items-center gap-2"><Phone className="size-4" /> 0234 382 1223</p>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-xl">Mạng xã hội</h4>
          <div className="mt-3 flex gap-3">
            <span className="rounded-full border border-white/30 p-2"><Globe className="size-4" /></span>
            <span className="rounded-full border border-white/30 p-2"><Mail className="size-4" /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-[#f5efe6]/70">
        © 2026 Làng Nghề Huế. All rights reserved.
      </div>
    </footer>
  );
}
