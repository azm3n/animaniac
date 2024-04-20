import {FC} from 'react'
import {styled} from 'styled-components'
import NavigationElement from './NavigationElement'
import {useTranslation} from 'react-i18next'

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 0;
  background-color: blue;
  align-items: center;
`

const Navigation: FC = () => {
  const {t} = useTranslation()

  return (
    <StyledNavigation>
      <NavigationElement>
        {t('BUTTON.NAVBAR.NAVIGATION.HOME')}
      </NavigationElement>
      <NavigationElement>
        {t('BUTTON.NAVBAR.NAVIGATION.CHAT')}
      </NavigationElement>
      <NavigationElement>
        {t('BUTTON.NAVBAR.NAVIGATION.COMMENTS')}
      </NavigationElement>
    </StyledNavigation>
  )
}

export default Navigation
