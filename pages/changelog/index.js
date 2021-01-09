import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

import { getSortedPostsData } from '../../lib/logPosts'

export default function Changelog({allPostsData}) {
  

  return (
    <div className="">
      <Head>
        <title>Furo - Changelog</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        
        <Header/>
        
        <section className="flex justify-center mt-8 overflow-hidden sm:mt-24 text-accent7 body-font">
          <div className="container max-w-screen-lg min-h-screen px-5 py-8">
          <h1 className="text-3xl font-extrabold sm:text-6xl">Changelog</h1>
          <h2 className="py-4 text-base font-normal sm:text-lg">Changes for all releases of furo.</h2>
          <hr className="py-4"></hr>
          
            <div className="-my-10 divide-y-2 divide-gray-100">
              {allPostsData.map(({ id, date }) => (
                <div className="flex flex-wrap items-baseline py-8 md:flex-no-wrap">
                  <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
                    <span className="mt-1 text-base text-accent5">{date}</span>
                  </div>
                  <div className="px-8 md:flex-grow">
                    <h2 className="text-xl font-medium text-black ">
                      <Link href="/changelog/[id]" as={`/changelog/${id}`}>
                        <a className="inline-flex items-center mt-1 text-black hover:text-blue-500">v{id}</a>
                      </Link>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
                        
          </div>
        </section>

        <Footer/>
        
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}