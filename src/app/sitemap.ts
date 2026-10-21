import type { MetadataRoute } from "next";
import { perfil, projetos } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return [
    { url: perfil.site, lastModified: agora, changeFrequency: "monthly", priority: 1 },
    ...projetos.map((p) => ({
      url: `${perfil.site}/trabalho/${p.slug}`,
      lastModified: agora,
      changeFrequency: "yearly" as const,
      priority: p.slug === "studytrack" ? 0.9 : 0.7,
    })),
  ];
}
