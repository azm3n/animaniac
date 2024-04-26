import {FC} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../common'

type Props = {
  children: string
}

const ErrorRedirect: FC<Props> = ({children}) => {
  return (
    <Link to='/animaniac/'>
      <Button>{children}</Button>
    </Link>
  )
}

export default ErrorRedirect
