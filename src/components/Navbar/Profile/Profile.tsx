import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from '../../common'

const Profile: FC = () => {
  const {t} = useTranslation()

  return <Button>{t('NAVBAR.SIGN_IN')}</Button>
}

export default Profile
