import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

// loader
import rocketLoader from "./assets/animated_illustrations/loader.json"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
// custom components
import LottieAnimation from "./components/reusable/LottieAnimation"
import ScrollToTop from "./components/reusable/ScrollToTop"
import { useAuthContext } from "./hooks/useAuthContext"

import "./App.css"

// lazy loading components
const Dashboard = React.lazy(() => import("./components/dashboard/Dashboard"))
const ChallengesList = React.lazy(() => import("./components/challenges/ChallengesList"))
const ChallengeDetails = React.lazy(() =>
  import("./components/challenges/ChallengeDetails")
)
const Resources = React.lazy(() => import("./components/resources/Resources"))
const SolutionList = React.lazy(() => import("./components/solutions/SolutionList"))
const MySolutions = React.lazy(() => import("./components/MySolutions/MySolutions"))

const App = () => {
  const { authIsReady, user } = useAuthContext()
  return authIsReady ? (
    <div className="relative  min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
            <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
          </div>
        }
      >
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/challenges" element={<ChallengesList />} />
            <Route path="/challenge/:id" element={<ChallengeDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/solutions" element={<SolutionList />} />
            <Route
              path="/mysolutions"
              element={user ? <MySolutions /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ScrollToTop>
      </Suspense>
      <Footer />
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
    </div>
  )
}

export default App
