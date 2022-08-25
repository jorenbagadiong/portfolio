import Image from "next/image"

import { Title } from "components"
import { goodIn } from "data"

import aboutImg from "../public/assets/images/About.svg"

export default function About() {
  return (
    <section id="about" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row align-center justify-between mx-auto">
          <div>
            <div>
              <Image
                src={aboutImg}
                width="600"
                height="600"
                data-aos="fade-right"
                data-aos-offset="400"
              />
            </div>
          </div>
          <div className="flex align-center justify-center">
            <div className="w-[500px] p-10 my-auto">
              <div data-aos="fade-left" data-aos-offset="400">
                <Title title="About me" />
                <h3 className="h2">I’m here to help your next project</h3>
                <p className="text-gray text-justify">
                  I’m a Mid level Frontend Developer living in the Philippines,
                  with strong passion in designing and building new
                  applications. I experienced working with senior developer in
                  frontend and backend.
                </p>
                <div className="mt-[20px]">
                  <h3 className="h2">I’m good in</h3>
                  {goodIn.map((item, index) => (
                    <div key={index}>
                      <span className="gradientText text-[18px] font-bold w-[200px]">
                        <i className="ri-star-line"></i> {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
