import React from "react"
import { Helmet } from "react-helmet"

import solutionLottie from "../../assets/animated_illustrations/solution_animation.json"
import useFetchData from '../../hooks/useFetchData.js'
import Hero from "../dashboard/Hero"
import SkeletonSolutionSummaryCard from "../skeletons/SkeletonSolutionSummaryCard"

import SolutionSummary from "./SolutionSummary"

const ShowSolutions = () => {
  const { data, loading } = useFetchData('/challenges');

  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Helmet>
        <title>All Community Solutions</title>
      </Helmet>
      <Hero
        title="What's stopping you from moving forward? All the solutions you need are right here!"
        subTitle="Welcome To Smart Contracts School"
        mainImg={solutionLottie}
        btnTitle="My Solutions "
        logoTitle="fas fa-arrow-right ml-2"
        route="/mysolutions"
        lottie
      />
      <h2 className="mt-16 text-5xl text-center text-white font-extrabold font-heading lg:text-6xl xl:text-7xl">
        Solutions
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {!loading
          ? data.map((solution) => {
              return <SolutionSummary key={solution.id} solution={solution} />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonSolutionSummaryCard key={n} />)}
      </div>
    </div>
  )
}

export default ShowSolutions
