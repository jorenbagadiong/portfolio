import Head from "next/head"
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
    <>
      <Head>
        <title>Joren Bagadiong Portfolio</title>
        <link rel="shorcut icon" href="/assets/images/jb.svg" />
      </Head>
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
