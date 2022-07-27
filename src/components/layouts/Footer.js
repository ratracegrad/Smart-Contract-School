import React from "react"

import Logo from "../../assets/icons/logo.svg"

const Footer = () => {
  return (
    <footer className="flex justify-between mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl bg-gray-800 border-t border-gray-800 text-gray-300 h-20">
      <h4 className="flex items-center space-x-1">
        <img
          className="h-8 w-auto sm:h-10 mr-2"
          src={Logo}
          alt=""
        />
        <span>SMART CONTRACTS SCHOOL</span>
      </h4>
      <span className="xs:py-4 sm:py-0">
        Created for the <span className="text-indigo-500">#PlantScale and #Hashnode Hackathon</span>
      </span>
    </footer>
  )
}

export default Footer
