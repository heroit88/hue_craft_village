import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/layout/main-footer";
import { MainNavbar } from "@/components/layout/main-navbar";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Làng Nghề Huế | Giữ hồn di sản, chạm vào tinh hoa",
  description:
    "Website văn hoá du lịch Làng Nghề Huế - hành trình khám phá tinh hoa truyền thống, trải nghiệm nghề thủ công và kết nối thế hệ trẻ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <MainNavbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
