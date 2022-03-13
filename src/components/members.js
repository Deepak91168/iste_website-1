import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import iste_logo from "../images/albert.jpeg"
import Roll from 'react-reveal/Roll';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

`

const Img = styled(Image)`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  margin: 20px 20px 10px 20px;
`
const Member_Card = styled.div``

const Img_Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
`
const Flex = styled.div`
  width: 100%;
  ${'' /* display: flex; */}
  max-width:1920px;
  @media screen and (max-width:1177px){
    display:block!important;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .year {
    height: 100%;
    weight: 100%;
    font-size: 10vh;
    margin-bottom:20px;
    @media screen and (min-width:790px){
      position: fixed;
      top: 50%;
      left: 0;
    }
    h1 {
      margin: 0;
      color: white;
      padding: 0;
      width:100%;
      text-align: center;
      @media screen and (min-width:790px){
        transform: rotate(-90deg);
      }
    }
  }
  .left-container {
    background-color: rgba(196, 196, 196, 0.14);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    width: 50%;
    text-align: center;
    height: 77vh;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 30px;
    ${'' /* border: 1px solid white; */}
    box-shadow: 2px 20px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    @media screen and (min-width:1177px){
      justify-content: space-around;
    }
    @media screen and (max-width:1177px){
      width:100%;
      height: 250px;
      display:flex;
      flex-wrap:nowrap;
      border-radius: 15px 15px 0 0;
      ${'' /* overflow: hidden; */}
      overflow-x: scroll;
    }
  }
  .right-container {
    @media screen and (min-width:1178px){
      position: fixed;
      width: 50%;
      top: 8vh;
      right: 0;
    }
    @media screen and (max-width:1177px){
      display:flex;
    }
    .Info{
      position:relative;
      left:20%;
      width:80%;
      @media screen and (max-width:1177px){
        left:0;
        width:100%;
      }
      .selected_member{
        padding:80px 80px 80px;
        width: 100%;
        border-radius: 40px 0px 40px 40px;
        width:100%;
        background:black;
        text-align:center;
        background: rgb(0, 41, 107);
        mix-blend-mode: darken;
        box-shadow: 8px 8px 20px 5px rgba(0, 0, 0, 0.5);
        @media screen and (max-width:1177px){
          margin-top:10vw;
          border-radius: 0px 0px 15px 15px;
          box-shadow: none;
          display:flex;
          padding:4vw 2vw;
        }
        h1{
          color: rgb(189, 189, 189);
          font-size: 2.5vw;
          @media screen and (max-width:1177px){
            font-size:4vw;
          }
        }
        h3{
          color: #E52E71;
          font-size: 1.5vw;
          @media screen and (max-width:1177px){
            font-size:3vw;
          }
        }
        .before1177{
          @media screen and (max-width:1177px){
            width:50%;
            text-align:left;
          }
        }
        .after1177{
          flex:none;
          width:50%;
          display:none;
          @media screen and (max-width:1177px){
            display:block;
            text-align:right;
          }
        }
      }
      .selected_member_desc{
        top:130px;
        background-color:#120606;
        box-shadow: 10px 8px 20px 5px rgba(0, 0, 0, 0.5);
        position:relative;
        width:80%;
        border-radius:30px 0 30px 30px;
        left:20%;
        display:flex;
        .selected_member_img{
          position:absolute;
          top:0px;
          left:0px;
          transform:translate(-50%,-50%);
          img{
            border-radius:100%;
            margin:0;
            height:15vw;
            width:15vw;
            box-shadow: 10px 50px 50px 10px rgba(0, 0, 0, 0.25);
          }
        }
        .social_handle{
          flex:none;
          border-radius:30px 0 0 30px;
          padding:20px 30px;
          background: #E52E71;
          width:20%;
          width:fit-content;
          .social_links{
            height:max-content;
            margin-top: 250px;
          }
        }
        .description{
          flex:none;
          width:80%;
          .Branch{
            margin:40px 20px 40px 40px;
            text-align:right;
            h3{
              color:#E52E71;
            }
            @media screen and (max-width:1105px){
              margin-right:30px;
            }
          }
          .desc{
            p{
              width:80%;
              color:#fff;
              margin:auto;
              margin-top:100px;
              text-align:justify;
              font-weight:light;
              font-size:1.25rem;
            }
          }
          .location{
            margin:40px 10px 40px 10px;
          }
          .area, .State{
            color:#fff;
            text-align:right;
          }
        }
      }
    }
  }
}
`

