import Head from 'next/head'
import Left from '../components/Left'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Left />
    </div>
  )
}
