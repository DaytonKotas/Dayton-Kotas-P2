import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
`

const Question = styled.h2`
  color: #333;
`

const Button = styled.button`
  background-color: #52734d;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
  }
`

const StyledLink = styled(Link)`
  display: block;
  background-color: #8b5e3c;
  color: white;
  text-align: center;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d8c99b;
  }
`

const Comment = styled.div`
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
`

const QuizAndCommentsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const questions = [
    {
      question: "What is the largest frog species?",
      options: ["Bullfrog", "Goliath Frog", "Tree Frog", "Darwin's Frog"],
      answer: "Goliath Frog",
    },
    {
      question: "Can toads live far from water?",
      options: ["Yes", "No"],
      answer: "Yes",
    },
    {
      question: "Do frogs need to moisturize their skin?",
      options: ["Yes", "No"],
      answer: "Yes",
    },
    {
      question: "What do frogs generally eat?",
      options: ["Plants", "Insects", "Fish", "Seeds"],
      answer: "Insects",
    },
    {
      question: "Are all toads actually frogs?",
      options: ["Yes", "No"],
      answer: "Yes",
    },
  ]

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const comments = [
    { id: 1, text: "Really fun quiz! I scored 4/5.", author: "FrogLover123" },
    { id: 2, text: "Learned a lot, thanks!", author: "Toader000" },
  ]

  return (
    <Container>
      <h1>Frogs and Toads Quiz</h1>
      {showScore ? (
        <>
          <div>
            You scored {score} out of {questions.length}
          </div>
          <h2>Comments</h2>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <strong>{comment.author}</strong>: {comment.text}
            </Comment>
          ))}
          <StyledLink to="/">Return to Homepage</StyledLink>
        </>
      ) : (
        <>
          <Question>{questions[currentQuestion].question}</Question>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() =>
                handleAnswerOptionClick(
                  option === questions[currentQuestion].answer
                )
              }
            >
              {option}
            </Button>
          ))}
        </>
      )}
    </Container>
  )
}

export default QuizAndCommentsPage
