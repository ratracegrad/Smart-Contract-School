import React from "react"
import { Helmet } from "react-helmet"

import challengeLottie from "../../assets/animated_illustrations/challenge.json"
import useFetchData from '../../hooks/useFetchData.js'
import Hero from "../dashboard/Hero"
import SkeletonChallengeCard from "../skeletons/SkeletonChallengeCard"

import ChallengeCard from "./ChallengeCard"

const ChallengesList = () => {
  const { data, loading } = useFetchData('/challenges');

  return (
    <main className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Helmet>
        <title>SMART CONTRACTS SCHOOL Challenges- Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="Here are some handcrafted challenges for you. Keep Coding! 👨‍💻"
        subTitle="Today is a great day to start a new challenge 🧑‍💻"
        mainImg={challengeLottie}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
        lottie
      />
      <h2 className="mt-16 text-5xl text-center text-white font-extrabold font-heading lg:text-6xl xl:text-7xl">
        All Challenges
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {!loading
          ? data.map((challenge) => {
              return (
                <ChallengeCard
                  key={challenge.challenge_id}
                  challenge={challenge}
                  challengelist="http://localhost:5000"
                  btnTitle="View Challenge"
                />
              )
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonChallengeCard key={n} />)}
      </div>
    </main>
  )
}

export default ChallengesList
