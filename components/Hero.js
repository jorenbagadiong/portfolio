import Image from "next/image"
import Link from "next/link"

import homeImg from "../public/assets/images/Home.svg"

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto">
        <div className="flex align-center justify-between mx-auto">
          <div
            className="my-auto ml-[30px]"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <h1 className="h1">Hi,</h1>
            <h1 className="h1 mt-[-40px]">
              I’m <span className="gradientText">Joren</span>
            </h1>
            <h3 className="h3 mt-[-20px]">Frontend Developer</h3>
            <div className="flex mt-[30px] gap-x-[20px]">
              <button type="button" className="gradientButton">
                Download CV
              </button>
              <Link href="#contact">
                <div className="transition-all duration-200 p-[5px] w-[200px] bg-gradient-to-r from-purple to-skyblue rounded-[10px] cursor-pointer hover:drop-shadow-lg ">
                  <div className="p-[5px] w-[190px] bg-white rounded-[5px] text-center cursor-pointer">
                    <span className="font-bold text-[20px] cursor-pointer gradientText">
                      Contact Me
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300">
            <Image alt="home-image" src={homeImg} width="700" height="700" />
          </div>
        </div>
      </div>
    </section>
  )
}
