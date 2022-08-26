import { NavLinks, IconLink } from "components"

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:flex-row text-center items-center justify-between gap-[50px] mt-[50px]">
          <div className="flex flex-col md:flex-row lg:flex-row ml-15 gap-[50px]">
            <NavLinks />
          </div>
          <div className="flex gap-[30px]">
            <IconLink />
          </div>
        </div>
        <div className="divider" />
        <div className="text-center mt-[10px] pb-[8rem]">
          <h3 className="text-[1.2rem] font-bold">
            © 2022 - Developed by Joren Bagadiong.
          </h3>
          <h3 className="text-[1.2rem] font-bold">All rights reserved.</h3>
        </div>
      </div>
    </footer>
  )
}
