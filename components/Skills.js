import Image from "next/image"
import { Title, IconList } from "components"

import skillImg from "../public/assets/images/Skills.svg"

export default function Skills() {
  return (
    <section id="skills" className="mb-[5rem]">
      <div className="container m-auto mt-[5rem]">
        <div>
          <Title title="Skills" />
        </div>
        <div className="container mx-auto mt-[1rem]">
          <div
            className="flex align-center justify-between"
            data-aos="fade-up"
            data-aos-offset="550"
          >
            <div className="grid grid-cols-5 w-[800px]">
              <IconList />
            </div>
            <div
              className="flex items-center justify-center"
              data-aos="fade-down"
              data-aos-offset="300"
            >
              <Image src={skillImg} alt="skills" width="700" height="700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
