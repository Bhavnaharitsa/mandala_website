'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

type GalleryItem = {
  id: number
  title: string
  category: string
  image?: string
  alt?: string
}

// Sample gallery images - replace with your actual images
const galleryImages: GalleryItem[] = [
  {
    id: 1,
    title: 'Bookmarks',
    category: 'Paper cut',
    image: '/bookmark_mandala.png',
    alt: 'Gold bookmark mandala artwork',
  },
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
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({})
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const refs = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!refs.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idString = entry.target.getAttribute('data-id')
            if (!idString) return
            const id = Number(idString)
            setVisibleCards((prev) => {
              if (prev[id]) return prev
              return { ...prev, [id]: true }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    refs.forEach((ref) => observer.observe(ref))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.gallery}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className={styles.galleryDescription}>
            Explore our curated collection of beautiful artworks and designs
          </p>

          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                data-id={image.id}
                className={`${styles.galleryItem} ${styles.galleryItemAnimated} ${
                  visibleCards[image.id] ? styles.galleryItemVisible : ''
                }`}
                style={{
                  transitionDelay: visibleCards[image.id] ? `${index * 90}ms` : '0ms',
                }}
              >
                {image.image ? (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.image}
                      alt={image.alt ?? image.title}
                      className={styles.galleryImage}
                      width={600}
                      height={600}
                    />
                  </div>
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderIcon}>🖼️</span>
                      <span className={styles.placeholderText}>{image.title}</span>
                    </div>
                  </div>
                )}
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

