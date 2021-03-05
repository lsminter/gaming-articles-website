import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Header() {
  return(
    <div className="header">
      <h1>This is my header!</h1>
      <Link href="/login">Login</Link>
      <Link href="/">Home</Link>
    </div>
  )
}