export default function Members() {
  const data = useStaticQuery(graphql`
    query {
      allMembersXlsxSheet1(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      allMembersXlsxSheet2(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            image_link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            branch
            city
            state
            about
          }
        }
      }

      allMembersXlsxSheet3(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      allMembersXlsxSheet4(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            description
            link
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const onFocus = {
    filter: "blur(10px)",
    opacity: 0.5,
    transition:'0.3s ease-in-out',
  }

  const [name, setName] = useState("Albert Sharma")
  const [desc, setDesc] = useState("Executive Member")
  const [img, setImg] = useState(iste_logo)
  const [linkedin, setLinkedin] = useState("")
  const [branch, setBranch] = useState("Mathematics and Scientific Computing")
  const [city, setCity] = useState("Bilaspur")
  const [state, setState] = useState("Himanchal Pradesh")
  const [about, setAbout] = useState(
    "Hamara PR ka banda. Bahut Source hai iske"
  )
  const [key, setKey] = useState(-1)

  const [mouse, setMouse] = useState({})
  function ReadName(event) {
    var Name = event.currentTarget.getAttribute("data-name")
    var Desc = event.currentTarget.getAttribute("data-description")
    var Linkedin = event.currentTarget.getAttribute("data-linkedin")
    var Img = event.currentTarget.getAttribute("data-img")
    var Branch = event.currentTarget.getAttribute("data-branch")
    var City = event.currentTarget.getAttribute("data-city")
    var State = event.currentTarget.getAttribute("data-state")
    var About = event.currentTarget.getAttribute("data-about")
    var key = event.currentTarget.getAttribute("data-key")
    console.log(Branch, Img, City, State, About)
    setName(Name)
    setDesc(Desc)
    setLinkedin(Linkedin)
    setImg("https://drive.google.com/thumbnail?id=" + Img)
    setBranch(Branch)
    setCity(City)
    setState(State)
    setAbout(About)
    setKey(key)
    console.log(branch, img, city, state, about)
    var key = event.currentTarget.getAttribute("data-key")
    setMouse(onFocus)
  }

  function mouseOut(event) {
    setMouse({})
    var key = event.currentTarget.getAttribute("data-key")
    console.log(key)
  }

  function Selected_member(props) {
    return (
     
      <div className="Info">
        <div className="selected_member">
          <div className="before1177">
            <div className="name">
              <h1>{props.name}</h1>
            </div>
            <div className="position">
              <h3>{props.desc}</h3>
            </div>
          </div>
          <div className="description after1177">
            <div className="Branch">
              <h3>{props.branch}</h3>
            </div>
            <div className="desc">
              <p>{props.about}</p>
            </div>
            <div className="location">
              <div className="area">{props.city}, </div>
              <div className="State">{props.state}</div>
            </div>
          </div>
        </div>
        <div className="selected_member_desc">
          <div className="selected_member_img">
            {" "}
            <img src={props.img} alt={props.name}></img>
          </div>
          <div className="social_handle">
            <div className="social_links">
              <div className="linkedin">
                <a href={props.linkedin}>
                  <Instagram />
                </a>
              </div>
              <div className="insta">
                <a href="https://www.instagram.com/teamistenith/?hl=en">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="Branch">
              <h3>{props.branch}</h3>
            </div>
            <div className="desc">
              <p>{props.about}</p>
            </div>
            <div className="location">
              <div className="area">{props.city}, </div>
              <div className="State">{props.state}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function Instagram(){
    return(
      <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    height="30px"
                    data-icon="linkedin"
                    class="svg-inline--fa fa-linkedin fa-w-14 fa-1x "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#fff"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
    )
  }


  function Linkedin(){
    return(
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        height="30px"
        data-icon="instagram"
        class="svg-inline--fa fa-instagram fa-w-14 fa-1x "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
      <path
        fill="#fff"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      ></path>
    </svg>
    )
  }
  const myContainer = useRef(null)

  useEffect(() => {
    console.log("myContainer..", myContainer.current.attributes.className)
  })

  return (
    <>
    
      <Flex>
        <div className="year">
          <h1>SECOND YEAR</h1>
        </div>
        <div className="left-container container">
        <Roll left>
          {data.allMembersXlsxSheet2.edges.map((row, i) => (
            i!=key?(<Member_Card
              className="Card"
              key={i}
              id={i}
              ref={myContainer}
              data-key={i}
              name={row.node.name}
              style={mouse}
              data-description={row.node.description}
              data-img={row.node.image_link}
              data-linkedin={row.node.link}
              data-name={row.node.name}
              data-branch={row.node.branch}
              data-city={row.node.city}
              data-state={row.node.state}
              data-about={row.node.about}
              onMouseOver={ReadName}
              onMouseOut={mouseOut}
            >
              <Img fluid={row.node.img.childImageSharp.fluid}></Img>
              <div className="content" style={{ color: "white" }}>
                <div className="name">{row.node.name}</div>
              </div>
              {/* </Link> */}
            </Member_Card>):(<Member_Card
              className="Card"
              key={i}
              id={i}
              ref={myContainer}
              data-key={i}
              style={{cursor:'pointer',transition:'0.3s ease-in-out',transform:'scale(1.0)'}}
              name={row.node.name}
              data-description={row.node.description}
              data-img={row.node.image_link}
              data-linkedin={row.node.link}
              data-name={row.node.name}
              data-branch={row.node.branch}
              data-city={row.node.city}
              data-state={row.node.state}
              data-about={row.node.about}
              onMouseOver={ReadName}
              onMouseOut={mouseOut}
            >
              <Img fluid={row.node.img.childImageSharp.fluid}></Img>
              <div className="content" style={{ color: "white" }}>
                <div className="name">{row.node.name}</div>
              </div>
              {/* </Link> */}
            </Member_Card>)
            
          ))}</Roll>
        </div> 
        <div className="right-container container">
          <Roll right>
          <Selected_member
            name={name}
            desc={desc}
            img={img}
            linkedin={linkedin}
            branch={branch}
            city={city}
            state={state}
            about={about}
          /></Roll>
        </div> 
        {/* </div> */}
      </Flex>
     
    </>
  )
}
