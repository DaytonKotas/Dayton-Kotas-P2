import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  background-color: #52734d; // Consistent earthy green background
`

const Header = styled.h1`
  color: #2c3e50; // Consistent dark blue header
  text-align: center;
`

const StyledLink = styled(Link)`
  display: block;
  background-color: #8b5e3c; // Consistent mud brown
  color: white;
  text-align: center;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8c99b; // Sand yellow on hover
  }
`

const ImageContainer = styled.div`
  margin-top: 20px;
`

const ThanksPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "HappyFrog.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = getImage(imageData.file.childImageSharp.gatsbyImageData)

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>Thank You for Your Donation!</Header>
        <p>
          Your support is greatly appreciated and will help protect frog and
          toad habitats.
        </p>
        <ImageContainer>
          <GatsbyImage image={image} alt="Happy Frog" />
        </ImageContainer>
        <StyledLink to="/">Return to Homepage</StyledLink>
      </MainContainer>
    </>
  )
}

export default ThanksPage
