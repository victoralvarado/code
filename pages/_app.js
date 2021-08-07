import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>victoralvaradocode</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.0/cosmo/bootstrap.min.css" integrity="sha512-mW0e7vnJaOaEqLC0tTsDZ2wdtJj1B0kOAnWEgK1q2G20qs+Sg7cQqo+LwJ+hVHgWjtYcRKLt62xfys8iNr17Ig==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
