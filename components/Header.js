import { NavLinks, IconLink } from "components"

export default function Header({ setNavMobile }) {
  return (
    <header data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
      <div className="container mx-auto">
        <div className="flex items-center justify-end lg:justify-between p-8 pb-0">
          <div className="hidden lg:flex ml-15 gap-x-[50px]">
            <NavLinks />
          </div>
          <div className="hidden lg:flex gap-x-[30px] mr-15">
            <IconLink />
          </div>
          <div
            className="lg:hidden cursor:pointer"
            onClick={() => setNavMobile(true)}
          >
            <i className="ri-menu-fold-line iconLink"></i>
          </div>
        </div>
      </div>
    </header>
  )
}
