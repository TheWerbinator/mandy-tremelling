import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/nav";
import { Copyright } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandy Tremelling | Young Adult and Fantasy Novel Author",
  description:
    "Young Adult and Fantasy novels, Mandy Tremelling's works include My World of Glass and the Pulchra Arcanum",
  openGraph: {
    title: "Mandy Tremelling | Young Adult and Fantasy Novel Author",
    description:
      "Young Adult and Fantasy novels, Mandy Tremelling's works include My World of Glass and the Pulchra Arcanum",
    images: [
      {
        url: "../opengraph-image.webp",
        alt: "",
      },
    ],
    url: "https://mandytremelling.com",
    type: "website",
    siteName: "Mandy Tremelling | Young Adult & Fantasy Author",
  },
  other: { pinterest: "nopin" },
  metadataBase: new URL("https://mandytremelling.com"),
  alternates: {
    canonical: "https://mandytremelling.com",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mandy Tremelling",
  url: "https://mandytremelling.com",
  logo: "https://www.mandytremelling.com/logo.webp",
  image: "https://mandytremelling.com/opengraph-image.webp",
  sameAs: [
    "https://instagram.com/mandytremmy.books",
    "https://bsky.app/profile/mandytremmy.bsky.social",
    "https://www.goodreads.com/mandytremmy",
  ],
  jobTitle: "Author",
  worksFor: {
    "@type": "Organization",
    name: "Independent Author",
  },
  knowsAbout: [
    "Young Adult Literature",
    "Fantasy Fiction",
    "Writing",
    "Publishing",
  ],
  description:
    "Mandy Tremelling is a young adult and fantasy author known for immersive worlds, strong characters, and empowering stories.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mandytremelling.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          id='ld-json-schema'
          type='application/ld+json'
          strategy='afterInteractive'
        >
          {JSON.stringify(schemaData)}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen flex flex-col items-center  bg-white dark:bg-black'>
            <div className='w-full flex flex-col gap-20 items-center'>
              <Nav />
              <div className='flex flex-col items-center gap-20 w-[100%] mt-[7.5rem]'>
                {children}
              </div>

              <footer className='w-full flex flex-col-reverse lg:flex-row items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16'>
                <div className='flex items-center gap-1'>
                  <p>Copyright</p>
                  <Copyright />
                  2025 | Mandy Tremelling
                </div>
                <div className='flex items-center gap-1'>
                  Built by{" "}
                  <Link href='https://mandytremelling.com'>Elevation</Link>
                </div>
                <ModeToggle />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
