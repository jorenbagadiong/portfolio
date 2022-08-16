import Image from "next/image"
import { Title } from "components"

import { goodIn } from "data"

import aboutImg from "../public/assets/images/About.svg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="flex align-center justify-between mx-auto">
          <div data-aos="fade-right" data-aos-offset="400">
            <Image src={aboutImg} width="700" height="700" />
          </div>
          <div
            className="w-[500px] my-auto"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <Title title="About me" />
            <h3 className="h2">I’m here to help your next project</h3>
            <p className="text-gray text-justify">
              I’m a Mid level Frontend Developer living in the Philippines, with
              strong passion in designing and building new applications. I
              experienced working with senior developer in frontend and backend.
            </p>
            <div className="mt-[20px]">
              <h3 className="h2">I’m good in</h3>
              {goodIn.map((item, index) => (
                <div>
                  <span
                    key={index}
                    className="gradientText text-[18px] font-bold w-[200px]"
                  >
                    <i className="ri-star-line"></i> {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
