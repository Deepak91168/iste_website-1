import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const About = styled.div`
  color: white;
  border: 2px solid rgba(108, 50, 224, 0.3);
  background-color: #14a098;
  border-radius: 10px;
  padding: 1rem 1rem;
  margin: 2rem 1rem;
  box-shadow: 0 40px 40px rgba(10, 10, 10, 0.6);
  h1 {
    color: #0f292f;
    margin: 1rem 0;
    text-align: center;
    justify-content: center;
  }

  .content {
    ${"" /* display: flex;
    flex-direction: row;
    justify-content: center; */}
    ${"" /* border: 2px solid blue; */}
    .Image {
      width: 50%;
      border: 1px solid rgba(108, 50, 224, 0.3);
      border-radius: 10px;
      margin: auto;
      box-shadow: 0 20px 20px rgba(10, 10, 10, 0.4);
    }
    .desc {
      color: white;
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px;
      p {
        margin-bottom: 10px;
        text-align: justify;
        justify-content: center;
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    width: 90%;
    margin: 2rem 5% 5%;

    h1 {
      color: white;
      margin: 0.5rem 0;
    }
    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .Image {
        margin: 2rem 0 0;
        width: 100%;
      }
      .desc {
        margin-top: 0;
      }
    }
  }
`;

export default function AboutUs() {
	const data = useStaticQuery(
		graphql`
      query {
        file(absolutePath: { regex: "/.*about/" }) {
          childMarkdownRemark {
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    `
	);

	const title = data.file.childMarkdownRemark.frontmatter.title;
	const html = data.file.childMarkdownRemark.html;
	const fluid =
    data.file.childMarkdownRemark.frontmatter.featuredImage.childImageSharp
    	.fluid;
	return (
		<About id="about">
			<div className="content">
				<h1>ABOUT US</h1>
				<div className="Image">
					<Img fluid={fluid} style={{ borderRadius: "10px" }} />
				</div>
				<div>
					<div
						className="desc"
						dangerouslySetInnerHTML={{ __html: html }}
					></div>
				</div>
			</div>
		</About>
	);
}
