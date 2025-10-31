import { motion } from 'framer-motion'
import styles from './About.module.css'
import aboutImage from '../../assets/about-jade.jpg'

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      delay: 0.2
    }
  }
}

export function About() {
  return (
    <motion.section
      className={styles.about}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={`${styles.grid} container`}>
        <motion.div className={styles.imageWrapper} variants={imageVariants}>
          <img
            alt="Professora Jade dando aula"
            className={styles.aboutImage}
            src={aboutImage}
          />
        </motion.div>

        <motion.div className={styles.content} variants={contentVariants}>
          <h2 className={styles.title}>Sobre a Teacher Jade</h2>
          <p>
            Olá! Sou a Jade, apaixonada por idiomas e por conectar pessoas
            através da comunicação. Com mais de 5 anos de experiência, já ajudei
            dezenas de alunos a perderem o medo de falar inglês e a alcançarem
            seus objetivos, seja para viagens, trabalho ou crescimento pessoal.
          </p>
          <p>
            Minha missão é mostrar que aprender inglês pode ser uma jornada
            leve, divertida e, acima de tudo, eficaz. Vamos juntos nessa?
          </p>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.iconWrapper}>
                <span className="material-symbols-outlined">school</span>
              </span>
              <span>+5 anos de experiência</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.iconWrapper}>
                <span className="material-symbols-outlined">verified</span>
              </span>
              <span>Certificação Internacional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
