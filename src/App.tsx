import {useSelector} from 'react-redux'
import {sampleActions} from './store/slices/sample'
import {selectSampleValue} from './store/selectors/sample'
import useDispatchedActions from './store/useDispatchedActions'
import {useTranslation} from 'react-i18next'
import {changeLanguage} from 'i18next'
import {AppWrapper} from './components/common'
import {Navbar} from './components/Navbar'

const App = () => {
  const {t} = useTranslation()
  const sampleValue = useSelector(selectSampleValue)
  const {increment, decrement} = useDispatchedActions({
    increment: sampleActions.increment,
    decrement: sampleActions.decrement,
  })

  const handleChangeLanguage = () => {
    localStorage.getItem('i18nextLng') === 'pl' ?
      changeLanguage('en')
    : changeLanguage('pl')
  }

  return (
    <AppWrapper>
      <Navbar />
      {/* <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
        <button onClick={() => decrement()} data-testid='decrement_button'>
          {t('BUTTON.DECREMENT')}
        </button>
        <span data-testid='sampleValue'>{sampleValue}</span>
        <button onClick={() => increment()} data-testid='increment_button'>
          {t('BUTTON.INCREMENT')}
        </button>
      </div>
      <button
        onClick={handleChangeLanguage}
        data-testid='change_language_button'
      >
        {t('BUTTON.CHANGE_LANGUAGE')}
      </button> */}
    </AppWrapper>
  )
}

export default App
