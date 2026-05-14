import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { gomPhuocTichCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: gomPhuocTichCraftBundle.pageTitle,
  description: gomPhuocTichCraftBundle.metaDescription,
};

export default function GomPhuocTichPage() {
  return <GoogleSitesCraftPage bundle={gomPhuocTichCraftBundle} />;
}
