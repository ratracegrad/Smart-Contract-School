import React, { Fragment } from "react"
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Logo from "../../assets/icons/logo.svg"
import LogoDark from "../../assets/icons/logoDark.svg"

import { useAuthContext } from "../../hooks/useAuthContext"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const navigation = [
	{ name: 'Home', href: '/' },
  { name: 'Challenges', href: '/challenges' },
  { name: 'Resources', href: '/resources' },
]

const Navbar = () => {
  const { user } = useAuthContext()
  const links = user ? (
    <SignedInLinks profile={user.photoURL} />
  ) : (
    <SignedOutLinks bgColor="bg-indigo-700 hover:bg-indigo-500" />
  )

  return (
		<>

			<div className="relative pt-6">
			<Popover>
				<nav
					className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
					aria-label="Global"
				>
					<div className="flex items-center flex-1">
						<div className="flex justify-between w-full md:w-auto">
							<a className="flex items-center" href="/">
								<span className="sr-only">SMART CONTRACTS SCHOOL</span>
								<img
									className="h-8 w-auto sm:h-10 mr-2"
									src={Logo}
									alt="Logo"
								/>
								<span className="text-white">SMART CONTRACTS SCHOOL</span>
							</a>
							<div className="-mr-4 flex items-center md:hidden">
								<Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="hidden space-x-10 md:flex md:ml-10">
							{navigation.map((item) => (
								<a key={item.name} href={item.href} className="font-medium text-white hover:text-indigo-500">
									{item.name}
								</a>
							))}
						</div>
					</div>
					<div className="hidden md:flex">
					<ul className="flex justify-end space-x-4 items-center">
						<li>{links}</li>
					</ul>
					</div>
				</nav>

				<Transition
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
					>
						<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
							<div className="px-5 pt-4 flex items-center justify-between">
								<div className="flex items-center">
									<img
										className="h-8 w-auto mr-2"
										src={LogoDark}
										alt="logo"
									/>
									<span className="text-indigo-700">SMART CONTRACTS SCHOOL</span>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							{!user && <div className="flex">
								<SignedOutLinks bgColor="bg-indigo-700 hover:bg-indigo-500" />
							</div>}
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
			</div>
		</>
		
	)
}

export default Navbar
