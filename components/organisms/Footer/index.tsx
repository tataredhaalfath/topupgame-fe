import FooterItem from "@/components/molecules/FooterItem";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="" className="mb-30">
                <Image src="/icon/logo.svg" alt="logo" width={60} height={60} />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <FooterItem url="/about" title="About Us" />
                    <FooterItem url="" title="Press Release" />
                    <FooterItem url="" title="Terms Of Use" />
                    <FooterItem url="" title="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterItem url="" title="Refund Policy" />
                    <FooterItem url="" title="Unlock Rewards" />
                    <FooterItem url="" title="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>

                  <ul className="list-unstyled">
                    <FooterItem url="" title="hi@store.gg" />
                    <FooterItem url="" title="team@store.gg" />
                    <FooterItem
                      url="http://maps.google.com/?q=Pasific 12,
                                    Jakarta Selatan"
                      title="Pasific 12, Jakarta Selatan"
                    />
                    <FooterItem
                      url="tel: 02111229090"
                      title="021 - 1122 - 9090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
