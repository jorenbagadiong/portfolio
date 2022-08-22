import { NavLinks, IconLink } from "components"

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-8 pb-0">
          <NavLinks />
          <div className="flex gap-x-[30px] mr-15">
            <IconLink />
          </div>
        </div>
      </div>
    </footer>
  )
}
