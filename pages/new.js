import Header from '../components/header'
import Footer from '../components/footer'
import { useForm } from 'react-hook-form';
import createArticle from '../lib/db'
import {useAuth} from '../lib/auth'

export default function New () {

  const { handleSubmit, register } = useForm()
  const auth = useAuth();
  const onSubmit = (values) => {
    createArticle({
      authorId: auth.user.uid,
      createAt: new Date().toISOString(),
      ...values
    })
  }

  return(
    <div className="flex flex-col justify-center">
      <Header />
      <div className="flex flex-col flex-grow px-0 py-20 max-h-screen">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="text" {...register("Title")} id="Title" className="focus:ring-gray-500 focus:border-gray-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-1" placeholder="Your Title Here" required />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    Article
                  </label>
                  <div className="mt-1">
                    <textarea id="about" {...register("about")} rows="3" className="shadow-sm focus:ring-gray-500 focus:border-gray-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-1" placeholder="Your Article Here" required ></textarea>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Post
                </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}