import React from "react"
import { NavLink } from "react-router-dom"
import "./_FranchiseBody.scss"

const FranchiseBody = () => {
  return (
    <>
      <article
        class="article"
        itemscope=""
      >
        <h1 class="title detail">
          <NavLink to="/">HỢP TÁC ĐẦU TƯ CAFFENÈ</NavLink>
        </h1>
        <div class="description">
          <p>
            <span style={{fontFamily:'tahoma,geneva,sans-serif'}}>
              <span style={{fontSize:'28px'}}>
                CHI PHÍ ĐẦU TƯ THẤP&nbsp;- THU HỒI VỐN NHANH
              </span>
            </span>
          </p>
          <p style={{textAlign:'center'}}>
            <img alt="" src="" />
          </p>
          <p style={{textAlign:'center'}}>
            <img alt="" src="" />
          </p>

          <p style={{textAlign:'center'}}>
            <img
              alt=""
              height="591"
              src=""
              width="1745"
            />
          </p>

          <p>&nbsp;</p>

          <p>
            <span style={{fontSize:'28px'}}>
              <span style={{ fontFamily: "verdana,geneva,sans-serif" }}>
                <u>
                  <strong>
                    <span style={{ color: "#FF0000" }}>
                      ĐĂNG KÝ NHƯỢNG QUYỀN :
                    </span>
                  </strong>
                </u>
              </span>
            </span>
          </p>

          <p>
            <span style={{fontSize:'28px'}}>
              <em>
                <NavLink to="/">
                  <span style={{color:'#0000FF'}}>
                    https://forms.gle/8gUm85DJZrVX4Ys47
                  </span>
                </NavLink>
              </em>
            </span>
          </p>
        </div>

        <div class="share-article btn-group">
          <div class="item">
            <NavLink to="#" id="facebook" title="Chía sẻ lên Facebook">
              <i class="fa fa-facebook" /> <span>Facebook</span>
            </NavLink>
          </div>
          <div class="item">
            <NavLink to="#" id="twitter" title="Chía sẻ lên Twitter">
              <i class="fa fa-twitter" /> <span>Twitter</span>
            </NavLink>
          </div>
          <div class="item">
            <NavLink to="#" id="google" title="Chía sẻ lên Google">
              <i class="fa fa-google" /> <span>Google</span>
            </NavLink>
          </div>
          <div class="item">
            <NavLink to="#" id="linkedin" title="Chía sẻ lên Linked In">
              <i class="fa fa-linkedin" /> <span>Linkedin</span>
            </NavLink>
          </div>
        </div>
        <div class="clearfix" />
        <h2 class="title">
          <NavLink to="#">Bài viết liên quan</NavLink>
        </h2>
        <div class="other-info">
          <ul>
            <li>
              <h4>
                <NavLink to="/" title="MÔ HÌNH COFFEE CART CAO CẤP - HIỆN ĐẠI">
                  <i class="fa fa-check" /> MÔ HÌNH COFFEE CART CAO CẤP - HIỆN
                  ĐẠI
                </NavLink>
              </h4>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default FranchiseBody
