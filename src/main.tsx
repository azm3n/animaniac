import ReactDOM from 'react-dom/client'
import {store} from './store/store.ts'
import {Provider} from 'react-redux'
import {StrictMode} from 'react'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
