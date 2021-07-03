import { useState} from 'react'
import styled from 'styled-components'

const Index = (props) => {
  const [refresh, setRefresh] = useState(false)
  const [questions, setQuestions] = useState([
    {
      id: 1,
      enteredAnswer: false,
      display: 'none',
      question: 'Find 10th term in 1,3,5,7,...',
      answer: '19',
      setProperties: function (enteredAnswer, display) {
        this.enteredAnswer = enteredAnswer
        this.display = display
      },
    },
    {
      id: 2,
      enteredAnswer: false,
      display: 'none',
      question: 'Find 11th term in 1,3,5,7,...',
      answer: '21',
      setProperties: function (enteredAnswer, display) {
        this.enteredAnswer = enteredAnswer
        this.display = display
      },
    },
    {
      id: 3,
      enteredAnswer: false,
      display: 'none',
      question: 'Find 12th term in 1,3,5,7,...',
      answer: '23',
      setProperties: function (enteredAnswer, display) {
        this.enteredAnswer = enteredAnswer
        this.display = display
      },
    },
  ])

  return (
    <CardContainer>
      <Section>
        <h1>Learn</h1>
      </Section>
      <Card>
        <p>Finding nth term</p>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt
        </Description>
      </Card>
      <Card>
        <p>Finding the sum</p>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt
        </Description>
      </Card>
      <Card>
        <p>Check the common difference</p>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt
        </Description>
      </Card>
      <Section>
        <h1>Practice</h1>
      </Section>
      {questions.map((s) => (
        <Card key={s.id} answerDisplay={s.display}>
          <p>#Question {s.id}</p>
          <Description>
            {s.question}
            <Input
              onChange={(e) => {
                if (e.target.value == s.answer) {
                  s.setProperties(true, 'block')
                  setRefresh((prevState) => !prevState)
                } else {
                  s.setProperties(false, 'block')
                  setRefresh((prevState) => !prevState)
                }
              }}
            />
            <Answer>{s.enteredAnswer ? 'Correct' : 'Wrong'}</Answer>
          </Description>
        </Card>
      ))}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: #4a4a77;
  width: 90%;
  height: 95vh;
  margin: auto;
  overflow-y: scroll;
  border-color: aliceblue;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  border-radius: 10px 10px 0 0;
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #333358;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #333358;
  }
`
const Description = styled.div`
  display: none;
  font-size: 1.6rem;
  margin: 2rem 0;
  opacity: 0;
`

const Answer = styled.p`
  display: none;
  font-size: 1.5rem;
  color: aliceblue;
  margin: 2rem 0;
`

const Card = styled.div`
  font-family: cursive;
  font-weight: 100;
  font-size:1.7rem;
  background-color: #333358;
  width: 90%;
  height: 10rem;
  margin: 2rem auto;
  border-radius: 15px;
  box-shadow: 1px 1px 3px 3px #2b2b49;
  text-align: center;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 3rem;
  transition: all 300ms;
  &:hover {
    height: 25rem;
    display: block;
  }
  &:hover ${Description} {
    display: block;
    opacity: 1;
    transition: all 3s linear;
    animation: slide-down 1s ease-out;
  }
  &:hover ${Answer} {
    display: ${(props) => props.answerDisplay};
  }
`

const Section = styled.div`
  font-family: cursive;
  background-color: #333358;
  width: 90%;
  height: 5rem;
  margin: 2rem auto;
  /* border: 2px solid aliceblue; */
  box-shadow: 1px 1px 3px 3px #2b2b49;
  text-align: center;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
`

const Input = styled.input`
  display: block;
  margin: auto;
  outline: none;
  border: none;
  border-bottom: 1px solid aliceblue;
  background-color: transparent;
  color: aliceblue;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-top: 2rem;
  &:focus ~ ${Answer} {
    display: block;
  }
`

export default Index
