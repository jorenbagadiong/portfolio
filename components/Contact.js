import React, { useRef } from "react"
import Image from "next/image"
import emailjs from "emailjs-com"
import Notiflix from "notiflix"

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
          Notiflix.Notify.success("Successfully Email Send")
        },
        (e) => {
          Notiflix.Notify.failure("Failed to send email")
        }
      )
  }

  return (
    <section id="contact" className="my-[5rem] border-2 border-transparent">
      <div className="container mx-auto mt-[50px]">
        <div className="p-5 lg:p-0" data-aos="fade-right" data-aos-offset="550">
          <Title title="Contact" className="p-[50px]" />
        </div>
        <div className="container my-auto mt-[10px]">
          <div className="flex flex-col-reverse lg:flex-row items-center align-center justify-between">
            <div className="my-auto w-full">
              <Image
                src="/assets/images/Contact.svg"
                width="800"
                height="800"
              />
            </div>
            <div className="w-full m-auto p-5">
              <form ref={form} onSubmit={sendEmail}>
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
                  <div className="flex lg:justify-end">
                    <button type="submit" className="gradientButton">
                      Send Email
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
