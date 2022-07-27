import React from "react"
import Lottie from "react-lottie"
import { useNavigate } from "react-router-dom"

import { useAuthContext } from "../../hooks/useAuthContext"
import SignedOutLinks from "../layouts/SignedOutLinks"
import Button from "../reusable/Button"

const Hero = ({ homepage, title, subTitle, mainImg, btnTitle, logoTitle, route }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className="mt-6 md:mt-2 mb-8">
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-indigo-700 rounded-xl xs:px-5 md:px-8 py-4 xs:max-h-screen sm:max-h-96 shadow-md xs:flex-wrap-reverse sm:flex-nowrap">
        <div>
          <h1 className="text-white xs:text-2xl sm:text-xl md:text-2xl lg:text-4xl font-semibold font-heading pb-4 sm:max-w-xs max-w-sm">
            {title}
          </h1>
          {user ? (
            <Button bgColor="bg-gray-900" handleClick={() => navigate(route)}>
              {btnTitle} <i className={logoTitle}></i>
            </Button>
          ) : (
            <SignedOutLinks bgColor="bg-gray-900" />
          )}
        </div>
        <div className="xs:h-56 xs:w-72 sm:h-60 sm:w-96 w-96 md:h-72 lg:h-80">
          <Lottie options={defaultOptions} />
        </div>
      </header>
    </div>
  )
}

export default Hero
