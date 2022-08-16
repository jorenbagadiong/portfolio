import React, { useEffect } from "react"
import Aos from "aos"

import "remixicon/fonts/remixicon.css"
import "aos/dist/aos.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 400,
    })
  })

  return <Component {...pageProps} />
}

export default MyApp
