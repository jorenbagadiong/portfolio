import { useState, useEffect } from "react"
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
  GoToTop,
} from "components"

export default function Home() {
  const [navMobile, setNavMobile] = useState(false)
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    })
  }, [])

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
        {showGoToTop && <GoToTop />}
      </div>
    </>
  )
}
