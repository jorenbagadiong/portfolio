import Image from "next/image"
import axios from "axios"
import Notiflix from 'notiflix';

import { Button } from "components"

export default function Hero() {
  const dowloadCV = () => {
    axios({
      url: "/file/CV.docx",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", "Joren Bagadiong.docx") //or any other extension
      document.body.appendChild(link)
      link.click()
      Notiflix.Notify.success('Successfully Downloaded');
    })
  }

  return (
    <section id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row align-center justify-between item-center mx-auto">
          <div
            className="my-auto ml-[30px] flex-1"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <div>
              <h1 className="h1">Hi,</h1>
              <h1 className="h1 mt-[-40px]">
                I’m <span className="gradientText">Joren</span>
              </h1>
              <h3 className="h3 mt-[-20px]">Frontend Developer</h3>
              <div className="flex mt-[30px] gap-x-[20px]">
                <div>
                  <button
                    type="button"
                    className="gradientButton"
                    onClick={dowloadCV}
                  >
                    Download CV
                  </button>
                </div>
                <div>
                  <Button
                    name="Contact Me"
                    path="#contact"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300">
            <Image
              alt="home-image"
              src="/assets/images/Home.svg"
              width="700"
              height="700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
