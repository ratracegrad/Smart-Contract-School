import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"

import rocketLoader from "../../assets/animated_illustrations/loader.json"
import useFetchData from '../../hooks/useFetchData.js'
import Accordion from "../reusable/Accordion"
// import ContributorProfile from "../reusable/ContributorProfile"
import LottieAnimation from "../reusable/LottieAnimation"

// Components
import ChallengeHeader from "./ChallengeHeader"

const ChallengeDetails = () => {
  const { id } = useParams()
  const { data } = useFetchData(`/challenge/${id}`);

  if (!data)
    return (
      <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
        <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
      </div>
    )

  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Helmet>
        <title>{`${data.title} SMART CONTRACTS SCHOOL Challenge`}</title>
      </Helmet>
      <ChallengeHeader doc={data} />

      <div className="">
        <div className=" overflow-hidden rounded-lg mt-6 lg:mt-10 lg:mx-auto lg:max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold pb-2 text-indigo-500">
            About the Challenge
          </h2>
          <p className="text-gray-300">{data.descrLong}</p>
          <p className="text-gray-300 pt-4">
            You can use as many (or as few) tools, libraries, and frameworks as
            you&apos;d like. If you&apos;re trying to learn something new, this might be
            a great way to push yourself.
          </p>
          <h3 className="text-xl md:text-2xl font-heading font-bold pt-8 pb-2 text-indigo-500">
            Users should be able to:
          </h3>
          <ul className="text-gray-300 list-disc pl-5">
            {data.requirements && data.requirements.split(';').map((requirement, index) => (
              <li key={index} className="mb-2">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Accordion />
    </div>
  )
}

export default ChallengeDetails
