import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const SolutionSummary = ({ solution }) => {
  return (
    <div className="max-w-sm h-auto rounded-md overflow-hidden shadow-2xl transform transition duration-300 ease-in-out hover:shadow-primary hover:scale-102">
      <div className="solution-card flex flex-col justify-between bg-gray-800">
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2 text-white">{solution.title}</div>
        </div>
        <div>
          <div className="flex items-center px-6 pb-3">
            <div className="flex flex-col pl-1">
              <span className="text-navItem text-sm text-gray-300">
                {solution.username}
              </span>
              <span className="text-navItem text-xs text-gray-400">
                {moment(solution.created_at.toDate()).fromNow()}
              </span>
            </div>
          </div>
          <Link
            to={"/solution/" + solution.id}
            className="block rounded-t-none w-full bg-secondary text-white text-lg text-center px-5 py-4"
            aria-label={`${solution.title} website details page`}
            title={`Link to ${solution.title} details page`}
          >
            View Solution
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SolutionSummary
