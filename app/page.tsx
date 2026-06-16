import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Highlights from './components/Highlights'
import Timeline from './components/Timeline'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Highlights />
      <Timeline />
      <GitHubStats />
      <Contact />
      <Footer />
    </main>
  )
}
