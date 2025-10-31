import { useState, useEffect } from 'react'
import styles from './Header.module.css' // Importa o CSS Module

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // Estado para o scroll

  // Efeito para "ouvir" o scroll da página
  useEffect(() => {
    // A função que vai checar o scroll
    const handleScroll = () => {
      // Se o usuário rolou mais que 10 pixels, ativamos o estado
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Adiciona o "ouvinte" (event listener)
    window.addEventListener('scroll', handleScroll)

    // "Limpa" o ouvinte quando o componente "morrer" (boa prática)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // O [] vazio garante que isso rode só uma vez

  return (
    // Adiciona a classe .scrolled dinamicamente
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
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

        {/* Botão Mobile com BÔNUS DE ACESSIBILIDADE */}
        <button
          className={styles.mobileButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
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
