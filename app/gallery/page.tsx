'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import styles from './page.module.css'

type FeaturedStyle = CSSProperties & {
  '--featured-bg'?: string
}

type GalleryItem = {
  id: number
  title: string
  category: string
  image?: string
  alt?: string
  description?: string
}

// Sample gallery images - replace with your actual images
const galleryImages: GalleryItem[] = [
  {
    id: 1,
    title: 'Bookmarks',
    category: 'Paper cut',
    image: '/rainbow_mandala.png',
    alt: 'Rainbow mandala bookmark photographed on a sketchbook',
    description:
      'Hand-cut paper mandala bookmarks embellished with metallic accents to mark mindful moments in your journal.',
  },
  {
    id: 2,
    title: 'Artwork 2',
    category: 'Traditional',
    image: 'https://res.cloudinary.com/ds1xd7ty0/image/upload/v1762650422/IMG_1467_zch3bc.heic',
    alt: 'Detailed mandala bookmark with vibrant colors',
    description:
      'A layered mandala rendered in warm hues, inspired by temple ceilings from South India.',
  },
  {
    id: 3,
    title: 'Artwork 3',
    category: 'Digital',
    description:
      'Digital mandala with intricate symmetries, designed to evoke balance and focus during meditation.',
  },
  {
    id: 4,
    title: 'Artwork 4',
    category: 'Mixed Media',
    description:
      'Mixed-media mandala combining gouache washes with ink detailing to create depth and glow.',
  },
  {
    id: 5,
    title: 'Artwork 5',
    category: 'Digital',
    description:
      'Vibrant digital mandala made for prints and wallpapers, celebrating circular storytelling.',
  },
  {
    id: 6,
    title: 'Artwork 6',
    category: 'Traditional',
    description:
      'Traditional mandala drawn with micron pens on archival paper, highlighting soft gradients.',
  },
  {
    id: 7,
    title: 'Artwork 7',
    category: 'Digital',
    description:
      'Modern geometric mandala with neon highlights, perfect for bringing energy to any space.',
  },
  {
    id: 8,
    title: 'Artwork 8',
    category: 'Mixed Media',
    description:
      'Texture-rich mandala created with metallic inks and acrylic accents on handmade cotton paper.',
  },
  {
    id: 9,
    title: 'Artwork 9',
    category: 'Digital',
    description:
      'Soothing pastel mandala meant to accompany guided breathwork and journaling rituals.',
  },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const featured = galleryImages[activeIndex]
  const backgroundStyle: FeaturedStyle =
    featured.image != null
      ? {
          '--featured-bg': `url(${featured.image})`,
        }
      : {}

  return (
    <section className={styles.featuredSection} style={backgroundStyle}>
      <div className={styles.featuredOverlay}></div>
      <div className={styles.featuredContainer} key={featured.id}>
        <button
          className={`${styles.featuredArrow} ${styles.featuredArrowLeft}`}
          onClick={showPrev}
          aria-label="Previous artwork"
        >
          ‹
        </button>

        {featured.image ? (
          <div className={styles.featuredImageWrapper}>
            <Image
              src={featured.image}
              alt={featured.alt ?? featured.title}
              width={800}
              height={800}
              priority
              className={styles.featuredImage}
            />
          </div>
        ) : null}
        <div className={styles.featuredDetails}>
          <p className={styles.featuredTag}>{featured.category}</p>
          <h1 className={styles.featuredTitle}>{featured.title}</h1>
          {featured.description ? (
            <p className={styles.featuredDescription}>{featured.description}</p>
          ) : (
            <p className={styles.featuredDescription}>
              Explore hand-crafted mandalas designed to infuse your space with balance, color, and calm.
            </p>
          )}
          <button className={styles.featuredButton}>View Details</button>
        </div>

        <button
          className={`${styles.featuredArrow} ${styles.featuredArrowRight}`}
          onClick={showNext}
          aria-label="Next artwork"
        >
          ›
        </button>
      </div>
    </section>
  )
}

