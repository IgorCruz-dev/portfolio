import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { perfil } from "@/content/site";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const TITULO = "Igor Cruz — Engenheiro de software";
const DESCRICAO =
  "Cofundador da StudyTrack, SaaS B2B em produção com instituições de ensino. " +
  "Construo produtos web de ponta a ponta, do banco de dados ao deploy.";

export const metadata: Metadata = {
  metadataBase: new URL(perfil.site),
  title: { default: TITULO, template: "%s — Igor Cruz" },
  description: DESCRICAO,
  authors: [{ name: perfil.nome, url: perfil.site }],
  creator: perfil.nome,
  keywords: [
    "Igor Cruz", "engenheiro de software", "desenvolvedor full stack",
    "Next.js", "TypeScript", "Python", "StudyTrack", "SaaS B2B",
    "desenvolvimento de sites", "São Joaquim da Barra",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: perfil.site,
    siteName: TITULO,
    title: TITULO,
    description: DESCRICAO,
    images: [{ url: "/media/igor-estudio.webp", width: 900, height: 1200, alt: perfil.nome }],
  },
  twitter: { card: "summary_large_image", title: TITULO, description: DESCRICAO },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};

/** Dados estruturados — ajuda o Google a entender quem é a pessoa. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: perfil.nome,
  url: perfil.site,
  email: `mailto:${perfil.email}`,
  jobTitle: "Engenheiro de software",
  description: DESCRICAO,
  image: `${perfil.site}/media/igor-estudio.webp`,
  address: { "@type": "PostalAddress", addressLocality: "São Joaquim da Barra", addressRegion: "SP", addressCountry: "BR" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "FAFRAM — Faculdade Dr. Francisco Maeda" },
  worksFor: { "@type": "Organization", name: "StudyTrack", url: "https://www.studytrack.com.br" },
  knowsAbout: ["TypeScript", "React", "Next.js", "Python", "Flask", "PostgreSQL", "Supabase"],
  sameAs: [perfil.github, perfil.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
