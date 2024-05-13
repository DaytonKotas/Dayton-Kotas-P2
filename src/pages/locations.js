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

const LocationsPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "FrogBySpawn.jpg" }) {
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
        <Header>Where to Find Frogs and Toads</Header>
        <p>
          This page provides information on where you can commonly find various
          species of frogs and toads around the world.
        </p>
        <ul>
          <li>
            <strong>Frogs:</strong> Typically found near lakes, rivers, and
            wetlands.
          </li>
          <li>
            <strong>Toads:</strong> Often found in gardens, forests, and on
            farmland.
          </li>
        </ul>
        <ImageContainer>
          <GatsbyImage image={image} alt="Frogs by the Spawn" />
        </ImageContainer>
        <StyledLink to="/">Go back to the homepage</StyledLink>
      </MainContainer>
    </>
  )
}

export default LocationsPage
