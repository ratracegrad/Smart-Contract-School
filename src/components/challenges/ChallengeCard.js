import React from "react"
import { Image, Placeholder } from "cloudinary-react"
import { Link } from "react-router-dom"

import Badge from "../reusable/Badge"

import DifficultyBar from "./DifficultyBar"

const ChallengeCard = ({ challenge, challengelist, btnTitle }) => {
  const link = challengelist ? "/challenge/" + challenge.challenge_id : "/submit/" + challenge.challenge_id
  return (
    <div className="flex flex-col bg-white overflow-hidden rounded-md max-w-sm transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102">
      <Image
        className="max-h-50"
        cloudName="ratracegrad"
        alt={challenge.image_alt}
        loading="lazy"
        public-id={challenge.image_url}
      >
        <Placeholder type="pixelate" />
      </Image>
      <div className="p-4 pb-2">
        <Badge name={challenge.difficulty} badgeColor="text-indigo-50 bg-indigo-500" />
      </div>
      <div className="flex-1 mb-4 card-content">
        <h3 className="font-semibold font-heading text-2xl text-indigo-700 px-4 leading-6 cursor-pointer">
          {challenge.title}
        </h3>
        <p className="text-base text-gray-400 px-4 py-4">{challenge.descrShort}</p>
      </div>
      <DifficultyBar difficultyLevel={challenge.difficulty} />
      <Link
        to={link}
        className="block rounded-t-none mt-4 w-full bg-indigo-700 text-white font-semibold font-heading text-lg text-center px-5 py-5"
        title={`This is a link to ${challenge.title} challenge detail page`}
      >
        {btnTitle}
      </Link>
    </div>
  )
}

export default ChallengeCard
