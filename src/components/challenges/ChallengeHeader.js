import React from "react"
import { Image, Placeholder, Transformation } from "cloudinary-react"

import Badge from "../reusable/Badge"

const ChallengeHeader = ({ doc, button }) => {
  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <header className="mt-4 flex items-center xs:justify-center sm:justify-between bg-indigo-700 rounded-xl shadow-md xs:px-5 md:px-8 py-4 xs:h-full sm:max-h-96 xs:flex-wrap-reverse sm:flex-nowrap">
        <div className="xs:w-full sm:w-1/2">
          <h2 className="leading-snug xs:text-3xl lg:text-5xl text-white font-semibold font-heading pb-2">
            {doc.title}
          </h2>
          <div className="py-2">
            <Badge
              name={doc.difficulty}
              badgeColor="text-gray-300 bg-gray-900"
              challengeDetails
            />
          </div>
          <p className="text-base mb-4 xs:w-full sm:w-4/5 lg:w-3/5 text-gray-200">
            {doc.descrLong}
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-xl xs:h-auto xs:w-full sm:w-auto sm:h-64 md:h-72 lg:h-80 xs:mb-4 sm:mb-0"
            alt={doc.image_alt}
            cloudName="ratracegrad"
            public-id={doc.image_url}
          >
            <Placeholder type="pixelate" />
            <Transformation crop="fill" />
          </Image>
        </div>
      </header>
    </div>
  )
}

export default ChallengeHeader
