import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.grid}>
        <div className={styles.content}>
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
        </div>
        <div className={styles.imageWrapper}>
          {/* Imagem da Professora */}
          <img
            alt="Foto da professora Jade sorrindo"
            className={styles.heroImage}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_d69noFymn57sxuZQZru8AB6IeZFt87vNxWCts5allojQwYz_gHm5r8Axn_eK66HBx_HiJlslP0P9NBkgQ0i9UnNtEmeylb-wdFn0rGV_6LswFam32A2kWXUIVxWcirNR5s1hHICYffGgMbUqxKFrbvG4B5Ks5NOs4zCp8w4kUx1Y6eEwhXXNXSSHYUeRW6cEReqGSQ7E093m6Of6U2KckdVcIzlgdM7rC9HGXzCPV0fbDrzBuRTjjtAgOBdDUwbzbPhAsXfC5NR" // Mude para uma imagem local
          />
        </div>
      </div>
    </section>
  )
}
