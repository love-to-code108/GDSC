import React from 'react'
import ReactDOM from 'react-dom/client'

import "../indexOutput.css"



// IMPORTING ALL THE COMPONENTS BELOW 
import { HeroSection } from './components/_1_heroSection'
import { AboutSection } from './components/_2_aboutGdsc'
import { OpportunitiesSection } from './components/_3_Opportunities'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HeroSection/>
    <AboutSection/>
    <OpportunitiesSection/>
  </React.StrictMode>,
)
