import Image from "next/image"
import { Title, SkillList } from "components"

import skillImg from "../public/assets/images/Skills.svg"

export default function Skills() {
  return (
    <section id="skills" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div data-aos="fade-right" data-aos-offset="550">
          <Title title="Skills" className="p-[50px]" />
        </div>
        <div className="container my-auto mt-[-50px]">
          <div
            className="flex align-center justify-between"
            data-aos="fade-up"
            data-aos-offset="500"
          >
            <div className="m-auto">
              <div className="grid grid-cols-5 mt-[-20px]">
                <SkillList />
              </div>
            </div>
            <div
              className="flex items-center justify-center mr-[-30px]"
              data-aos="fade-up"
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
