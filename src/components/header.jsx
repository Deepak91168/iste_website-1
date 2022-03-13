import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  transition: 0.2s;
  &:hover {
    color: #f50057;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ zIndex: 999 }} className='Navbar'>
      <span className='nav-logo'>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
          ISTE-NITH{' '}
        </Link>
      </span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <StyledLink
          to='/'
          activeClassName='active'
          activeStyle={{ fontWeight: 'bold', color: '#f50057' }}
        >
          Home
        </StyledLink>
        <StyledLink
          to='/projects/'
          activeClassName='active'
          activeStyle={{ fontWeight: 'bold', color: '#f50057' }}
        >
          Blog
        </StyledLink>
        <StyledLink
          to='/events/'
          activeClassName='active'
          activeStyle={{ fontWeight: 'bold', color: '#f50057' }}
        >
          Events
        </StyledLink>
        <StyledLink
          to='/#about'
          activeClassName='active'
          activeStyle={{ fontWeight: 'bold', color: '#f50057' }}
        >
          About
        </StyledLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bar'></div>
      </div>
    </div>
  )
}

export default Navbar
