import {FC, ReactNode, useEffect} from 'react'
import {useAuth} from '../../hooks'
import {useNavigate} from 'react-router-dom'

type Props = {
  children: ReactNode
}

const ProtectedRoute: FC<Props> = ({children}) => {
  const {isUserLogged} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLogged) {
      navigate('/animaniac/')
    }
  }, [isUserLogged, navigate])

  return <>{children}</>
}

export default ProtectedRoute
