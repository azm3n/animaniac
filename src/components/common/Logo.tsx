import {FC} from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import {useTranslation} from 'react-i18next'

const StyledImg = styled.img`
  max-height: 40px;
`

const Logo: FC = () => {
  const {t} = useTranslation()

  return <StyledImg src={logo} alt={t('BUTTON.NAVBAR.LOGO_ALT')} />
}

export default Logo
