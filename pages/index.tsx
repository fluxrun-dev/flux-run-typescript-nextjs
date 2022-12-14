import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://dashboard.fluxrun.dev">FluxRun!</a>
        </h1>
        <a
          href="https://runonflux.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/flux.png" alt="Flux Logo" width={214} height={50} />
          </span>
        </a>
      </main>
    </div>
  )
}
