import { HeroUIProvider } from "@heroui/system";
import NavBar from "@/features/navbar";
import NextThemesProvider from "@/providers/next-themes-provider";
import { DESCRIPTION, NAME, TITLE, URL } from "@/shared/config";
import { fetchUserEmail } from "./actions";
import "./globals.css";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: NAME,
    // images: [
    //   {
    //     url: "https://your-website.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "GenerLetter Logo",
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: TITLE,
  //   description: DESCRIPTION,
  //   images: ["https://your-website.com/twitter-image.jpg"],
  // },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const email = await fetchUserEmail();
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <HeroUIProvider className="grid h-screen w-screen grid-rows-[auto,1fr]">
          <NextThemesProvider>
            <NavBar email={email} />
            <main className="flex min-h-full w-full max-w-7xl justify-self-center overflow-y-auto overflow-x-hidden p-4 !pt-2 scrollbar-hide sm:p-6">
              {children}
            </main>
          </NextThemesProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
