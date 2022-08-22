import { NavLinks, IconLink } from "components"

export default function Header() {
  return (
    <header data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-8 pb-0">
          <NavLinks />
          <div className="flex gap-x-[30px] mr-15">
            <IconLink />
          </div>
        </div>
      </div>
    </header>
  )
}
