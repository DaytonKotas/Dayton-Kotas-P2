import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import WonderfulFrogs from "../blogPosts/WonderfulFrogs"
import WonderfulToads from "../blogPosts/WonderfulToads"

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  background-color: #52734d;
`

const Header = styled.h1`
  color: #2c3e50;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: block;
  background: #8b5e3c;
  color: #2c3e50;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8c99b;
  }
`

const ImageContainer = styled.div`
  margin-top: 20px;
`

const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "FrogInWater.jpg" }) {
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
        <title>Home Page</title>
        <Header>Welcome to My Blog about Frogs and Toads</Header>
        <WonderfulFrogs />
        <WonderfulToads />
        <StyledLink to="/differences">
          Learn about the differences between frogs and toads
        </StyledLink>
        <StyledLink to="/locations">
          Discover where to find frogs and toads
        </StyledLink>
        <StyledLink to="/donate">Make a Donation</StyledLink>
        <StyledLink to="/quiz">Take the Frogs and Toads Quiz</StyledLink>
        <ImageContainer>
          <GatsbyImage image={image} alt="Frog in Water" />
        </ImageContainer>
      </MainContainer>
    </>
  )
}

export default IndexPage
