'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção Principal */}
        <div className={styles.mainSection}>
          {/* Logo e Descrição */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image 
                src="/icons/controle.png" 
                alt="PlayStation" 
                width={32} 
                height={32} 
                className={styles.logoIcon}
              />
              <span className={styles.logoText}>PlayStation API</span>
            </div>
            <p className={styles.description}>
              Descubra os melhores jogos do PlayStation 4 e PlayStation 5. 
              Uma experiência completa para gamers.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className={styles.navSection}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <ul className={styles.navList}>
              <li>
                <Link href="/home" className={styles.navLink}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/playstation" className={styles.navLink}>
                  Jogos PlayStation
                </Link>
              </li>
              <li>
                <Link href="/api" className={styles.navLink}>
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Tecnologias */}
          <div className={styles.techSection}>
            <h4 className={styles.sectionTitle}>Tecnologias</h4>
            <div className={styles.techIcons}>
              <div className={styles.techItem}>
                <Image 
                  src="/icons/react.png" 
                  alt="React" 
                  width={24} 
                  height={24} 
                />
                <span>React</span>
              </div>
              <div className={styles.techItem}>
                <Image 
                  src="/icons/next.png" 
                  alt="Next.js" 
                  width={24} 
                  height={24} 
                />
                <span>Next.js</span>
              </div>
              <div className={styles.techItem}>
                <Image 
                  src="/icons/node.png" 
                  alt="Node.js" 
                  width={24} 
                  height={24} 
                />
                <span>Node.js</span>
              </div>
              <div className={styles.techItem}>
                <Image 
                  src="/icons/css.png" 
                  alt="CSS" 
                  width={24} 
                  height={24} 
                />
                <span>CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Inferior */}
        <div className={styles.bottomSection}>
          <div className={styles.divider}></div>
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>&copy; 2025 PlayStation API. Desenvolvido por Leonardo Oliveira - SENAI Valinhos</p>
            </div>
            <div className={styles.schoolInfo}>
              <span>Turma: 2TDS1</span>
            </div>
          </div>
        </div>

        {/* Elementos Decorativos */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </footer>
  )
}
