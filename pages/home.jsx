import React from "react";
import Header from "../components/Header";
import Action from "../components/Action";
import styles from "../styles/home.module.scss";
import Head from "next/head";


export default function home({ res }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ersen OZTURK | Home</title>
        <meta
          name="description"
          content="Test case given to developer ersen ozturk by mallconomy"
        />
        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, React.js, Redux, Next.js, SASS, Bootstrap, Material.UI, Axios, Yup, Python, Linux, SQL, PostgreSQL, Git, GitHub, APIs, Agile, Jira, SDLC, OOP, RESTful APIs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.actions}>
        <h1>Actions to be completed</h1>
        <div className={styles.action}>
          {res?.map((each) => {
            const { id } = each;
            return <Action each={each} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://cdn.mallconomy.com/testcase/actions.json");
  const res = await req.json();
  return {
    props: {
      res,
    },
  };
}
