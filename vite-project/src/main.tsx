import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Counter from './Counter.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import User from './User.tsx'
import Employee from './Employee.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Employee />
    </Provider>
  </StrictMode>,
)
