import React from 'react'
import ReactDOM from 'react-dom/client'

import "../indexOutput.css"



// IMPORTING ALL THE COMPONENTS BELOW 
import { HeroSection } from './components/_1_heroSection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HeroSection/>
  </React.StrictMode>,
)
