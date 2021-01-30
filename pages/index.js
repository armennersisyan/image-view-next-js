import Head from 'next/head'
import Image from '../components/Image'
import Wrapper from '../components/Wrapper'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Image />
      </Wrapper>
    </div>
  )
}
