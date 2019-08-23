import React from "react"
import "./InfoContact.scss"
import { dataFooter } from "../../../data/dataFooter"

const InfoContact = () => {
  return (
    <section id="columns" className="columns-home">
      <div className="container">
        <article className="article">
          <div className="contacts content-background">
            <div className="row">
              <div className="col-md-12">
                <div className="maps" />
              </div>
              <div className="col-md-6">
                <h2 className="heading">Thông tin liên hệ</h2>
                <div className="contact-item">
                  <div className="box-companny">
                    <h2 className="title">
                      <span className="ctn">Bơ Gơ Viet</span>
                    </h2>
                    <div className="content">
                      <span className="label">
                        <strong>{dataFooter[0].title}</strong>{" "}
                        {dataFooter[0].content}
                      </span>
                      <span className="label">
                        <strong>{dataFooter[1].title}</strong>{" "}
                        <a href="tel:0907 251 087">{dataFooter[1].content}</a>{" "}
                      </span>
                      <span className="label">
                        <strong>{dataFooter[2].title}</strong>{" "}
                        <a href="mailto:bogoviet.vn@gmail.com">
                          {dataFooter[2].content}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="description" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-contact">
                  <h2 className="heading">Gửi thông tin</h2>
                  <div className="clearfix" />
                  <form
                    action="/contact-us.html"
                    method="post"
                    noValidate="novalidate"
                  >
                    {" "}
                    <div className="row">
                      <div className="text1 col-md-12 col-sm-12">
                        <span>*Họ tên:</span>
                        <input
                          className="text-box single-line"
                          id="Name"
                          name="Name"
                          type="text"
                        />
                      </div>
                      <div className="text1 col-md-12 col-xs-12">
                        <span>*Điện thoại:</span>
                        <input
                          className="text-box single-line"
                          id="Phone"
                          name="Phone"
                          type="text"
                        />
                      </div>
                      <div className="text1 col-md-12 col-sm-12">
                        <span>*Email:</span>
                        <input
                          className="text-box single-line"
                          data-val="true"
                          data-val-required="The Email field is required."
                          id="Email"
                          name="Email"
                          type="email"
                        />
                      </div>
                      <div className="text1 col-md-12 col-xs-12">
                        <span>*Tiêu đề:</span>
                        <input
                          className="text-box single-line"
                          data-val="true"
                          data-val-required="The Subject field is required."
                          id="Subject"
                          name="Subject"
                          type="text"
                        />
                      </div>
                      <div className="context-c1 col-md-12 col-xs-12">
                        <span>*Nội dung:</span>
                        <textarea cols="20" id="Body" name="Body" rows="2" />
                      </div>
                    </div>
                    <div className="contact-submit">
                      <button type="submit" className="bt-submit" id="">
                        <i className="vns-genius" /> Gửi yêu cầu
                      </button>
                      <button type="button" className="bt-clear">
                        <i className="vns-refresh-2" /> Làm lại
                      </button>
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default InfoContact
