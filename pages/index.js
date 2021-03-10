import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Card from "./comp/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>3D Model Card</h1>
        <Card />
      </main>

      <Footer />
    </div>
  );
}
