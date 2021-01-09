import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Features() {
  

  return (
    <div className="">
      <Head>
        <title>Furo - Features</title>
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
