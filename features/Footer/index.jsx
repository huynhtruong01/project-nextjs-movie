import React from 'react'
import PropTypes from 'prop-types'
import { BsArrowRight, BsFillTelephoneFill } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'
import { MdMail } from 'react-icons/md'

Footer.propTypes = {}

const product = ['Movies', 'TV Show', 'Videos']
const mediaGroup = ['Nice Studio', 'Nice News', 'Nice TV']
const siteMap = ['About', 'Careers', 'Press']

function Footer(props) {
  return (
    <div className="footer">
      <div className="flex">
        <div className="footer__left">
          <div className="footer__left--container">
            <div className="footer__logo">Watchflix</div>
            <p>
              Our website always produces good movies, with vivid images and sounds for viewers,
              hope you will like it.
            </p>
            <div className="footer__box">
              <input type="text" placeholder="Enter your email here" />
              <button>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right--container">
            <div className="footer__list flex">
              <div className="footer__item">
                <h3>Product</h3>
                <ul>
                  {product.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__item">
                <h3>Media Group</h3>
                <ul>
                  {mediaGroup.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__item">
                <h3>Sitemap</h3>
                <ul>
                  {siteMap.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__info flex">
              <div className="footer__info--item">
                <FiMapPin />
                <span>21, Le Van Viet, Tang Nhon Phu ward, Thu Duc city</span>
              </div>
              <div className="footer__info--item">
                <MdMail />
                <span>watchfilm@hello.com</span>
              </div>
              <div className="footer__info--item">
                <BsFillTelephoneFill />
                <span>+023498979554</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
