import Head from 'next/head'
import HeaderMain from '../features/Header/components/HeaderMain'
import Main from '../features/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="shortcut icon" href="../assets/image/popcorn.png" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeaderMain />
        <Main />
      </div>
    </div>
  )
}
