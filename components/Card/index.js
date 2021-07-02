import styled from 'styled-components'

const Index = (props) => {
  return (
    <CardContainer>
      <Card>
        <h1>Mercury</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt? Excepturi nemo voluptatem ipsum veritatis, corporis
          repudiandae a illum.
        </Description>
      </Card>
      <Card>
        <h1>Venus</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt? Excepturi nemo voluptatem ipsum veritatis, corporis
          repudiandae a illum.
        </Description>
      </Card>
      <Card>
        <h1>Earth</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt? Excepturi nemo voluptatem ipsum veritatis, corporis
          repudiandae a illum.
        </Description>
      </Card>
      <Card>
        <h1>Mars</h1>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          deserunt? Excepturi nemo voluptatem ipsum veritatis, corporis
          repudiandae a illum.
        </Description>
      </Card>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: #4a4a77;
  width: 90%;
  height: 95vh;
  margin: auto;
  overflow-y: scroll;
`
const Description = styled.p`
  display: none;
  font-size: 1.6rem;
  margin: 2rem 0;
`
const Card = styled.div`
  font-family: cursive;
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
  transition: height 500ms;
  &:hover {
    height: 30rem;
    display: block;
  }
  &:hover ${Description} {
    display: block;
  }
`



export default Index
