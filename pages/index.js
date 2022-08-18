import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "components"

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
