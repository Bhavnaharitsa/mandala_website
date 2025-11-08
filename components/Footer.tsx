import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}> 
          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.instagram.com/mandala.by.bhavna/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/8187_Bhavna" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Mandala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

