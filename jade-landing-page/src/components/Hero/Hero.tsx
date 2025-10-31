import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import heroImage from '../../assets/about-jade.jpg'

// 2. Definimos nossas "receitas" de animação
const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      delay: 0.2
    }
  }
}

export function Hero() {
  return (
    // 3. Usamos motion.section para controlar o "quando" animar
    <motion.section
      className={`${styles.hero} container`}
      initial="hidden" // Começa como "hidden"
      whileInView="visible" // Anima para "visible" quando entra na tela
      viewport={{ once: true, amount: 0.3 }} // Ativa 1x com 30% de visibilidade
    >
      <div className={styles.grid}>
        {/* 4. Aplicamos a animação de CONTEÚDO */}
        <motion.div className={styles.content} variants={contentVariants}>
          <span className={styles.subtitle}>Aulas de Inglês Online</span>
          <h1 className={styles.headline}>
            Fale inglês com{' '}
            <span className={styles.primaryText}>confiança</span> e{' '}
            <span className={styles.tertiaryText}>naturalidade</span>.
          </h1>
          <p className={styles.description}>
            Aulas dinâmicas e personalizadas para você finalmente destravar o
            seu inglês, não importa o seu nível.
          </p>
          <div className={styles.ctaButtons}>
            <a className="button button-primary" href="#contact">
              Agende uma aula
            </a>
            <a className={styles.secondaryButton} href="#courses">
              Ver Cursos
            </a>
          </div>
        </motion.div>

        <motion.div className={styles.imageWrapper} variants={imageVariants}>
          <img
            alt="Foto da professora Jade sorrindo"
            className={styles.heroImage}
            src={heroImage}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
