import React from "react"

const Card = ({ name, info, image, gradient, color, lastClass }) => {
  return (
    <div
      className="bg-indigo-700 rounded-xl text-center px-5 py-8 max-w-sm h-96"
    >
      <i className={`${image} text-8xl text-white pb-3`}></i>
      <p className="py-5 text-2xl text-white font-bold">{name}</p>
      <p className="text-lg text-indigo-50">{info}</p>
    </div>
  )
}

export default Card
