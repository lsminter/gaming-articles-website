import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Gaming Articles Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Welcome to my Gaming Articles Website!!</a>
        </h1>
      </main>

      <Footer />
    </div>
  )
}
