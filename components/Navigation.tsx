'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mandala
        </Link>
        
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

