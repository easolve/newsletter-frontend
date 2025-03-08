import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";
import NavBar from "@/features/navbar";
import "../styles";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <HeroUIProvider className="grid h-screen w-screen grid-rows-[auto,1fr]">
          <ThemeProvider attribute="class" defaultTheme="light">
            <NavBar />
            <main className="flex min-h-full w-full max-w-7xl justify-self-center overflow-y-auto overflow-x-hidden p-4 !pt-2 scrollbar-hide sm:p-6">
              {children}
            </main>
          </ThemeProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
