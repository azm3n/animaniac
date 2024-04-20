import {FC} from 'react'
import {styled} from 'styled-components'

const StyledSignOutButton = styled.button`
  padding: 4px 6px;
  background-color: green;
`

const SignOutButton: FC = () => (
  <StyledSignOutButton>Wyloguj się</StyledSignOutButton>
)

const Profile: FC = () => <SignOutButton />

export default Profile
