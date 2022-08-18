import { NavLinks } from "components"

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-8 pb-0">
          <NavLinks />
          <div className="flex gap-x-[30px] mr-15">
            <i className="ri-github-line iconLink"></i>
            <i className="ri-linkedin-box-line iconLink"></i>
            <i className="ri-facebook-box-line iconLink"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}
