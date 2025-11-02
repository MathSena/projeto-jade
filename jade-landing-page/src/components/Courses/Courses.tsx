import styles from './Courses.module.css'
import { motion } from 'framer-motion'

const coursesData = [
  {
    title: 'Básico',
    description:
      'Para quem está começando do zero e quer construir uma base sólida.',
    levels: 'Níveis A1-A2',
    isFeatured: false
  },
  {
    title: 'Intermediário',
    description:
      'Para quem já entende o idioma e busca mais fluidez e confiança.',
    levels: 'Níveis B1-B2',
    isFeatured: false
  },
  {
    title: 'Avançado',
    description:
      'Para quem quer refinar o idioma, discutir temas complexos e soar natural.',
    levels: 'Níveis C1-C2',
    isFeatured: false
  },
  {
    title: 'Específico',
    description:
      'Aulas focadas em objetivos como entrevistas de emprego, viagens ou negócios.',
    levels: 'Personalizado',
    isFeatured: true
  }
]

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
}

export function Courses() {
  return (
    <motion.section
      className={styles.courses}
      id="courses"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2 className={styles.title} variants={headerVariants}>
          Nossos Cursos
        </motion.h2>

        <motion.div className={styles.grid} variants={gridVariants}>
          {coursesData.map(item => (
            <motion.div
              key={item.title}
              className={`${styles.card} ${
                item.isFeatured ? styles.cardFeatured : ''
              }`}
              variants={cardVariants}
            >
              <h3
                className={
                  item.isFeatured
                    ? styles.cardTitleSecondary
                    : styles.cardTitlePrimary
                }
              >
                {item.title}
              </h3>
              <p>{item.description}</p>
              <span className={styles.levels}>{item.levels}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
