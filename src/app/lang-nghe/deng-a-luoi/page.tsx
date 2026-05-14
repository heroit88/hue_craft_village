import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { dengALuoiCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: dengALuoiCraftBundle.pageTitle,
  description: dengALuoiCraftBundle.metaDescription,
};

export default function DengALuoiPage() {
  return <GoogleSitesCraftPage bundle={dengALuoiCraftBundle} />;
}
