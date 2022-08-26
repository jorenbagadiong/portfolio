import Link from "next/link"
import { links } from "routes"

export default function NavLinks() {
  return (
    <div className="hidden lg:flex ml-15 gap-x-[50px]">
      {links.map((item, index) => (
        <Link href={item.path} key={index}>
          <span className="link">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}
