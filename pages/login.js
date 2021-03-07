import Header from '../components/header'
import Footer from '../components/footer'

export default function Login () {
  return(
    <div>
      <Header />
      <form>
        <div className="flex flex-row justify-center flex-grow px-0 py-20 h-screen">
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
        <Footer />
    </div>
  )
}