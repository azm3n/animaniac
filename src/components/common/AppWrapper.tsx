import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: flex-start;
  align-items: center;
`

type Props = {
  children: ReactNode
}

const AppWrapper: FC<Props> = ({children}) => (
  <StyledAppWrapper>{children}</StyledAppWrapper>
)

export default AppWrapper
