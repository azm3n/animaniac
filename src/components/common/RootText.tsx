import {FC} from 'react'
import {styled} from 'styled-components'

const StyledRootText = styled.p`
  color: #222;
  font-size: 18px;
  cursor: pointer;
`

type Props = {
  children: string
}

const RootText: FC<Props> = ({children}) => (
  <StyledRootText>{children}</StyledRootText>
)

export default RootText
