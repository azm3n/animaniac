import {FC} from 'react'
import styled from 'styled-components'
import {FlexRow, Logo, RootText} from '../common'
import {useTranslation} from 'react-i18next'

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d9b99b;
  padding: 16px 48px;
  gap: 32px;
`

const Footer: FC = () => {
  const {t} = useTranslation()

  return (
    <FooterStyled>
      <FlexRow>
        <Logo />
        <RootText>Animaniac</RootText>
      </FlexRow>
      <RootText>{t('FOOTER.PRIVACY_POLICY')}</RootText>
      <RootText>{t('FOOTER.STATUTE')}</RootText>
    </FooterStyled>
  )
}

export default Footer
