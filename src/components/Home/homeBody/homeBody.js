import React from "react"
import "./_homeBody.scss"
import IntroHomeBody from "./IntroHomeBody/IntroHomeBody"
import StoreBoGo from "./StoreBoGo/StoreBoGo"
const HomeBody = props => {
  return (
    <>
      <section id="columns" className="columns-home bg-home">
        <IntroHomeBody />
        <StoreBoGo />
      </section>
    </>
  )
}

export default HomeBody
