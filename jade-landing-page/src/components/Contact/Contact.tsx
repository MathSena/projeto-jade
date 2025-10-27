import { useState } from 'react'
import styles from './Contact.module.css'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({ name, email, whatsapp })
    alert('Obrigado pelo contato!')
    setName('')
    setEmail('')
    setWhatsapp('')
  }

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.card}>
          <h2>Pronto para começar?</h2>
          <p>
            Agende uma aula experimental gratuita para nos conhecermos e eu
            montar um plano de estudos perfeito para você!
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="WhatsApp (com DDD)"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              required
            />
            <button type="submit" className={`${styles.submitButton} button`}>
              Quero minha aula experimental!
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
