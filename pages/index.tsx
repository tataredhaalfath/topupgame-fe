import { Inter } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/organisms/Navbar";
import MainBanner from "@/components/organisms/MainBanner";
import TransactionStep from "@/components/organisms/TransactionStep";
import FeaturedGame from "@/components/organisms/FeaturedGame";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import Footer from "@/components/organisms/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG</title>
        <meta
          name="descriptio"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu player menjadi pemenang sejati"
        />
        <meta property="og:image" content="https://myimageurl" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
