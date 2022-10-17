import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <><Head>
      <title>Kota</title>

    </Head><Component {...pageProps} /></>
  )
}

export default MyApp
