import Link from "next/link"
import { links } from "routes"

export default function NavLinks() {
  return (
    <>
      {links.map((item, index) => (
        <Link href={item.path} key={index}>
          <span className="link">{item.name}</span>
        </Link>
      ))}
    </>
  )
}
