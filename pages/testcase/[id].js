import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Header from "../../components/Header";
import AppContext from "../../context/AppContext";
import styles from "../../styles/TestCaseDetail.module.scss";


export default function TestCaseDetail({ res }) {
  const { point, setPoint, setSelectedPoint } = useContext(AppContext);

  const [data, setData] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setData(res.find((item) => item.id == id));
  }, [id, res]);

  const earnPoint = (e) => {
    setPoint(point + data.point);
    setSelectedPoint(data.point);
  };
  const { image, title, point: pointData, description } = data;
  
  return (
    <div className={styles.testCaseDetail}>
      <Head>
        <title>Ersen OZTURK | Test List-{id}</title>
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
      <div className={styles.wrapper}>
        <div className={styles.wrapperInner}>
          <img src={image} alt={data.title} />
          <p className={styles.point}>+{pointData} Points</p>
          <div className={styles.infoDiv}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <Link href="/testcase/cong/">
            <button onClick={earnPoint}>Earn points</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://cdn.mallconomy.com/testcase/actions.json`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
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
