import React, { useEffect } from "react"
import styled from 'styled-components'
import ReactAnime from 'react-animejs'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import "aos/dist/aos.css";
import Aos from "aos";
import Layout from "../components/layout"
import Projects from "../components/projects"

import PhotoCarousel from '../components/carousel'
import AboutUs from '../components/about'
import SEO from '../components/seo'
import UpcomingEvent from '../components/upcoming_event'
import { ReactComponent as IsteLogo } from '../images/iste_logo_hollow.svg'
import Tagline from '../components/tagline'
import Footer from '../components/footer'

const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: color-interpolation-filters;
  ${'' /* margin-top:1vh; */}
  margin-bottom: 10vh;
  .text {
    margin: auto;
    color: white;
    grid-column: 2/3;
    grid-row: 2/3;
    font: Roboto;
    .name {
      display: flex;
      justify-content: center;
      margin: auto;
      font-style: normal;
      font-weight: normal;
      font-size: 5rem;
      color: white;
      text-align: center;
    }
  }

  .logo {
    grid-column-gap: 20px;
    grid-column: 2/3;
    padding-left: 5rem;
  }

  @media screen and (max-width: 1080px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    margin-top: 1rem;
    margin-bottom: 7rem;
    .text {
      grid-row: 2/4;
      grid-column: 1/2;
      .name {
        font-size: 5rem;
      }
      .name,
      .team {
        text-align: center;
      }
    }
    .logo {
      grid-row: 1/2;
      grid-column: 1/2;
      padding-left: 0rem;
      text-align: center;
      .img {
        height: 200px;
        width: 200px;
      }
    }
  }
`

const Carousel = styled.div`
  .carousel {
    margin-top: 30px;
  }
`
export default function IndexPage() {
  var ml4 = {}
  ml4.opacityIn = [0, 1]
  ml4.scaleIn = [0.2, 1]
  ml4.scaleOut = 3
  ml4.durationIn = 800
  ml4.durationOut = 600
  ml4.delay = 500

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <>
    <Layout>
    <SEO title="Home" />
    <LandingDiv>
      <div className='text'>
        <h1 className='name'>ISTE NITH</h1>
        <Tagline/>
      </div>
      <div className='logo'>
        <IsteLogo 
          className='img' 
          width='300px' 
          height='300px'
          />
      </div>
    </LandingDiv>
    {/* {/* <UpcomingEvent/> */}
    {/* <PhotoCarousel/> */}
    {/* <Projects/> */}
    


<div data-aos="zoom-in-up">
<Carousel>
      <PhotoCarousel/>

    </Carousel>
</div>


  
  
    

<div data-aos="flip-right">
<AboutUs/>
</div>



    </Layout>
    <Footer/>

    </>
  )
}
