import Head from "next/head";
import Image from 'next/image';
import welcome from '../../public/images/welcome.svg';
import mulher from '../../public/images/mulher.svg';
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head><title>Home | ig.news</title></Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <Image 
                  src={welcome} 
                  alt="welcome"/>
          <span>Hey, Welcome</span>
          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

        </section>

        <Image 
                src={mulher} 
                alt="mulher no computador"/>
      </main>
    </>
  )
}
