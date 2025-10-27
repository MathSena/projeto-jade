import styles from './Courses.module.css'

export function Courses() {
  return (
    <section className={styles.courses} id="courses">
      <div className="container">
        <h2 className={styles.title}>Nossos Cursos</h2>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitlePrimary}>Básico</h3>
            <p>
              Para quem está começando do zero e quer construir uma base sólida.
            </p>
            <span className={styles.levels}>Níveis A1-A2</span>
          </div>
          {/* Card 2 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitlePrimary}>Intermediário</h3>
            <p>
              Para quem já entende o idioma e busca mais fluidez e confiança.
            </p>
            <span className={styles.levels}>Níveis B1-B2</span>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitlePrimary}>Avançado</h3>
            <p>
              Para quem quer refinar o idioma, discutir temas complexos e soar
              natural.
            </p>
            <span className={styles.levels}>Níveis C1-C2</span>
          </div>
          {/* Card 4 (Específico) */}
          <div className={`${styles.card} ${styles.cardFeatured}`}>
            <h3 className={styles.cardTitleSecondary}>Específico</h3>
            <p>
              Aulas focadas em objetivos como entrevistas de emprego, viagens ou
              negócios.
            </p>
            <span className={styles.levels}>Personalizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
