import styles from './Methodology.module.css'

export function Methodology() {
  return (
    <section className={styles.methodology} id="methodology">
      <div className="container">
        <div className={styles.header}>
          <h2>Minha Metodologia</h2>
          <p>
            Acredito que cada aluno é único. Por isso, minhas aulas são 100%
            focadas nas suas necessidades e interesses, utilizando o método
            comunicativo para acelerar seu aprendizado.
          </p>
        </div>
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <span className="material-symbols-outlined">record_voice_over</span>
            <h3>Foco na Conversação</h3>
            <p>
              Desde o primeiro dia, você vai falar inglês. A prática constante é
              a chave para a fluência.
            </p>
          </div>
          {/* Card 2 */}
          <div className={styles.card}>
            <span className="material-symbols-outlined">palette</span>
            <h3>Aulas Personalizadas</h3>
            <p>
              Usamos materiais do seu interesse: músicas, séries, notícias e
              artigos da sua área.
            </p>
          </div>
          {/* Card 3 */}
          <div className={styles.card}>
            <span className="material-symbols-outlined">psychology</span>
            <h3>Aprendizado Leve</h3>
            <p>
              Criamos um ambiente seguro e descontraído para você aprender sem
              medo de errar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
