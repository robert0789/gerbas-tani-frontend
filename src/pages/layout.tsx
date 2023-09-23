import Header from "@/app/modules/header";
import "../app/globals.css"
import Footer from "@/app/modules/footer";
import localFont from "next/font/local";

const grotesk = localFont({
  src: [
    {
      path: "../app/font/cabinet-grotesk/CabinetGrotesk-Regular.woff2",
      style: 'normal',
      weight: '400'
    },
    {
      path: "../app/font/cabinet-grotesk/CabinetGrotesk-Bold.woff2",
      style: 'normal',
      weight: '700'
    },
    {
      path: "../app/font/cabinet-grotesk/CabinetGrotesk-Black.woff2",
      style: 'normal',
      weight: '900'
    },
  ],
  variable: '--font-grotesk'
})

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={grotesk.className}>
      <Header />
      <div className="h-20"></div>
      {children}
      <Footer />
    </div>
  );
}
