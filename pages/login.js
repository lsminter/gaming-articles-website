import Header from '../components/header'
import Footer from '../components/footer'

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Logging In!')
}

export default function Login () {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <h1 className="text-6xl m-0">
          <a>Login Page!!</a>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center flex-grow px-0 py-20">
            <div className="m-2">
              <input className="border-black border-2 rounded" type="email" placeholder="Email" name="email" required/>
            </div>
            <div className="m-2">
              <input className="border-black border-2 rounded" type="password" placeholder="Password" name="password" required/>
            </div>
            <div className="m-2">
              <button className="border-black border-2 pl-3 pr-3 rounded hover:bg-gray-400" type="submit">Login</button>
            </div>
          </div>
        </form>
      </main>
        <Footer />
    </div>
  )
}