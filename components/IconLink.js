import Link from "next/link"
import { iconLinks } from "data"

export default function IconLink() {
  return (
    <>
      {iconLinks.map(({ path, icon, name }, index) => (
        <Link href={path} key={index}>
          <a target="_blank">
            <i className={`${icon} iconLink`} name={name}></i>
          </a>
        </Link>
      ))}
    </>
  )
}
