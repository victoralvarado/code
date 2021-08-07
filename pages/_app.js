import "bootswatch/dist/cosmo/bootstrap.min.css"
import '../resources/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>victoralvaradocode</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
