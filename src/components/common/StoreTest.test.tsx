import {screen, fireEvent, cleanup, render} from '@testing-library/react'
import {Provider} from 'react-redux'
import {afterEach, describe, expect, it} from 'vitest'
import {setupUniqueStore} from '../../test.utils/store'
import {StoreTest} from '.'

const renderUniqueStoreProvider = () => {
  const store = setupUniqueStore()
  render(
    <Provider store={store}>
      <StoreTest />
    </Provider>,
  )
}

describe('Testing increment and decrement buttons', () => {
  afterEach(() => {
    cleanup()
  })
  it('Increment sampleValue', () => {
    renderUniqueStoreProvider()
    const sampleValueElement = screen.getByTestId('sampleValue')

    expect(sampleValueElement.textContent).toBe('0')

    const incrementButton = screen.getByTestId('increment_button')
    fireEvent.click(incrementButton)

    expect(sampleValueElement.textContent).toBe('1')
  })

  it('Decrement sampleValue', () => {
    renderUniqueStoreProvider()
    const sampleValueElement = screen.getByTestId('sampleValue')

    expect(sampleValueElement.textContent).toBe('0')

    const decrementButton = screen.getByTestId('decrement_button')
    fireEvent.click(decrementButton)

    expect(sampleValueElement.textContent).toBe('-1')
  })
})
