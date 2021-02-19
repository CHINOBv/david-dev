import Head from "next/head";
import utilStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>F</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  );
}
