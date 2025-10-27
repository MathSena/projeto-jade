import { TestimonialCard } from '../TestimonialsCard/TestimonialCard'
import styles from './Testimonials.module.css'

// Dados (como fizemos antes)
const testimonialsData = [
  {
    quote:
      'As aulas com a Jade são incríveis! Finalmente perdi o medo de falar e hoje consigo participar de reuniões em inglês no trabalho. Recomendo demais!',
    name: 'Carlos Silva',
    role: 'Desenvolvedor de Software',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8mV33S6mO-waUmojL2kYiEWf4-iq9XZHzkAMoQ1Mvf4pSy9ydBLYcpEKBc1O-2GgpdF5GaX7IPUn5vflaYaH7NWeubiUjpO3wWeUB3IjhQkHYqDIlRc8suJIWL5BeVcBKV4337omJUjDKo2DUaCLI-_vvcEhXec-R6EXkwhD6H0UOGt5GfdsKCzzzbZXrHyWq8qTvrrungC__q7DhOQ6KC_jX-ZhXDYGHxxqeWtIbVz67_ipeNskbQLu_0uitwFr-bI8rnu27ujND'
  },
  {
    quote:
      'Eu precisava de inglês para uma viagem e em poucos meses já me sentia segura para me comunicar. A Jade é super paciente e didática.',
    name: 'Mariana Costa',
    role: 'Designer',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIZjQFHkigIjFK8fU2NI6eYyr8Fi6rLxQk3BRBfwmN5KSg3IeM4OTv0maqT2aq8AcwspbbxEQI36I8mUI42hrKSH5F1e18ku9GBLP8U5RvEKvJ0czu_qNfeKqOx7b0RdXIu18e5Uiwbdc9AF5xwDzwsZ-pTJvBENOJDNvPMxLOdTbW5xO8pBWKv78gm-S5TsYP8wzn-OCGPJ-O2jaYwnaZ0mlfhthntstQa5OEVAX3jusiXpHkXIAq--cEzr4i2O3lG4Ux0zyvOik'
  },
  {
    quote:
      'A melhor professora de inglês que já tive. As aulas são divertidas e o progresso é nítido. Consegui uma promoção graças à minha evolução no idioma.',
    name: 'Lucas Pereira',
    role: 'Gerente de Projetos',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW-wx2mSxr_q1uAQvgEE1OpgRhRu7tAIlyZb-bAraMetYzcQbBQkamSAvt8_TbthD_NoYTcdjHgX4yn2YJcWK5mnFiJtZue2mwD1qFit1NjPPCYmBsq_DhMzYlS_hQUGRkK3DaUU9EXVeGPQwYbeZr2vC6Z6fJjetzBVdYpg8_ZWgPLonSj0dVRudLN2xlAmlAdMaTgCgMf_ypprk0RmmIOKyeIluel9ZMveZEPmEog232T7R1NNGj-enVHf2RHpQ7MdMEVvKr0MMY'
  }
]

export function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <h2 className={styles.title}>O que meus alunos dizem</h2>
        <div className={styles.grid}>
          {testimonialsData.map(item => (
            <TestimonialCard
              key={item.name}
              quote={item.quote}
              name={item.name}
              role={item.role}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
