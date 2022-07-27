import React from "react"

import useFetchData from '../../hooks/useFetchData.js'
import SkeletonChallengeCard from "../skeletons/SkeletonChallengeCard"

import ChallengeCard from "./ChallengeCard"

const Challenges = () => {
  const { data, loading } = useFetchData('/challenges');

  return (
    <main className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <h2 className="text-5xl text-center text-white font-extrabold font-heading lg:text-6xl xl:text-7xl">
        Latest Challenges
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-12">
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

export default Challenges
