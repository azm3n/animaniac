import ReactDOM from 'react-dom/client'
import {store} from './store/store.ts'
import {Provider} from 'react-redux'
import {StrictMode} from 'react'
import App from './App.tsx'
import {I18nextProvider} from 'react-i18next'
import i18next from './utils/translations.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
