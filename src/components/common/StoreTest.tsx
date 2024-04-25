import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {selectSampleValue} from '../../store/selectors/sample'
import useDispatchedActions from '../../store/useDispatchedActions'
import {sampleActions} from '../../store/slices/sample'
import {changeLanguage} from 'i18next'

const StoreTest: FC = () => {
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
    <>
      <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
        <button onClick={() => decrement()} data-testid='decrement_button'>
          {t('DECREMENT')}
        </button>
        <span data-testid='sampleValue'>{sampleValue}</span>
        <button onClick={() => increment()} data-testid='increment_button'>
          {t('INCREMENT')}
        </button>
      </div>
      <button
        onClick={handleChangeLanguage}
        data-testid='change_language_button'
      >
        {t('CHANGE_LANGUAGE')}
      </button>
    </>
  )
}

export default StoreTest
