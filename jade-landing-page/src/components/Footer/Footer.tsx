import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© 2024 Jade English. Todos os direitos reservados.</p>
        <div className={styles.links}>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
