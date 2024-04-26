import {FC} from 'react'
import styled from 'styled-components'

const IndexPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #faf0e6;
  gap: 32px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const IndexPage: FC = () => {
  return <IndexPageStyled>IndexPage</IndexPageStyled>
}

export default IndexPage
