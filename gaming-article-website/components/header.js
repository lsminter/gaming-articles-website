import Link from 'next/link'

export default function Header() {
  return(
    <div className="flex flex-wrap bg-gray-400 w-screen justify-between">
      <Link href="/"><h1 className="text-3xl">This is my header!</h1></Link>
      <div className="flex flex-wrap items-center mr-5">
        <Link href="/login">
          <h1 className="ml-2 mr-2 hover:text-purple-600 item-start">Login</h1>
        </Link>
        <Link href="/">
          <h1 className="ml-2 mr-2 hover:text-purple-600 item-start">Home</h1>
        </Link>
      </div>
    </div>
  )
}