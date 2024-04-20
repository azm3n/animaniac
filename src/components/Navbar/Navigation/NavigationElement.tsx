import {FC} from 'react'
import {styled} from 'styled-components'

const StyledNavigationElement = styled.p`
  color: white;
  fontsize: 24px;
`

type Props = {
  children: string
}

const NavigationElement: FC<Props> = ({children}) => (
  <StyledNavigationElement>{children}</StyledNavigationElement>
)

export default NavigationElement
