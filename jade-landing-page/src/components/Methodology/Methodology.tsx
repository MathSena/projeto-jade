import styles from './Methodology.module.css'
import { motion } from 'framer-motion'

const methodologyData = [
  {
    icon: 'record_voice_over',
    title: 'Foco na Conversação',
    description:
      'Desde o primeiro dia, você vai falar inglês. A prática constante é a chave para a fluência.'
  },
  {
    icon: 'palette',
    title: 'Aulas Personalizadas',
    description:
      'Usamos materiais do seu interesse: músicas, séries, notícias e artigos da sua área.'
  },
  {
    icon: 'psychology',
    title: 'Aprendizado Leve',
    description:
      'Criamos um ambiente seguro e descontraído para você aprender sem medo de errar.'
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

export function Methodology() {
  return (
    <motion.section
      className={styles.methodology}
      id="methodology"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div className={styles.header} variants={headerVariants}>
          <h2>Minha Metodologia</h2>
          <p>
            Acredito que cada aluno é único. Por isso, minhas aulas são 100%
            focadas nas suas necessidades e interesses, utilizando o método
            comunicativo para acelerar seu aprendizado.
          </p>
        </motion.div>

        <motion.div className={styles.grid} variants={gridVariants}>
          {methodologyData.map(item => (
            <motion.div
              className={styles.card}
              key={item.title}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}{' '}
        </motion.div>
      </div>
    </motion.section>
  )
}
