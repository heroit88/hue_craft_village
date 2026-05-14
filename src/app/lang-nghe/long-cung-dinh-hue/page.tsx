import type { Metadata } from "next";
import { GoogleSitesCraftPage } from "@/components/craft/google-sites-craft-page";
import { longCungDinhHueCraftBundle } from "@/data/google-sites-crafts/generated-craft-bundles";

export const metadata: Metadata = {
  title: longCungDinhHueCraftBundle.pageTitle,
  description: longCungDinhHueCraftBundle.metaDescription,
};

export default function LongCungDinhHuePage() {
  return <GoogleSitesCraftPage bundle={longCungDinhHueCraftBundle} />;
}
