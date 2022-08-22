import Link from "next/link"

export default function Button({ name, path, width, height, newTab }) {
  const outerWidth = width
  const innerWidth = width - 10

  const outerHeight = height
  const innerHeight = height - 10

  return (
    <Link href={path}>
      <a target={`${newTab ? "_blank" : ""}`}>
        <div
          className={`transition-all duration-200 p-[5px] ${
            width ? `w-[${outerWidth}px]` : ""
          } ${
            height ? `h-[${outerHeight}px]` : ""
          } gradient rounded-[10px] cursor-pointer hover:drop-shadow-lg`}
        >
          <div
            className={`p-[5px] ${width ? `w-[${innerWidth}px]` : ""} ${
              height ? `h-[${innerHeight}px]` : ""
            }  bg-white px-[30px] rounded-[5px] text-center cursor-pointer`}
          >
            <span className="font-bold text-[20px] cursor-pointer gradientText">
              {name}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
