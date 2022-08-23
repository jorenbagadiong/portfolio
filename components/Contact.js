import React, { useRef } from "react"
import emailjs from "emailjs-com"
import Image from "next/image"

import { Title } from "components"

export default function Contact() {
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        (e) => {
          console.log(e)
          alert("Failed to send the message, please try again")
        }
      )
  }

  return (
    <section id="contact" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div>
          <Title title="Contact" className="p-[50px]" />
        </div>
        <div className="container my-auto mt-[10px]">
          <div className="flex justify-items-center items-center align-center justify-between">
            <div className="my-auto">
              <Image
                src="/assets/images/Contact.svg"
                width="600"
                height="600"
              />
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-[600px] m-auto">
                <div className="flex gap-x-[1rem]">
                  <i className="ri-mail-line h2"></i>
                  <h2 className="h2">joren.bagadiong14@gmail.com</h2>
                </div>
                <div className="flex gap-x-[1rem]">
                  <i className="ri-phone-line h2"></i>
                  <h2 className="h2">+63 915 395 4186</h2>
                </div>
                <div className="flex gap-x-[1rem]">
                  <i className="ri-map-pin-line h2"></i>
                  <h2 className="h2">Tanza, Cavite, Philippines</h2>
                </div>
                <div className="flex flex-col gap-y-[10px] mt-[20px]">
                  <h2 className="h2">Contact me</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name / Company"
                  />
                  <input type="text" name="email" placeholder="Your Email" />
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <div className="flex justify-end">
                    {/* <div className="w-[200px] transition-all duration-200 p-[5px] gradient rounded-[10px] cursor-pointer hover:drop-shadow-lg">
                      <div className="w-[190px] p-[5px] bg-white px-[30px] rounded-[5px] text-center cursor-pointer">
                        <span className="font-bold text-[20px] cursor-pointer gradientText">
                          Send Email
                        </span>
                      </div>
                    </div> */}
                    <button type="submit" className="gradientButton">
                      Send Email
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
