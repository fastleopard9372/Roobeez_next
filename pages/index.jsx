import Head from "next/head";
import Image from "next/image";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Landing from "./Landing";
export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
