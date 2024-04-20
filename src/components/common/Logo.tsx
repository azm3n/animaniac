import {FC} from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const StyledImg = styled.img`
  max-height: 40px;
`

const Logo: FC = () => <StyledImg src={logo} alt='Boy with straw hat' />

export default Logo
