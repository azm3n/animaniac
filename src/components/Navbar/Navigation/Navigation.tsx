import {FC} from 'react'
import {styled} from 'styled-components'
import {useTranslation} from 'react-i18next'
import {RootText} from '../../common'

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 8px 0;
  align-items: center;
`

const Navigation: FC = () => {
  const {t} = useTranslation()

  return (
    <StyledNavigation>
      <RootText>{t('NAVBAR.NAVIGATION.HOME')}</RootText>
      <RootText>{t('NAVBAR.NAVIGATION.CHAT')}</RootText>
      <RootText>{t('NAVBAR.NAVIGATION.COMMENTS')}</RootText>
    </StyledNavigation>
  )
}

export default Navigation
