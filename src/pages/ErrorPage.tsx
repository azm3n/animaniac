import {FC} from 'react'
import styled from 'styled-components'
import {ErrorMessage, ErrorRedirect} from '../components/ErrorPage'
import {useTranslation} from 'react-i18next'

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff0db;
  gap: 32px;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const ErrorPage: FC = () => {
  const {t} = useTranslation()

  return (
    <ErrorPageStyled>
      <ErrorMessage />
      <ErrorRedirect>{t('ERROR_PAGE.REDIRECT')}</ErrorRedirect>
    </ErrorPageStyled>
  )
}

export default ErrorPage
