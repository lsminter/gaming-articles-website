import Header from '../components/header'
import Footer from '../components/footer'

export default function Login () {

  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <h1 className="text-6xl m-0">
          <a>Login Page!!</a>
        </h1>
      </main>
        <Footer />
    </div>
  )
}