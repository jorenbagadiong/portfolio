import React from "react"

const GoToTop = () => {
  
  const goToTop = () => {
    console.log("test")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className="gradient rounded-full w-[45px] h-[45px] flex items-center justify-center fixed bottom-5 right-1 cursor-pointer"
      onClick={goToTop}
    >
      <div className="bg-white rounded-full w-[35px] h-[35px] flex items-center justify-center cursor-pointer">
        <i className="ri-arrow-up-s-line gradientText text-[2rem] font-bold cursor-pointer"></i>
      </div>
    </div>
  )
}

export default GoToTop
