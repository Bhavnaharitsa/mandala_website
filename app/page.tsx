'use client'

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import mandalaLogo from './mandala_logo.png'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const modalContent = {
    mindful: {
      title: 'Mindful Art',
      icon: '🎨',
      description: 'Our Mindful Art collection features hand-drawn mandalas created with patience and intention. Each piece is designed to bring calm, balance, and presence into your space.',
      points: [
        'Hand-drawn with meticulous attention to detail',
        'Created with intention and mindfulness',
        'Designed to promote calm and balance',
        'Perfect for meditation spaces, bedrooms, or workspaces',
        'Each piece is unique and carries positive energy'
      ],
      examples: 'Explore our gallery to see the full collection of mindful mandala designs, each crafted to bring harmony and peace into your daily life.'
    },
    spiritual: {
      title: 'Spiritual Connection',
      icon: '✨',
      description: 'Mandalas represent unity and wholeness. Our spiritual collection explores designs inspired by meditation, energy flow, and inner reflection.',
      points: [
        'Symbols of unity and cosmic order',
        'Inspired by ancient spiritual traditions',
        'Designed to enhance meditation and reflection',
        'Connect with your inner self and higher consciousness',
        'Perfect for sacred spaces and altars'
      ],
      examples: 'Discover mandalas that resonate with your spiritual journey, each piece created to deepen your connection with the divine.'
    },
    energy: {
      title: 'Positive Energy Design',
      icon: '🌟',
      description: 'Every mandala is crafted with care to radiate harmony and good energy. Perfect for elevating your room, workspace, or personal altar.',
      points: [
        'Designed to radiate positive vibrations',
        'Crafted with intention for energy flow',
        'Enhances the atmosphere of any space',
        'Perfect for feng shui and energy healing',
        'Brings harmony and balance to your environment'
      ],
      examples: 'Transform your space with mandalas that carry positive energy, creating an environment of peace, harmony, and good fortune.'
    }
  }

  const getModalContent = () => {
    if (!activeModal) return null
    return modalContent[activeModal as keyof typeof modalContent]
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.logo}>
            <Image
              src={mandalaLogo}
              alt="Mandalas logo"
              width={400}
              height={400}
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

      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className={styles.featureGrid}>
            <div 
              className={`${styles.featureCard} ${styles.mindfulArtCard}`}
              onClick={() => setActiveModal('mindful')}
            >
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.beautifulArt}>Mindful Art</h3>
              <p className={styles.cardDescription}>A collection of hand-drawn mandalas created with patience and intention.
              Each piece is designed to bring calm, balance, and presence into your space.</p>
            </div>
            <div 
              className={`${styles.featureCard} ${styles.spiritualCard}`}
              onClick={() => setActiveModal('spiritual')}
            >
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.beautifulArt}>Spiritual Connection</h3>
              <p className={styles.cardDescription}>Mandalas represent unity and wholeness.
              Explore designs inspired by meditation, energy flow, and inner reflection.</p>
            </div>
            <div 
              className={`${styles.featureCard} ${styles.energyCard}`}
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
              <p className={styles.modalDescription}>
                {getModalContent()?.description}
              </p>
              <h3>What Makes Our Mandalas Special:</h3>
              <ul className={styles.modalList}>
                {getModalContent()?.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className={styles.modalExamples}>
                <h3>Examples:</h3>
                <p>{getModalContent()?.examples}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
