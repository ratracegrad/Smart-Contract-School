import React from "react"
import { Helmet } from "react-helmet"

import ResourcesIll from "../../assets/animated_illustrations/resources.json"
import useFetchData from '../../hooks/useFetchData.js'
import Hero from "../dashboard/Hero"
import SkeletonResourceCard from "../skeletons/SkeletonResourceCard"

import ResourceCard from "./ResourceCard"

const Resources = () => {
  const { data, loading } = useFetchData('/resources');

  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Helmet>
        <title>Resources - Learn Material</title>
      </Helmet>
      <Hero
        title="Here you can find video, DAO, article and community resources."
        subTitle="Welcome To Smart Contracts School"
        mainImg={ResourcesIll}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
      />
      <h2 className="mt-16 text-5xl text-center text-white font-extrabold font-heading lg:text-6xl xl:text-7xl">
        Resources
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center mt-8">
        {!loading
          ? data.map((resource) => {
              return <ResourceCard key={resource.resource_id} resource={resource} />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonResourceCard key={n} />)}
      </div>
    </div>
  )
}

export default Resources
