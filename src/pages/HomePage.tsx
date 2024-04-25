import {FC} from 'react'
import styled from 'styled-components'

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #faf0e6;
  gap: 32px;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const HomePage: FC = () => {
  return <HomePageStyled>HomePage</HomePageStyled>
}

export default HomePage
