import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Methodology } from './components/Methodology/Methodology'
import { Courses } from './components/Courses/Courses'
import { Testimonials } from './components/Testimonials/Testimonials'
import { FAQ } from './components/FAQ/FAQ'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Courses />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
