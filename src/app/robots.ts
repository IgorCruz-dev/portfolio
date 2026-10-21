import type { MetadataRoute } from "next";
import { perfil } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${perfil.site}/sitemap.xml`,
  };
}
