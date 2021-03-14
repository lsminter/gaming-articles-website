import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'

import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
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
        <button onClick={() => auth.signinWithGithub()}>Sign In</button>
        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <button onClick={() => auth.signout()}>Sign Out</button>
        )}

      </main>

      <Footer />
    </div>
  )
}

