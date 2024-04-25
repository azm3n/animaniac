import {FC} from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 12px 24px;
  background-color: #222;
  border-radius: 15px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`

type Props = {
  children: string
}

const Button: FC<Props> = ({children}) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
