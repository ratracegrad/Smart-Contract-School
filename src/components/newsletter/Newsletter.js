import React from "react"

import { Widget } from "@typeform/embed-react"

const Newsletter = () => {
  return (
    <div className="mx-auto max-w-7xl mt-16 pb-16 2xl:rounded-b-2xl">
      <Widget
      id={process.env.REACT_APP_FORM_ID}
      className="w-full"
      height="600"
    />
    </div>
  )
}

export default Newsletter
