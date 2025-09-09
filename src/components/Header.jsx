'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo PlayStation */}
        <div className={styles.logo}>
          <Link href="/home">
            <div className={styles.playstationLogo}>
              <Image 
                src="/images/logoPS.png" 
                alt="PlayStation" 
                width={80} 
                height={20} 
                className={styles.psLogo}
                priority
              />
              <div className={styles.psSymbols}>
                <span className={styles.triangle}>△</span>
                <span className={styles.square}>□</span>
                <span className={styles.circle}>○</span>
                <span className={styles.x}>✕</span>
              </div>
            </div>
            <span className={styles.logoText}>API</span>
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/home" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/playstation" className={styles.navLink}>
                Jogos PlayStation
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/api" className={styles.navLink}>
                API
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Menu Mobile */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>
              <Link 
                href="/home" 
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link 
                href="/playstation" 
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Jogos PlayStation
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link 
                href="/api" 
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                API
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
