import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PageTemplate() {
  

  return (
    <div className="">
      <Head>
        <title>Furo</title>
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
