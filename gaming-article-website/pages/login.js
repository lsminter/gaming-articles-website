import Head from 'next/head'
import Header from '../components/header'

export default function Login () {
  return(
    <div>
      <Header></Header>
      <h1>This is the login page!</h1>
      <form>
        <div>
          <label for="uname"><b>Username</b></label>
          <input type="uname" placeholder="Enter Username" name="uname" required/>
          
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}