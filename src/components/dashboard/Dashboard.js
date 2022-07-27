import React from "react"

import Challenges from "../challenges/Challenges"
import Newsletter from "../newsletter/Newsletter"

import HomeHero from "./HomeHero"
import HowItWorks from "./HowItWorks"

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <HomeHero/>
      <HowItWorks />
      <Challenges />
      <Newsletter />
    </div>
  )
}

export default Dashboard
