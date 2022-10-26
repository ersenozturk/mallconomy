import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/intro.module.scss";

const intro = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.logo}>
          <span>TestCase</span>
          <span>App</span>
        </div>
        <p>“Pixel Perfect”</p>
      </div>
      <div className={styles.ImgDiv}>
        <Image
          src="/image/cover.png"
          alt="Picture of the author"
          width={300}
          height={272}
        />
      </div>
      <div className={styles.welcome}>
        <h3>Welcome to the TestCase APP!</h3>
        <p>
          We created this exercise to gain insights about your development
          skills.
        </p>
        <Link href="/home">
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default intro;
