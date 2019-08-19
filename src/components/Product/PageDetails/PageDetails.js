import React from "react"
import "./_PageDetails.scss"
import { NavLink } from "react-router-dom"
import img1 from '../../../assets/images/product/chevron-right-solid.svg'
import img2 from '../../../assets/images/product/home-solid.svg'

const PageDetails = () => {
  return (
    <>
      <div className="container">
        <section id="breadcrumb">
          <ul className="breadcrumb pull-left">
            <li>
              <NavLink to="/">
                <img className="iconSVGProduct" src={img2}></img> Trang chủ
              </NavLink>
            </li>
            <li className="last">
              <span><img className="iconSVGProduct2" src={img1}></img> Sản phẩm</span>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default PageDetails
