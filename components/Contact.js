import Image from "next/image"
import { Title } from "components"

export default function Contact() {
  return (
    <section id="contact" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div>
          <Title title="Contact" className="p-[50px]" />
        </div>
        <div className="container my-auto mt-[30px]">
          <div className="flex items-cemter align-center justify-between">
            <div className="">
              <Image
                src="/assets/images/Contact.svg"
                width="700"
                height="700"
              />
            </div>
            <div className="p-10 m-auto">
              <div className="flex gap-x-[1rem]">
                <i className="ri-mail-line h2"></i>
                <h2 className="h2">joren.bagadiong14@gmail.com</h2>
              </div>
              <div className="flex gap-x-[1rem]">
                <i className="ri-phone-line h2"></i>
                <h2 className="h2">+63 915 395 4186</h2>
              </div>
              <div className="flex gap-x-[1rem]">
                <i class="ri-map-pin-line h2"></i>
                <h2 className="h2">Tanza, Cavite, Philippines</h2>
              </div>
              <div className="flex flex-col gap-y-[10px] mt-[20px]">
                <h2 className="h2">Contact me</h2>
                <input type="text" placeholder="Your Name / Company" />
                <input type="text" placeholder="Your Email" />
                <textarea rows="5" placeholder="Message"></textarea>
                <div className="transition-all duration-200 p-[5px] gradient rounded-[10px] cursor-pointer hover:drop-shadow-lg">
                  <div className="p-[5px] bg-white px-[30px] rounded-[5px] text-center cursor-pointer">
                    <span className="font-bold text-[20px] cursor-pointer gradientText">
                      Send Email
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
