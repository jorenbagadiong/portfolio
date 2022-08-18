import Image from "next/image"
import { skills } from "data"

export default function IconList() {
  return (
    <>
      {skills.map(({ name, src }, index) => (
        <div
          className="mx-auto text-center my-[1] p-[10px] mt-1"
          key={index}
        >
          <div className="gradient p-[5px] w-[110px] h-[110px] rounded-[10px]">
            <div className="p-[5px] w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center">
              <Image src={src} width="60" height="60" />
            </div>
          </div>
          <h3 className="font-bold mt-[5px]">{name}</h3>
        </div>
      ))}
    </>
  )
}
