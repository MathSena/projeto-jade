import styles from './TestimonialCard.module.css'

// Interface para as props
interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  imageUrl: string
}

export function TestimonialCard(props: TestimonialCardProps) {
  const { quote, name, role, imageUrl } = props

  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.authorInfo}>
        <img alt={`Foto de ${name}`} className={styles.avatar} src={imageUrl} />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  )
}
