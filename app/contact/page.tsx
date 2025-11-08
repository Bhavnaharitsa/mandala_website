'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <div className={styles.contact}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Get in Touch</h1>
          <p className={styles.contactDescription}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <p>hello@mandala.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Art Street<br />Creative City, CC 12345</p>
                </div>
              </div>
            </div>
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

