import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  

  return (
    <div className="">
      <Head>
        <title>Furo - About</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        
        <Header/>

        <section class="text-black body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <img src="/roo.png"></img>
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg> */}
                    </div>
                    <div class="flex flex-col items-center text-center justify-center">
                        <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Reuben Ninan</h2>
                        <div class="w-12 h-1 bg-gray-800 rounded mt-2 mb-4"></div>
                        <p class="text-base">Find me on Twitter <a className="text-blue-500" href="https://twitter.com/NinanReuben">@NinanReuben</a> or follow my work <a className="underline" href="https://reubenninan.tech">here</a>.</p>
                    </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p class="leading-relaxed text-lg mb-4">This concept for a digital intent app was originally designed and implemented on MacOS by <a class="text-blue-500" href="https://twitter.com/colebemis/status/1334648731287736322">Cole Bemis</a>. </p> 
                    <p class="leading-relaxed text-lg mb-4">When I first saw the tweet from Cole demonstrating this tool I immediately recognized the potential workflow benefits that I could attain. However, being a Windows user, there was a zero chance of using it without building it myself. </p>
                    <p class="leading-relaxed text-lg mb-4">So I did! This is something that I now use on a daily basis and can't focus without. I am distributing and building this tool in public for other Windows users who could benefit from it. </p>
                    <a href="https://lonepinekoalasanctuary.com/product/koala-pin/" class="text-blue-500 inline-flex items-center">🐨 Save the koalas!</a>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Footer/>

      </main>


    </div>
  )
}
