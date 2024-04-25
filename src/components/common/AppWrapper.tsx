import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const AppWrapperStyled = styled.div`
  display: flex;
  gap: 0;
  flex-direction: column;
  height: 100%;
`

type Props = {
  children: ReactNode
}

const AppWrapper: FC<Props> = ({children}) => {
  return <AppWrapperStyled>{children}</AppWrapperStyled>
}

export default AppWrapper
