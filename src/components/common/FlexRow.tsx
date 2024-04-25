import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const FlexRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`

type Props = {
  children: ReactNode
}

const FlexRow: FC<Props> = ({children}) => (
  <FlexRowStyled>{children}</FlexRowStyled>
)

export default FlexRow
