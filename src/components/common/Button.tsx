import {ButtonHTMLAttributes, FC} from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 12px 24px;
  background-color: #222;
  border-radius: 15px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const Button: FC<Props> = ({children, ...props}) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button
