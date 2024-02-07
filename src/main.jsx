import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import CartProvider from './store/CartContext.jsx'
import ProgressProvider from './store/ProgressContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProgressProvider>
  </React.StrictMode>,
)
