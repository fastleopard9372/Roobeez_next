import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Landing from "./Landing";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
