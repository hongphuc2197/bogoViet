import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { dataStoreBoGo } from "../../../../data/dataHomepage"
import { NavLink } from "react-router-dom"
import "./StoreBoGo.scss"
import img1 from "../../../../assets/images/homepage/store.jpg"
import img2 from "../../../../assets/images/homepage/store.jpg"
import img3 from "../../../../assets/images/homepage/store.jpg"
import img4 from "../../../../assets/images/homepage/store.jpg"
import img5 from "../../../../assets/images/homepage/store.jpg"

const A = [img1, img2, img3, img4, img5]

const opptions = {
  autoPlay: true,
  autoPlayInterval: 5000,
  buttonsDisabled: false,
  dotsDisabled:false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 4
    } // number of elements in the slide
  },
  stagePadding: {
    paddingLeft: 0, // in pixels
    paddingRight: 0
  },
  mouseDragEnabled: true,
  fadeOutAnimation: true,
}

const StoreBoGo = () => (
  <>
    <div className="box-project-slider">
      <div className="container">
        <h2 className="heading">
          <NavLink to="/">Hệ thống Bơ Gơ Viet</NavLink>
        </h2>
        <div className="contentCoverAlice">
          <AliceCarousel {...opptions}>
            {dataStoreBoGo.map((block, index) => (
              <div key={index} className="item">
                <figure>
                  <a className="banner-cubic-7" href="/">
                    <img
                      alt="Burger"
                      style={{ display: "inline" }}
                      src={img1}
                    />
                  </a>
                </figure>
                <div className="title">
                  <div className="name">
                    <a href="/">{block.name}</a>
                  </div>
                  <div className="s-desc">
                    <p>
                      <span>Địa chỉ: {block.address}</span>
                    </p>
                    <p>
                      <span>Điện thoại: {block.phhone}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  </>
)

export default StoreBoGo
