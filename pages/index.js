import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Header />
      <Head>
        <title>Gaming Articles Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <h1 className="text-6xl m-0">
          <a>Welcome to my Gaming Articles Website!!</a>
        </h1>
      </main>

      <Footer />
    </div>
  )
}

