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
        {!auth.user && (
          <button className="ml-2 mr-2 hover:text-gray-400" onClick={() => auth.signinWithGithub()}>Sign In</button>
        )}
        {auth?.user && (
            <button className="ml-2 mr-2 hover:text-gray-400" onClick={() => auth.signout()}>Sign Out</button>
        )}
      </main>
        <Footer />
    </div>
  )
}