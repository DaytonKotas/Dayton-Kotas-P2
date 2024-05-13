import React from "react"
import { navigate, Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  background-color: #52734d; // Earthy green background
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`

const Input = styled.input`
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  background-color: #8b5e3c; // Mud brown
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #d8c99b; // Sand yellow on hover
  }
`

const StyledLink = styled(Link)`
  display: block;
  background-color: #8b5e3c; // Mud brown, same as Button
  color: white; // Text color
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

const DonatePage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "VietnameseMossyFrog.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const image = getImage(imageData.file.childImageSharp.gatsbyImageData)

  const handleSubmit = event => {
    event.preventDefault()
    navigate("/thanks")
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <h1>Support Our Cause</h1>
        <p>
          Help us protect the natural habitats of frogs and toads around the
          world. Your donation can make a big difference!
        </p>
        <Form onSubmit={handleSubmit}>
          <label>
            Donation Amount ($):
            <Input type="number" name="amount" min="5" placeholder="10" />
          </label>
          <Button type="submit">Donate</Button>
        </Form>
        <ImageContainer>
          <GatsbyImage image={image} alt="Vietnamese Mossy Frog" />
        </ImageContainer>
        <StyledLink to="/">Go back to the homepage</StyledLink>
      </MainContainer>
    </>
  )
}

export default DonatePage
