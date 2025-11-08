import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logo}>
            {/* <Image
              src={mandalaLogo}
              alt="Mandalas logo"
              width={200}
              height={200}
              priority
            /> */}
          </div>

          <h1 className={styles.heroTitle}>Mandalas</h1>
          <p className={styles.heroSubtitle}>
            Discover the beauty of art, creativity, and inspiration
          </p>
          <div className={styles.heroButtons}>
            <Link href="/gallery" className={styles.primaryButton}>
              Explore Gallery
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>

        <div className={styles.heroImage}>
          {/* <Image
            src={mandalaLogo}
            alt="Mandalas logo"
            width={400}
            height={400}
            priority
            className={styles.heroLogoImage}
          /> */}
          <div className={styles.gradientCircle}></div>
        </div>
      </section>

      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.beautifulArt}>Beautiful Art</h3>
              <p className={styles.cardDescription}>Curated collection of stunning artworks and designs</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.beautifulArt}>Creative Inspiration</h3>
              <p className={styles.cardDescription}>Get inspired by our diverse range of creative pieces</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌟</div>
              <h3 className={styles.beautifulArt}>Quality Design</h3>
              <p className={styles.cardDescription}>Every piece is carefully selected for its quality and beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Explore?</h2>
          <p>Visit our gallery to see amazing collections</p>
          <Link href="/gallery" className={styles.ctaButton}>
            View Gallery
          </Link>
        </div>
      </section>
    </div>
  )
}
