import Image from "next/image"
import { Title, Button } from "components"

import { projects } from "data"

export default function Projects() {
  return (
    <section id="projects" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div className="p-5 lg:p-0" data-aos="fade-right" data-aos-offset="550">
          <Title title="Projects" className="p-[50px]" />
        </div>
        <div
          className="container m-auto p-5"
          data-aos="fade-up"
          data-aos-offset="550"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(({ title, image, path, code }, index) => (
              <div className=" gradient p-[5px] rounded-[10px]" key={index}>
                <div className="p-[2rem] bg-white rounded-[5px] flex flex-col justify-center">
                  <h2 className="h2">{title}</h2>
                  <Image src={image} width="400" height="300" />
                  <div className="flex justify-center gap-x-[20px]">
                    <Button name="Launch" path={path} newTab={true} />
                    <Button name="Source" path={code} newTab={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
