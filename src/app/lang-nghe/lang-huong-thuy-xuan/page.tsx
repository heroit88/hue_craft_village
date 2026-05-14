import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { langHuongThuyXuanCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: langHuongThuyXuanCraftBundle.pageTitle,
  description: langHuongThuyXuanCraftBundle.metaDescription,
};

export default function LangHuongThuyXuanPage() {
  return <GoogleSitesCraftPage bundle={langHuongThuyXuanCraftBundle} />;
}
