import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from '../../common'
import {useAuthContext} from '../../Context/Auth'

const Profile: FC = () => {
  const {t} = useTranslation()
  const {user, setUser} = useAuthContext()

  return (
    <Button onClick={() => setUser({isLogged: !user?.isLogged})}>
      {t(user?.isLogged ? 'NAVBAR.SIGN_OUT' : 'NAVBAR.SIGN_IN')}
    </Button>
  )
}

export default Profile
