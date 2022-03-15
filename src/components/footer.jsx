import React from 'react'
import '../styles/footer.css'
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

const footer = () => {
  return (
    <div>
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
                  style={{ color: '#f50057' }}
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
                <Link className='linkedin' className='linkedin' to='#'>
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
    </div>
  )
}

export default footer
