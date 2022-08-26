import { NavLinks, IconLink } from "components"

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex items-center justify-between pb-0">
          <NavLinks />
          <div className="flex gap-x-[30px] mr-15">
            <IconLink />
          </div>
        </div>
        <div className="divider" />
        <div className="text-center mt-[10px] pb-[8rem] pt-0">
          <h3 className="text-[1.2rem] font-bold">
            © 2022 - Developed by Joren Bagadiong. All rights reserved.
          </h3>
        </div>
      </div>
    </footer>
  )
}
