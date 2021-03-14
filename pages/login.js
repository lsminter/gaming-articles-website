import Header from '../components/header'
import Footer from '../components/footer'

import { useAuth } from '../lib/auth';

export default function Login () {
  const auth = useAuth();

  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <h1 className="text-6xl m-0">
          <a>Login Page!!</a>
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