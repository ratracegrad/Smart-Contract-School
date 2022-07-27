import React from "react"
import { Image, Placeholder } from "cloudinary-react"

import Badge from "../reusable/Badge"

const ResourceCard = ({ resource }) => {
  return (
    <div className="flex flex-col bg-white overflow-hidden rounded-md max-w-sm transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102">
        <Image
        className=""
        cloudName="ratracegrad"
        alt={resource.image_alt}
        loading="lazy"
        public-id={resource.image_url}
      >
        <Placeholder type="pixelate" />
      </Image>
      
        <div className="p-4 pb-2">
          <Badge name={resource.category} badgeColor="text-indigo-50 bg-indigo-500" />
        </div>
        <div className="flex-1 mb-4 card-content">
          <h3 className="font-semibold font-heading text-2xl text-indigo-700 px-4 leading-6 cursor-pointer">
            {resource.title}
          </h3>
          <p className="text-base text-gray-400 px-4 py-2">{resource.descr}</p>
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-t-none mt-4 w-full bg-indigo-700 text-white font-semibold font-heading text-lg text-center px-5 py-5"
          aria-label={resource.title}
          title={`this is a link to ${resource.title} website`}
        >
          View Resource <i className="fas fa-external-link-alt ml-2"></i>
        </a>
    </div>
  )
}

export default ResourceCard
