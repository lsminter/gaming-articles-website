import Footer from '../components/footer'
import Header from '../components/header'
import { useAuth } from '../lib/auth';

export default function Dashboard() {

  const auth = useAuth()

  return (
    <div className="flex flex-col items-center min-h-screen py-0 px-2">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow px-0 py-20">
        <div>
          <div className="flex flex-col items-center py-0 px-2">
            {!auth.user && (
              <div className="ml-2 mr-2">You are currently not signed in. To view your dashboard, sign in.</div>
            )}
              {auth?.user && (
                <div>
                  <div src={auth?.user?.name} >{auth.user.name}'s Dashboard</div>
                </div>
              )}
              {auth?.user && (
                <div>
                  <div className="w-20">
                    <img src={auth?.user?.photoUrl} className="rounded-full"/>
                  </div>
                </div>
              )}
            </div>
          <div>
        </div>
      </div>
      <div>
        This is where I put user's articles
      </div>
        
      
      </div>
      <Footer />
    </div>
  )
}

