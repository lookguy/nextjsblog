import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<React.Fragment>
    <Head>
      <title>next.js博客系统</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </React.Fragment>)
}

export default MyApp
