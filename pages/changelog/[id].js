import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getAllPostIds, getPostData } from '../../lib/logPosts'

export default function PageTemplate({ postData }) {
  

  return (
    <div className="">
      <Head>
        <title>Furo Changelog - v{postData.version}</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        
        <Header/>
        
        <section class="text-gray-600 body-font min-h-screen mx-auto px-8 sm:px-32">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <h2 class="sm:text-2xl text-xl text-gray-900 font-medium title-font mt-2 mb-4 sm:mb-2 md:w-2/5">{postData.version} - {postData.title}</h2>
                <div class="md:w-3/5 md:pl-6">
                <div class="leading-relaxed prose sm:prose-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
                <div class="flex md:mt-4 mt-6">
                    <a href={postData.release} class="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded">Button</a>
                </div>
                </div>
            </div>
        </section>

        <Footer/>

      </main>


    </div>
  )
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
  
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}