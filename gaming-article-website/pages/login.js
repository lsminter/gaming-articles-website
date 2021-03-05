import Header from '../components/header'
import Footer from '../components/footer'

export default function Login () {
  return(
    <div>
      <Header />
      <form>
        <div className="flex flex-row justify-center flex-grow px-0 py-20 h-screen">
          <div className="m-2">
            <label for="uname"><b>Username: </b></label>
            <input className="border-black border-2 rounded" type="uname" placeholder="Enter Username" name="uname" required/>
          </div>
          <div className="m-2">
            <label for="psw"><b>Password: </b></label>
            <input className="border-black border-2 rounded" type="password" placeholder="Enter Password" name="psw" required/>
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