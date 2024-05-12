import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  background-color: #52734d; // Earthy green background
`

const Header = styled.h1`
  color: #2c3e50; // Dark blue header
  text-align: center;
`

const StyledLink = styled(Link)`
  display: block;
  background: #8b5e3c; // Mud brown
  color: #2c3e50; // Text color dark blue
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8c99b; // Sand yellow on hover
  }
`

const ImageContainer = styled.div`
  margin-top: 20px;
`

const DifferencesPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "FrogVToad.jpg" }) {
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
        <Header>Differences Between Frogs and Toads</Header>
        <ul>
          <li>
            <strong>Skin:</strong> Frogs have moist, smooth skin. Toads have
            dry, bumpy skin.
          </li>
          <li>
            <strong>Habitat:</strong> Frogs need to live near water; toads can
            survive in drier conditions.
          </li>
          <li>
            <strong>Behavior:</strong> Frogs are mostly aquatic; toads are more
            terrestrial.
          </li>
        </ul>
        <ImageContainer>
          <GatsbyImage image={image} alt="Comparison between Frog and Toad" />
        </ImageContainer>
        <StyledLink to="/">Go back to the homepage</StyledLink>
      </MainContainer>
    </>
  )
}

export default DifferencesPage
