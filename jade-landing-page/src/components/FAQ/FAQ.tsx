import styles from './FAQ.module.css'

export function FAQ() {
  return (
    <section className={styles.faq} id="faq">
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>Perguntas Frequentes</h2>
        <div className={styles.accordion}>
          {/* Item 1 */}
          <details className={styles.detailsItem}>
            <summary className={styles.summary}>
              Como funcionam as aulas online?
              <span className="material-symbols-outlined">expand_more</span>
            </summary>
            <div className={styles.content}>
              <p>
                As aulas são realizadas por videochamada (Google Meet ou Zoom),
                com duração de 50 minutos. Utilizamos um quadro branco virtual,
                materiais interativos e focamos na conversação. Todo o material
                da aula é enviado para você após o término.
              </p>
            </div>
          </details>
          {/* Item 2 */}
          <details className={styles.detailsItem}>
            <summary className={styles.summary}>
              Qual a frequência ideal das aulas?
              <span className="material-symbols-outlined">expand_more</span>
            </summary>
            <div className={styles.content}>
              <p>
                A frequência ideal depende dos seus objetivos e disponibilidade.
                A maioria dos alunos opta por 2 aulas por semana para manter um
                bom ritmo de aprendizado, mas podemos adaptar para 1 ou mais
                aulas semanais.
              </p>
            </div>
          </details>
          {/* Item 3 */}
          <details className={styles.detailsItem}>
            <summary className={styles.summary}>
              Preciso comprar algum material?
              <span className="material-symbols-outlined">expand_more</span>
            </summary>
            <div className={styles.content}>
              <p>
                Não! Todo o material didático é fornecido por mim, sem custo
                adicional. Utilizo uma variedade de fontes, como livros
                digitais, artigos, vídeos e exercícios interativos, sempre
                personalizados para você.
              </p>
            </div>
          </details>
          {/* Item 4 */}
          <details className={styles.detailsItem}>
            <summary className={styles.summary}>
              Como posso pagar pelas aulas?
              <span className="material-symbols-outlined">expand_more</span>
            </summary>
            <div className={styles.content}>
              <p>
                O pagamento é feito mensalmente através de Pix ou transferência
                bancária. É simples, rápido e seguro.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
