import Link from 'next/link'
import { useAuth } from '../lib/auth';


export default function Header() {
  const auth = useAuth();

  return(
    <div className="flex flex-wrap bg-gray-400 w-screen justify-between">
      <Link href="/"><h1 className="text-3xl">This is my header!</h1></Link>
      <div className="flex flex-wrap items-center mr-5">
        <Link href="/new">
          <h1 className="ml-2 mr-2 hover:text-white item-start">New Article</h1>
        </Link>
        <Link href="/">
          <h1 className="ml-2 mr-2 hover:text-white item-start">Home</h1>
        </Link>
        {!auth.user && (
          <button className="ml-2 mr-2 hover:text-white" onClick={() => auth.signinWithGitHub()}>Sign In</button>
        )}
        {auth?.user && (
            <button className="ml-2 mr-2 hover:text-white" onClick={() => auth.signout()}>Sign Out</button>
        )}
        {auth?.user && (
          <div>
            <div className="sm:w-2/12 px-4">
              <img src={auth?.user?.photoUrl} className="shadow rounded-full max border-none"/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}