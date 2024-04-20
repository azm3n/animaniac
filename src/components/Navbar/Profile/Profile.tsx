import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {styled} from 'styled-components'

const StyledSignOutButton = styled.button`
  padding: 4px 6px;
  background-color: green;
`

const SignOutButton: FC = () => {
  const {t} = useTranslation()
  return <StyledSignOutButton>{t('BUTTON.NAVBAR.SIGN_IN')}</StyledSignOutButton>
}

const Profile: FC = () => <SignOutButton />

export default Profile
