import React from "react"
import styled from "styled-components"

const Post = styled.article`
  margin: 20px auto;
  padding: 20px;
  max-width: 100%; // adapts to the width of smaller devices
  background-color: #8b5e3c;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    // Styles apply for screens wider than 768px
    max-width: 600px; // limits width on larger screens
  }
`

const PostTitle = styled.h1`
  font-size: 24px;
  color: #d8c99b;
`

const WonderfulToads = () => {
  return (
    <Post>
      <PostTitle>Wonderful Toads</PostTitle>
      <p>
        Toads have dry, bumpy skin and prefer drier climates compared to frogs.
        This post delves into the fascinating world of toads and their unique
        adaptations.
      </p>
    </Post>
  )
}

export default WonderfulToads
