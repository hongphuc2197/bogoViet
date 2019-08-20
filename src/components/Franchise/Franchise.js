import React from "react"
import "./_Franchise.scss"
import Carousel from "../UI/Slider/Carousel"
import PageDetails from "../Franchise/PageDetails/PageDetails";

const Franchise = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <Carousel />
        <PageDetails/>
      </div>
    </>
  )
}

export default Franchise
