import styles from './page.module.css'

// Sample gallery images - replace with your actual images
const galleryImages = [
  { id: 1, title: 'Artwork 1', category: 'Digital' },
  { id: 2, title: 'Artwork 2', category: 'Traditional' },
  { id: 3, title: 'Artwork 3', category: 'Digital' },
  { id: 4, title: 'Artwork 4', category: 'Mixed Media' },
  { id: 5, title: 'Artwork 5', category: 'Digital' },
  { id: 6, title: 'Artwork 6', category: 'Traditional' },
  { id: 7, title: 'Artwork 7', category: 'Digital' },
  { id: 8, title: 'Artwork 8', category: 'Mixed Media' },
  { id: 9, title: 'Artwork 9', category: 'Digital' },
]

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className={styles.galleryDescription}>
            Explore our curated collection of beautiful artworks and designs
          </p>
          
          <div className={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <div key={image.id} className={styles.galleryItem}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderContent}>
                    <span className={styles.placeholderIcon}>🖼️</span>
                    <span className={styles.placeholderText}>{image.title}</span>
                  </div>
                </div>
                <div className={styles.imageInfo}>
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

