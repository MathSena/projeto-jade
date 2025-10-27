import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.grid} container`}>
        <div className={styles.imageWrapper}>
          <img
            alt="Professora Jade dando aula"
            className={styles.aboutImage}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_d69noFymn57sxuZQZru8AB6IeZFt87vNxWCts5allojQwYz_gHm5r8Axn_eK66HBx_HiJlslP0P9NBkgQ0i9UnNtEmeylb-wdFn0rGV_6LswFam32A2kWXUIVxWcirNR5s1hHICYffGgMbUqxKFrbvG4B5Ks5NOs4zCp8w4kUx1Y6eEwhXXNXSSHYUeRW6cEReqGSQ7E093m6Of6U2KckdVcIzlgdM7rC9HGXzCPV0fbDrzBuRTjjtAgOBdDUwbzbPhAsXfC5NR"
          />
        </div>
        <div className={styles.content}>
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
              <span className="material-symbols-outlined">school</span>
              <span>+5 anos de experiência</span>
            </div>
            <div className={styles.featureItem}>
              <span className="material-symbols-outlined">verified</span>
              <span>Certificação Internacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
