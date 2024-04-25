import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

const ErrorMessageStyled = styled.p`
  font-size: 32px;
  font-weight: 700;
`

const ErrorMessage: FC = () => {
  const {t} = useTranslation()

  return <ErrorMessageStyled>{t('ERROR_PAGE.MESSAGE')}</ErrorMessageStyled>
}

export default ErrorMessage
