import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import TopUpForm from "@/components/organisms/TopUpForm";
import TopUpItem from "@/components/organisms/TopUpItem";
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from "@/services/data-types";
import { getDetailVoucher, getFeaturedGame } from "@/services/player";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalTypes;
  payments: PaymentTypes;
}

export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={dataItem} type="Mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="Desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// pemanggilan data lewat server side agar halaman tidak di render dulu saat request api berjalan
// halaman akan di render dari sisi server beserta data api
export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => {
    return {
      params: {
        id: item._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: data,
      nominals: data.nominals,
      payments: data.payments,
    },
  };
}
