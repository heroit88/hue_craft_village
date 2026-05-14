import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { tranhLangSinhCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: tranhLangSinhCraftBundle.pageTitle,
  description: tranhLangSinhCraftBundle.metaDescription,
};

export default function TranhLangSinhPage() {
  return <GoogleSitesCraftPage bundle={tranhLangSinhCraftBundle} />;
}
