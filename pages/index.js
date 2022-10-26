import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import styles from "../styles/Home.module.scss";
import Intro from "./intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ersen OZTURK | intro</title>
        <meta name="description" content="Test case given to developer ersen ozturk by mallconomy" />
        <meta name="keywords" content="HTML5, CSS3, JavaScript, React.js, Redux, Next.js, SASS, Bootstrap, Material.UI, Axios, Yup, Python, Linux, SQL, PostgreSQL, Git, GitHub, APIs, Agile, Jira, SDLC, OOP, RESTful APIs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro/>
    </div>
  );
}
