import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninja List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ninja List</h1>

        <p className={styles.description}>Next JS Tutorial by Netninja</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Shaun</h3>
            <p>
              Netninja is a popular youtuber and educator and top rated udemy
              instructor, he aspires to make education freely available to all.
              He is a great teacher.
            </p>
          </div>
          <div className={styles.card}>
            <h3>ColtSteele</h3>
            <p>
              Colt is a popular youtuber and educator, he teaches python and JS
              at coding bootcamps and udemy
            </p>
          </div>
          <div className={styles.card}>
            <h3>Stephen Grider</h3>
            <p>
              Stephen is a popular udemy instructor and he has some good courses
              on React
            </p>
          </div>
          <div className={styles.card}>
            <h3>Angela Yu</h3>
            <p>
              Angela Yu is an entrepreneur and ios and python instructor. She is
              a great instructor and speaker.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
