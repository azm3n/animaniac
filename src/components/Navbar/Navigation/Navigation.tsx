import {FC} from 'react'
import {styled} from 'styled-components'
import NavigationElement from './NavigationElement'

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 0;
  background-color: blue;
  align-items: center;
`

const Navigation: FC = () => (
  <StyledNavigation>
    <NavigationElement>Anime</NavigationElement>
    <NavigationElement>Czat</NavigationElement>
    <NavigationElement>Komentarze</NavigationElement>
  </StyledNavigation>
)

export default Navigation
