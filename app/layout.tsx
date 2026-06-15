import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Toaster } from "sonner";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import LoadingScreen from "@/components/ui/LoadingScreen";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://harmanpreet.dev"),
  title: {
    default: "Harmanpreet Kaur — Frontend Developer & AI Enthusiast",
    template: "%s | Harmanpreet Kaur",
  },
  description:
    "Portfolio of Harmanpreet Kaur — a 2nd-year B.Tech CSE student at SRM Institute of Science and Technology, Chennai. Passionate about AI, Data Science, and Full Stack Development.",
  keywords: [
    "Harmanpreet Kaur",
    "Frontend Developer",
    "AI Enthusiast",
    "Data Science",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "SRM Chennai",
    "CSE Student",
    "Web Developer India",
    "Full Stack",
  ],
  authors: [{ name: "Harmanpreet Kaur", url: "https://harmanpreet.dev" }],
  creator: "Harmanpreet Kaur",
  publisher: "Harmanpreet Kaur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harmanpreet.dev",
    siteName: "Harmanpreet Kaur — Portfolio",
    title: "Harmanpreet Kaur — Frontend Developer & AI Enthusiast",
    description:
      "2nd-year B.Tech CSE student passionate about AI, Data Science, and Full Stack Development. Explore my projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harmanpreet Kaur — Frontend Developer & AI Enthusiast",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmanpreet Kaur — Frontend Developer & AI Enthusiast",
    description:
      "2nd-year B.Tech CSE student at SRM. Explore my portfolio of AI-powered projects and frontend work.",
    images: ["/og-image.png"],
    creator: "@harmanpreetkaur",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://harmanpreet.dev",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060612" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="harmanpreet-theme"
        >
          {/* Loading screen */}
          <LoadingScreen />

          {/* Custom cursor (desktop only) */}
          <CustomCursor />

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Main content */}
          {children}

          {/* Back to top button */}
          <BackToTop />

          {/* Toast notifications */}
          <Toaster
            position="bottom-left"
            expand={false}
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "rgba(13,13,31,0.95)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#f1f5f9",
                backdropFilter: "blur(20px)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
              },
              className: "!rounded-xl",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
