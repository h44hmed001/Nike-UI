import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Testimonials,
  Footer,
} from "../../sections/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className="padding-b wide:padding-r xl:padding-l  ">
        <Hero />
      </section>
      <section className="padding ">
        <PopularProducts />
      </section>
      <section className="padding-x py-10 ">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue ">
        <Testimonials />
      </section>
      <section className="padding  ">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black  ">
        <Footer />
      </section>
    </main>
  );
}
