import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import TopUpForm from "@/components/organisms/TopUpForm";
import TopUpItem from "@/components/organisms/TopUpItem";
import { getDetailVoucher } from "@/services/player";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });
  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetaiApi = useCallback(async (id: any) => {
    const data = await getDetailVoucher(id);
    setDataItem({
      name: data.name,
      thumbnail: data.thumbnail,
      category: {
        name: data.category?.name,
      },
    });
    secureLocalStorage.setItem("data-item", JSON.stringify(data))
    setNominals(data.nominals);
    setPayments(data.payments);
  }, []);

  useEffect(() => {
    if (isReady) {
      getVoucherDetaiApi(query.id);
    }
  }, [isReady]);

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
