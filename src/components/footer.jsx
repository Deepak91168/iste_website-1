import React from 'react'
// import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = styled.div`
  .site-footer {
    background-color: #0F1117;
    padding: 20px 0 12px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
  }
  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .site-footer .social-icons {
    text-align: center;
    width: 28%;
    float: right;
    align-items: center;
  }

  .site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
    align-items: center;
  }

  .copyright-text {
    width: 28%;
    font-size: 23px;
    color: #fff;
    text-align: center;
    /* float: left; */
  }

  .site-footer .text {
    font-size: 18px;
    width: 100%;
    padding-left: 4%;
    padding-right: 4%;
    text-align: center;
    color: #d9d9d9;
  }

  @media (max-width: 991px) {
    .site-footer [class^='col-'] {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .row {
      display: block;
    }
    .site-footer .copyright-text {
      text-align: center;
      width: 100%;
      margin-left: 0;
    }
    .site-footer .copyright-text .text {
      font-size: 15px;
      width: auto;
      text-align: center;
    }
  }
  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }
  .social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px;
  }
  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.225s linear;
    -o-transition: all 0.225s linear;
    transition: all 0.225s linear;
  }
  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  .social-icons a.facebook:hover {
    background-color: #007bb6;
    transform: scale(1.1, 1.1);
  }
  .social-icons a.Youtube:hover {
    background-color: #ea4c89;
    transform: scale(1.1, 1.1);
  }
  .social-icons a.twitter:hover {
    background-color: #00aced;
    transform: scale(1.1, 1.1);
  }
  .social-icons a.linkedin:hover {
    transform: scale(1.1, 1.1);
    background-color: #007bb6;
  }
  .social-icons a.instagram:hover {
    background-color: #ea4c89;
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 767px) {
    .site-footer {
      background-color: #26272b;
      min-height: 110px;
      font-size: 15px;
      line-height: 24px;
      overflow: hidden;
      color: #737373;
      padding-bottom: 10px;
    }
    .site-footer .social-icons {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      padding-right: 20%;
      padding-left: 20%;
    }
  }
`

const footer = () => {
  return (
    <Footer>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='copyright-text'>
              © {new Date().getFullYear()}, ISTENITH{' '}
            </div>
            <p className='text'>
              Wanna talk to ISTE? Or be a part of it? You can contact any of our
              members personally or 📧 us at{' '}
              <strong>
                <a
                  style={{ color: '#E05215' }}
                  href='mailto:teamiste@gmail.com'
                >
                  teamiste@gmail.com
                </a>
              </strong>
              !
            </p>

            <ul className='social-icons'>
              <li>
                <Link
                  className='facebook'
                  to='https://www.facebook.com/teamistenith/'
                >
                  <FontAwesomeIcon icon={faFacebook} size='1x' />
                </Link>
              </li>
              <li>
                <Link className='twitter' to='https://twitter.com/istenith'>
                  <FontAwesomeIcon icon={faTwitter} size='1x' />
                </Link>
              </li>
              <li>
                <Link
                  className='instagram'
                  to='https://www.instagram.com/teamistenith/?hl=en'
                >
                  <FontAwesomeIcon icon={faInstagram} size='1x' />
                </Link>
              </li>
              <li>
                <Link className='linkedin'  to='#'>
                  <FontAwesomeIcon icon={faLinkedin} size='1x' />
                </Link>
              </li>
              <li>
                <Link
                  className='Youtube'
                  to='https://www.youtube.com/channel/UCIC-jhIbxXkcDxyQtJ3OKkQ'
                >
                  <FontAwesomeIcon icon={faYoutube} size='1x' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Footer>
  )
}

export default footer
