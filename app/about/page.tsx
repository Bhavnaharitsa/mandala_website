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
             Welcome to Mandala — a space shaped by my own love for quiet creativity and mindful making. What began as something I would do in my free time slowly became a meaningful part of my day-to-day life. Drawing and creating helped me feel grounded, focused, and connected to myself.

Over time, this hobby grew into a deliberate practice, and eventually into something I wanted to share.
</p>
<p>
 Here, I curate and create artworks that reflect patience, balance, and personal expression. Each piece is made with attention and intention, and my goal is simply to share that experience — not just the art itself.
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

