import {screen, fireEvent, cleanup, render} from '@testing-library/react'
import {Provider} from 'react-redux'
import {afterEach, describe, expect, it} from 'vitest'
import App from './App'
import {setupUniqueStore} from './test.utils/store'

const renderUniqueStoreProvider = () => {
  const store = setupUniqueStore()

  render(
    <Provider store={store}>
      <App />
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

    const incrementButton = screen.getByText('Dodaj')
    fireEvent.click(incrementButton)

    expect(sampleValueElement.textContent).toBe('1')
  })

  it('Decrement sampleValue', () => {
    renderUniqueStoreProvider()
    const sampleValueElement = screen.getByTestId('sampleValue')

    expect(sampleValueElement.textContent).toBe('0')

    const decrementButton = screen.getByText('Odejmij')
    fireEvent.click(decrementButton)

    expect(sampleValueElement.textContent).toBe('-1')
  })
})
