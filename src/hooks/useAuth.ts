import {useMemo} from 'react'
import {useAuthContext} from '../components/Context/Auth'

export const useAuth = () => {
  const {user} = useAuthContext()
  const isUserLogged = useMemo(() => user !== null && user.isLogged, [user])

  return {isUserLogged}
}
