import Link from "next/link"
import { links } from "routes"

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-white h-full w-full flex justify-center items-center">
      <div
        className="absolute top-8 left-8 cursor-pointer"
        onClick={() => setNavMobile(false)}
      >
        <i className="ri-menu-unfold-line iconLink"></i>
      </div>
      <ul className="text-xl flex flex-col gap-y-8 text-center">
        {links.map((item, index) => (
          <Link href={item.path} key={index}>
            <span className="link">{item.name}</span>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavMobile
