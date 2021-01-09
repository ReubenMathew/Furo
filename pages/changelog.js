import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Changelog() {
  

  return (
    <div className="">
      <Head>
        <title>Furo - Changelog</title>
        <link rel="icon" href="/furo.ico" />
      </Head>

      <main className="bg-white">
        
        <Header/>

        {/* Add content here */}

        <Footer/>

      </main>


    </div>
  )
}
