import React from "react"
import { Helmet } from "react-helmet"

import mainImg from "../../assets/animated_illustrations/solution_animation.json"
import Hero from "../dashboard/Hero"

const MySolutions = () => {
  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Helmet>
        <title>My Solutions</title>
      </Helmet>
      <Hero
        title="Here you can find all the solutions and ongoing challenges details."
        subTitle="Welcome To Smart Contracts School"
        mainImg={mainImg}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
      />
    </div>
  )
}

export default MySolutions
