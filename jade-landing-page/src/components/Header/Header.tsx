import { useState } from 'react'
import styles from './Header.module.css' // Importa o CSS Module

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a className={styles.logo} href="#">
          Jade English
        </a>

        {/* Menu Desktop */}
        <div className={styles.desktopMenu}>
          <a href="#about">Sobre</a>
          <a href="#methodology">Metodologia</a>
          <a href="#courses">Cursos</a>
          <a href="#testimonials">Depoimentos</a>
          <a className={`${styles.contactButton} button`} href="#contact">
            Contato
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          className={styles.mobileButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Material Icon (precisa do link no index.html) */}
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            Sobre
          </a>
          <a href="#methodology" onClick={() => setIsMobileMenuOpen(false)}>
            Metodologia
          </a>
          <a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>
            Cursos
          </a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>
            Depoimentos
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contato
          </a>
        </div>
      )}
    </header>
  )
}
