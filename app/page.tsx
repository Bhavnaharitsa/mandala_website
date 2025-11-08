'use client'

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import mandalaLogo from './mandala_logo.png'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const featuresRef = useRef<HTMLElement | null>(null)
  const hasShownCardsRef = useRef(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  const modalContent = {
    mindful: {
      title: 'Mindful Art',
      icon: '🎨',
      description:
        'Hand-drawn mandalas crafted with patience to bring calm, balance, and presence to your space.',
      points: [
        'Created to gently soothe the mind and soften the atmosphere',
        'Ideal for meditation spaces, reading nooks, or bedside calm',
        'Each piece centers around a grounding focal point',
        'Printed on light, frame-ready cardstock—easy to gift or display',
      ]
    },
    spiritual: {
      title: 'Spiritual Connection',
      icon: '✨',
      description:
        'Symbol-rich mandalas inspired by meditation and inner reflection to anchor daily rituals.',
      points: [
        'Motifs drawn from ancient sacred geometry',
        'Hues selected to harmonize breath and focus',
        'Pairs beautifully with incense or crystal layouts',
        'Sized to rest comfortably on any altar surface',
        'Protected with a matte seal for lasting color'
      ]
    },
    energy: {
      title: 'Positive Energy Design',
      icon: '🌟',
      description:
        'Vibrant mandalas engineered to radiate harmony and refresh the energy of any room.',
      points: [
        'Soft layered tones that guide a natural flow of energy',
        'Designed to stand out gently on any wall',
        'Thoughtful symmetry that supports harmony and feng shui',
        'Printed on high-quality paper to keep colors rich',
      ]
    }
  }

  const getModalContent = () => {
    if (!activeModal) return null
    return modalContent[activeModal as keyof typeof modalContent]
  }

  useEffect(() => {
    if (!featuresRef.current) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting && !hasShownCardsRef.current) {
        hasShownCardsRef.current = true
        setCardsVisible(true)
      }
    }, { threshold: 0.35 })

    observer.observe(featuresRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.logo}>
            <Image
              src={mandalaLogo}
              alt="Mandalas logo"
              width={550}
              height={550}
              priority
              className={styles.heroLogoImage}
            />
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
          <div className={styles.gradientCircle}></div>
        </div>
      </section>

      <section ref={featuresRef} className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className={`${styles.featureGrid} ${cardsVisible ? styles.featureGridVisible : ''}`}>
            <div
              className={`${styles.featureCard} ${styles.mindfulArtCard} ${cardsVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: cardsVisible ? '0ms' : '0ms' }}
              onClick={() => setActiveModal('mindful')}
            >
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.beautifulArt}>Mindful Art</h3>
              <p className={styles.cardDescription}>A collection of hand-drawn mandalas created with patience and intention.
              Each piece is designed to bring calm, balance, and presence into your space.</p>
            </div>
            <div
              className={`${styles.featureCard} ${styles.spiritualCard} ${cardsVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: cardsVisible ? '120ms' : '0ms' }}
              onClick={() => setActiveModal('spiritual')}
            >
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.beautifulArt}>Spiritual Connection</h3>
              <p className={styles.cardDescription}>Mandalas represent unity and wholeness.
              Explore designs inspired by meditation, energy flow, and inner reflection.</p>
            </div>
            <div
              className={`${styles.featureCard} ${styles.energyCard} ${cardsVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: cardsVisible ? '240ms' : '0ms' }}
              onClick={() => setActiveModal('energy')}
            >
              <div className={styles.featureIcon}>🌟</div>
              <h3 className={styles.beautifulArt}>Positive Energy Design</h3>
              <p className={styles.cardDescription}>Every mandala is crafted with care to radiate harmony and good energy.
              Perfect for elevating your room, workspace, or personal altar.</p>
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

      {/* Modal */}
      {activeModal && getModalContent() && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveModal(null)}>×</button>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{getModalContent()?.icon}</div>
              <h2>{getModalContent()?.title}</h2>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{getModalContent()?.description}</p>
              <h3 className={styles.modalSubheading}>What Makes Our Mandalas Special</h3>
              <ul className={styles.modalList}>
                {getModalContent()?.points.map((point, index) => (
                  <li key={index}>
                    <span className={styles.bulletIcon} aria-hidden="true">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
