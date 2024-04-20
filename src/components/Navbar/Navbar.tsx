import {FC} from 'react'
import {styled} from 'styled-components'
import {Logo} from '../common'
import {Navigation} from './Navigation'
import {Profile} from './Profile'

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  min-width: 100vw;
  max-height: 60px;
  padding: 8px 16px;
  background-color: red;
  align-items: center;
  justify-content: space-between;
`

const Navbar: FC = () => (
  <StyledNavbar>
    <Logo />
    <Navigation />
    <Profile />
  </StyledNavbar>
)

export default Navbar
