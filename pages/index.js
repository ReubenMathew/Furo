import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  function toggle(){
    setShowMenu(!showMenu);
  }

  return (
    <div className="">
      <Head>
        <title>Furo</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        <nav class="mt-2">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex items-center">
                  <div className="p-8 bg-red-500"></div>
                  {/* <img class="h-8 w-8" src="/logo.png" alt="Workflow"/> */}
                  {/* <span class="ml-3 font-semibold text-lg text-gray-600">Furo</span> */}
                </div>

              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="#" class="text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">About</a>

                  <a href="#" class="text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Changelog</a>

                  <a href="#" class="text-gray-700 hover:text-black px-3 py-2 rounded-md text-base font-medium">Features</a>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                {/* <button class="download-button py-2 px-4 rounded-md text-white font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  <span>Download</span>
                </button> */}
                <div className="px-8 py-4 bg-red-500"></div>

                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button onClick={toggle} class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open main menu</span>

                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>

                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div style={{display: showMenu? "block" : "none"}} class="">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              <a href="#" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>

              <a href="#" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Changelog</a>

              <a href="#" class="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>

            </div>
          </div>
          
        </nav>

        <section class="text-black body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/350x100"/>
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-6xl text-4xl mb-4 font-bold  text-black">Make your workflow more intentful</h1>
              <div className="flex justify-center">
                <p class="mb-8 leading-relaxed text-center w-full sm:w-3/5">Optimize your work by focusing your attention on one task at a time, built for digital minimalists and productivity power-users.</p>
              </div>
              <div class="flex justify-center">
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
