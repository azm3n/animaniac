import {useSelector} from 'react-redux'
import {sampleActions} from './store/slices/sample'
import {selectSampleValue} from './store/selectors/sample'
import useDispatchedActions from './store/useDispatchedActions'

const App = () => {
  const sampleValue = useSelector(selectSampleValue)
  const {increment, decrement} = useDispatchedActions({
    increment: sampleActions.increment,
    decrement: sampleActions.decrement,
  })

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
      <button onClick={() => decrement()}>Odejmij</button>
      <span data-testid='sampleValue'>{sampleValue}</span>
      <button onClick={() => increment()}>Dodaj</button>
    </div>
  )
}

export default App
