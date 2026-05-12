import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kích hoạt chế độ xuất tĩnh
  output: 'export',
  images: {
    unoptimized: true,
    // Các giá trị quality dùng trong <Image /> — bắt buộc khai báo từ Next.js 16
    qualities: [60, 72, 75, 78, 80, 85],
  },
};

export default nextConfig;
