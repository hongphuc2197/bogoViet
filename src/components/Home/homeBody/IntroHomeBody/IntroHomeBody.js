import React from "react"
import { dataHomepageTitle } from "../../../../data/dataHomepage"
import { NavLink } from "react-router-dom"
import "./IntroHomeBody.scss"

import img1 from "../../../../assets/images/homepage/home1.jpeg"
import img2 from "../../../../assets/images/homepage/home2.jpg"
import img3 from "../../../../assets/images/homepage/home3.jpg"

const IntroHomeBody = () => (
  <>
    <div className="container">
      <div className="home-news-grid box-home-2">
        <div className="content">
          <div className="items">
            <div className="row rowHome">
              <div className="col-md-6 col-sm-6">
                <div className="meta">
                  <h3>
                    <NavLink to="/">{dataHomepageTitle[0].title}</NavLink>
                  </h3>
                  <div className="description m-left">
                    <p>
                      <span style={{ fontSize: "16px" }}>
                        <span>{dataHomepageTitle[0].content[0]}</span>
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: "16px" }}>
                        <span>{dataHomepageTitle[0].content[1]}</span>
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: "16px" }}>
                        <span>{dataHomepageTitle[0].content[2]}</span>
                      </span>
                    </p>
                    <p style={{ textAlign: "center" }}> </p>
                    <p> </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <figure>
                  <NavLink to="/" className="banner-cubic-7">
                    <img
                      alt=""
                      className="lazy"
                      style={{ display: "inline" }}
                      src={img1}
                    />
                  </NavLink>
                </figure>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <figure>
                  <NavLink to="/" className="banner-cubic-7">
                    <img
                      alt=""
                      className="lazy"
                      style={{ display: "inline" }}
                      src={img2}
                    />
                  </NavLink>
                </figure>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="meta">
                  <h3>
                    <NavLink to="/">{dataHomepageTitle[1].title}</NavLink>
                  </h3>
                  <div className="description m-right">
                    <p>
                      <span style={{ fontSize: "16px" }}>
                        <span>{dataHomepageTitle[1].content[0]}</span>
                      </span>
                    </p>
                    <p>
                      <span style={{ fontSize: "16px" }}>
                        <span>{dataHomepageTitle[1].content[1]}</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-news-grid box-home-2">
        <div className="content">
          <div className="items">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="meta">
                  <h3>
                    <NavLink to="/franchise">
                      {dataHomepageTitle[2].title}
                    </NavLink>
                  </h3>
                  <div className="description m-left">
                    <p>
                      <span>
                        <span style={{ fontSize: "28px" }}>
                          {dataHomepageTitle[2].content}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="detail">
                    <NavLink to="/franchise">
                      {dataHomepageTitle[2].btn}
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <figure>
                  <NavLink to="/franchise" className="banner-cubic-7">
                    <img
                      alt=""
                      className="lazy"
                      style={{ display: "inline" }}
                      src={img3}
                    />
                  </NavLink>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IntroHomeBody
