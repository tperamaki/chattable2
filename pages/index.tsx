import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>chattable2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <h1 className="text-lg text-purple-500 font-bold">Chattable2!</h1>
      </div>
    </div>
  )
}
