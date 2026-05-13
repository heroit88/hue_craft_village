import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Xuất tĩnh → thư mục `out/`. HTML dùng đường dẫn dạng `/_next/...` (gốc website).
  // Mở `index.html` bằng double-click (file://) sẽ KHÔNG tải được CSS/JS — cần chạy server
  // tĩnh trên `out` (vd. `npm run preview:export`) hoặc deploy lên host có HTTP.
  output: 'export',
  images: {
    unoptimized: true,
    // Các giá trị quality dùng trong <Image /> — bắt buộc khai báo từ Next.js 16
    qualities: [60, 72, 75, 78, 80, 85],
  },
};

export default nextConfig;
