import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  

  return (
    <div className="">
      <Head>
        <title>Furo</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        
        <Header/>

        <section class="text-black body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/350x100"/>
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font md:text-6xl sm:text-5xl text-4xl mb-4 font-black  text-black">Make your workflow more intentful</h1>
              <div className="flex justify-center">
                <p class="mb-8 leading-relaxed text-center w-full sm:w-3/5">Optimize your work by focusing your attention on one task at a time, built for digital minimalists and productivity power-users.</p>
              </div>
              <div class="flex justify-center font-medium">
                <button class="inline-flex text-white bg-red-500 border-0 py-3 px-8 focus:outline-none hover:bg-red-600 rounded text-base">Download</button>
                <button class="ml-4 inline-flex text-red bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded text-base">Older Releases</button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
