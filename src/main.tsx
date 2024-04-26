import ReactDOM from 'react-dom/client'
import {store} from './store/store.ts'
import {Provider} from 'react-redux'
import {StrictMode} from 'react'
import Root from './Root.tsx'
import {I18nextProvider} from 'react-i18next'
import i18next from './utils/translations.ts'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {AnimePage, ErrorPage} from './pages/index.tsx'
import {AuthContextProvider} from './components/Context/Auth/index.ts'
import ProtectedRoute from './components/common/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/animaniac/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'anime',
        element: (
          <ProtectedRoute>
            <AnimePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
