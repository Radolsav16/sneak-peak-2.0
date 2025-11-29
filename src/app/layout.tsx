import type { Metadata } from "next";
import { Open_Sans,Poppins,Montserrat } from "next/font/google";
import "./globals.scss";
import WFooter from "./components/footer/WFooter";

const openSans = Open_Sans({
  variable:"--font-opens-sans",
  subsets:["latin"]
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "Sneakpeak",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable} ${poppins.variable} `}>
        {children}
        <WFooter />
      </body>
    </html>
  );
}
