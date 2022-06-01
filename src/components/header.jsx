import React, { useState } from 'react'
import '../styles/header.css'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import Fade from 'react-reveal/Fade'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ISTE_Logo from '../images/iste_logo_hollow.svg'
import Bounce from 'react-reveal/Bounce'

const StyledLink = styled(Link)`
  width: 80%;
  font-size: 1.8vw;
  text-decoration: none;
  color: white;
  padding: 1.8%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border-radius: 10px 10px 0px 0px;
  /* border: 1px solid white; */
  /* border:1px solid white; */
  @media screen and (max-width:1356px){
    font-size:40px;
  }
  &::before {
    /* position: absolute;
    content: ' ';
    z-index: -1;
    width: 25%;
    top: 50%;
    left: -15%;
    height: 1px;
    /* background:#161516; */
    /* background: #E05215; */
    background: rgba(108, 50, 224, 0.3);
    transition: all 0.3s ease; */
  }

  &:hover:before {
    left: -10%;
  }
  transition: 0.2s;
  &:hover {
    /* background: #E0521550; */
    /* background:#161516; */
    background: rgba(22, 21, 22, 0.8);
    border-bottom: 0.5px solid rgba(108, 50, 224, 0.6);
    color: #fff;
  }
`
const Navmenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`
const Menu = styled.div`
  font-size: 1vw;
  width: 40vw;
  height: 100vh;
  left:0;
  z-index: 99;
  /* border: 2px solid white; */
  background-color: rgba(22, 21, 22, 0.7);
  backdrop-filter: blur(10px);
  /* box-shadow: 0 30px 40px rgba(0,0,0,1); */
  @media screen and (max-width:700px){  
    width: 100vw;
  }
  ul {
    text-align: center;
    padding-top: 25vh;
  }
`
const Menuburger = styled.div`
  position:absolute;
  right:0;
  @media screen and (min-width:699px){  
    display:none;
  }
`

const SocialLinks = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  width: 100%;
  bottom: 0;
  transform: translate(-50%, 0);
  div {
    flex: none;
    margin: auto 1%;
    svg {
      width: 2.5vw;
      height: 2.5vw;
      @media screen and (max-width:1356px){  
        width: 43px;
        height: 43px;
      }
    }
  }
`
const Img = styled.img`
  margin: 4%;
  width: 100px;
  position: absolute;
`

const ImgLogo = styled.img`
margin:2%;
z-index:100;
width: 100px;
left:0;
top:0;
position: fixed;
`

const ExtraForClose = styled.div`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
z-index:-1;
`

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  function clicked() {
    setOpen(!isOpen)
  }

  const ToggleNav = () => {
    return (
      <>
        <ExtraForClose onClick={clicked}></ExtraForClose>
        <Menu>
          <Fade bottom delay={900}>
            <Menuburger>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color={'white'}
                direction={'right'}
              />
            </Menuburger>
            <div>
              <Img src={ISTE_Logo} />
            </div>
          </Fade>
          <ul>
            <Bounce right delay={100}>
              <StyledLink
                to='/'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: 'rgba(108, 50, 224, 0.7)' }}
              >
                Home
              </StyledLink>
            </Bounce>
            <Bounce right delay={120}>
              <StyledLink
                to='/projects'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: 'rgba(108, 50, 224, 0.7)' }}
              >
                Blog
              </StyledLink>
            </Bounce>
            <Bounce right delay={140}>
              <StyledLink
                to='/events'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: 'rgba(108, 50, 224, 0.7)' }}
              >
                Events
              </StyledLink>
            </Bounce>
            {/* <Bounce right delay={160}>
              <StyledLink
                to='/activites'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: '#E05215' }}
              >
                Activites
              </StyledLink>
            </Bounce> */}
            <Bounce right delay={180}>
              <StyledLink
                to='/members'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: 'rgba(108, 50, 224, 0.7)' }}
              >
                Members
              </StyledLink>
            </Bounce>
            <Bounce right delay={220}>
              <StyledLink
                to='/#about'
                activeClassName='active'
                activeStyle={{ fontWeight: 'bold', color: 'rgba(108, 50, 224, 0.7)' }}
              >
                About
              </StyledLink>
            </Bounce>
          </ul>
          <SocialLinks>
            <div>
              <Fade left delay={1400}>
                <InstagramIcon style={{ color: 'white' }} />
              </Fade>
            </div>
            <div>
              <Fade left delay={1200}>
                <FacebookIcon style={{ color: 'white' }} />
              </Fade>
            </div>
            <div>
              <Fade left delay={1000}>
                <LinkedInIcon style={{ color: 'white' }} />
              </Fade>
            </div>
          </SocialLinks>
        </Menu>
      </>
    )
  }

  return (
    <div className='Navbar' style={{ zIndex: '+1000' }}>
      <span className='nav-logo'>
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
          {!isOpen ? <ImgLogo src={ISTE_Logo} /> : <></>}
        </Link>
      </span>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={'white'}
        direction={'right'}
      />
      <Navmenu>{isOpen ? <ToggleNav /> : <></>}</Navmenu>
    </div>
  )
}

export default Navbar
