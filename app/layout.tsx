import "public/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "sonner";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shared";
import { AuthBar } from "@/components/Auth";
import { getInfoGeneral } from "@/utils/firebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Da, ne facem bine!",
  description:
    "Dacă nu ai cu cine vota, află că societatea se trezește și se implică. Ne-am pus și noi această întrebare și am decis să ne implicăm, să construim alternativa.",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
  metadataBase: new URL("https://left-wine.vercel.app/"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const general = await getInfoGeneral();
  return (
    <html lang="en">
      <body className={inter.className + "relative"}>
        <Toaster position="top-center" richColors />
        {/* <AuthBar general={general} /> */}
        <Header general={general} />

        {children}

        <Footer general={general} />
      </body>
    </html>
  );
}
