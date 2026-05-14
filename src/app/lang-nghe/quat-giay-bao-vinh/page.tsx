import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { quatGiayBaoVinhCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: quatGiayBaoVinhCraftBundle.pageTitle,
  description: quatGiayBaoVinhCraftBundle.metaDescription,
};

export default function QuatGiayBaoVinhPage() {
  return <GoogleSitesCraftPage bundle={quatGiayBaoVinhCraftBundle} />;
}
