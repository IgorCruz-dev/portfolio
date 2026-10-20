import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.igorcruz.com.br"),
  title: "Igor Cruz — Software Engineer",
  description:
    "Construo produtos digitais que resolvem problemas reais. Co-fundador da StudyTrack. Baseado em São Joaquim da Barra, SP.",
  openGraph: {
    title: "Igor Cruz — Software Engineer",
    description: "Portfólio de Igor Cruz — StudyTrack, Branco Zanol, ObrasOS, APAE.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: define theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',s||'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
