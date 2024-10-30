import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'store'

import 'assets/css/index.less'
import App from '@/App'
import theme from './assets/theme'
// import './sw.webjs.sdk/autotrack.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <ThemeProvider theme={theme}>
            <HashRouter>
              <App />
            </HashRouter>
          </ThemeProvider>
        </StyleSheetManager>
      </PersistGate>
    </Provider>
  </Suspense>
)
