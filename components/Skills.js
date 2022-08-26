import Image from "next/image"

import { Title, SkillList } from "components"

import skillImg from "../public/assets/images/Skills.svg"

export default function Skills() {
  return (
    <section id="skills" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div className="p-5 lg:p-0" data-aos="fade-right" data-aos-offset="200">
          <Title title="Skills" className="p-[50px]" />
        </div>
        <div className="container my-auto">
          <div
            className="flex align-center justify-between flex-col lg:flex-row"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="w-full p-5">
              <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <SkillList />
              </div>
            </div>
            <div
              className="flex items-center align-center justify-center p-5 "
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <Image src={skillImg} alt="skills" width="800" height="800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
