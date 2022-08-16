import Link from "next/link"
import routes from "routes"

export default function NavLinks() {
  return (
    <div className="flex ml-15 gap-x-[50px]">
      {routes.map((item, index) => (
        <Link href={item.path} key={index}>
          <span className="link">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}
