import { DESCRIPTION, NAME, TITLE, URL } from "@/shared/config";

export { default } from "@/app/layouts/root";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/images/logo.svg",
  },
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
