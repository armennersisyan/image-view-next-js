import Head from 'next/head'
import Test from '../components/test'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
    </div>
  )
}
