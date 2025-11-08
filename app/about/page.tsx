import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h2>Our Story</h2>
              <p>
                Welcome to Mandala, a space dedicated to celebrating art, creativity, 
                and inspiration. We believe that art has the power to transform, inspire, 
                and connect people across cultures and boundaries.
              </p>
              <p>
                Our mission is to curate and showcase beautiful artworks that speak to 
                the soul, whether through digital creations, traditional mediums, or 
                innovative mixed media approaches.
              </p>
              
              <h2>Our Values</h2>
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <h3>Creativity</h3>
                  <p>We celebrate unique perspectives and innovative approaches to art.</p>
                </div>
                <div className={styles.valueCard}>
                  <h3>Quality</h3>
                  <p>Every piece in our collection is carefully selected for its excellence.</p>
                </div>
                <div className={styles.valueCard}>
                  <h3>Inspiration</h3>
                  <p>We aim to inspire and spark creativity in everyone who visits.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.imageSection}>
              <div className={styles.aboutImage}>
                <div className={styles.imagePlaceholder}>
                  <span>🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

