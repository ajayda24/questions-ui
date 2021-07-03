import styled from 'styled-components'
import Card from '../components/Card'

export default function Home() {
  return (
    <Container>
      <Card />
    </Container>
  )
}

const Container = styled.div`
  background-color: #333358;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  /* border: 1px solid aliceblue; */
`
