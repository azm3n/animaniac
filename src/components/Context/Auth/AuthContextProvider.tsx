import {ReactNode, createContext, useEffect, useState} from 'react'
import {User} from './interfaces'

export const AuthContext = createContext<{
  user: User | null
  setUser: (user: User | null) => void
}>({user: null, setUser: () => {}})

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const isLogged = localStorage.getItem('isLogged') === 'false' ? false : true
  const [user, setUser] = useState<User | null>({
    isLogged,
  })

  useEffect(() => {
    if (isLogged !== user?.isLogged) {
      localStorage.setItem('isLogged', JSON.stringify(!!user?.isLogged))
    }
  }, [user, isLogged])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
