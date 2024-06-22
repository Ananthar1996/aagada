import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agada Foods",
  description:
    "Our store was founded in 2022 with the goal of making online shopping more accessible and enjoyable for everyone. We started with a small selection of products and have since grown into a thriving business with a wide range of offerings.",
  icons: {
    icon: "/favicon-32x32.png",
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  openGraph: {
    title: "Agada Foods",
    description:
      "Online store for accessible and enjoyable shopping experience.",
    url: "https://www.agadafoods.com",
    siteName: "Agada Foods",
    // images: [
    //   {
    //     url: "https://www.agadafoods.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Agada Foods",
              url: "https://www.agadafoods.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
