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

const WonderfulFrogs = () => {
  return (
    <Post>
      <PostTitle>Wonderful Frogs</PostTitle>
      <p>
        Frogs are fascinating creatures found worldwide. They vary in size from
        the tiny 0.1-inch Paedophryne amauensis to the enormous Goliath frog
        which can be over a foot long...
      </p>
    </Post>
  )
}

export default WonderfulFrogs
