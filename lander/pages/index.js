import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Splitty - Revolutioneer je betalingen</title>
        <meta name="description" content="Laat je klanten betalen zoals zij willen. Verhoog conversie met flexibele betaalopties." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Verhoog je omzet met <span className={styles.accent}>50%</span>
          </h1>
          <p className={styles.description}>
            Bied je klanten de vrijheid om te betalen zoals zij willen. 
            Split betalingen, betaal later, of direct - alles in één oplossing.
          </p>
          
          <form className={styles.form}>
            <input 
              type="text" 
              placeholder="Naam" 
              className={styles.input}
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.input}
              required
            />
            <input 
              type="tel" 
              placeholder="Telefoonnummer" 
              className={styles.input}
              required
            />
            <input 
              type="text" 
              placeholder="Bedrijfsnaam" 
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Start Gratis Trial
            </button>
          </form>

          <div className={styles.features}>
            <div className={styles.feature}>✓ Geen setupkosten</div>
            <div className={styles.feature}>✓ Binnen 5 minuten live</div>
            <div className={styles.feature}>✓ 30 dagen gratis proberen</div>
          </div>
        </div>
      </main>
    </div>
  )
}