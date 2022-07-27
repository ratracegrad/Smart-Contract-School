import { useAuthContext } from "../../hooks/useAuthContext"

import SignedOutLinks from "../layouts/SignedOutLinks"

export default function HomeHero() {
  const { user } = useAuthContext()

  return (
    <div className="mx-auto max-w-7xl mt-16 mb-16 2xl:rounded-b-2xl">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 text-center">
        <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
              <span className="block">The School for</span>{' '}
              <span className="text-indigo-400 md:block">Smart Contracts</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Improve your Smart Contract coding skills by building real projects. Pick a challenge
            and build your solution. Share your solution with others. Search for other solutions
            to the same challenge if you need help.
            </p>
            {!user &&
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              <SignedOutLinks bgColor="bg-indigo-700 hover:bg-indigo-500" />
              </p>
    }
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <img
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
              alt=""
            />
        </div>
      </div>
    </div>
  )
}
