import React from 'react'
import ReactDOM from 'react-dom/client'

import "../indexOutput.css"



// IMPORTING ALL THE COMPONENTS BELOW 
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
