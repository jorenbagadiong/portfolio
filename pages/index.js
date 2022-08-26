import { useState } from "react"
import Head from "next/head"
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  NavMobile,
} from "components"

export default function Home() {
  const [navMobile, setNavMobile] = useState(false)

  return (
    <>
      <Head>
        <title>Joren Bagadiong Portfolio</title>
        <link rel="shorcut icon" href="/assets/images/jb.svg" />
      </Head>
      <div className="w-full max-w-[1440px] mx-auto">
        <Header setNavMobile={setNavMobile} />
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed z-10 top-0 h-full w-full transition-all duration-200`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
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
