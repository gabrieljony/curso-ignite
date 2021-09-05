import { GetStaticProps } from "next";
import Head from "next/head";
import Image from 'next/image';
import welcome from '../../public/images/welcome.svg';
import mulher from '../../public/images/mulher.svg';
import styles from './home.module.scss'
import SubscribeButton from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

// 3 formas de fazer um chamada a API:

// 1. Client-side Rendering
// 2. Server-side Rendering -> toda chamada vai exigir mais processamento da nossa tela para aparecer
// 3. Static Site Generation

//Exemplo
//Post do blog
//Conteúdo do blog (SSG)
//Comentários (Client-side, pois preciso dos comentários só depois de ser carregado a página)

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  console.log(product)
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>

        </section>

        <Image 
                src={mulher} 
                alt="mulher no computador"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  // é executado no servidor node.js
  console.log('ok - será mostrado no console.log do terminal não do navegador.')

  const price = await stripe.prices.retrieve('price_1JWT0ZJ2mSTNh7jg7sf8SA7V', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD'
  }).format(price.unit_amount / 100)
};

  return {
      props:{
        product
      },
      revalidate: 60 * 60 * 24, // 24 horas
  }
}
