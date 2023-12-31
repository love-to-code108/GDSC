import React from 'react'
import ReactDOM from 'react-dom/client'

import "../indexOutput.css"



// IMPORTING ALL THE COMPONENTS BELOW 
import { HeroSection } from './components/_1_heroSection'
import { AboutSection } from './components/_2_aboutGdsc'
import { OpportunitiesSection } from './components/_3_Opportunities'
import { TechnologiesWeAreExitedAbout } from './components/_4_Technologies'
import { TeamSection } from './components/_5_TeamSection'
import { EventsSection } from './components/_6_EventsSection'
import { ContactUsSection } from './components/_7_ContactUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HeroSection/>
    <AboutSection/>
    <OpportunitiesSection/>
    <TechnologiesWeAreExitedAbout/>
    <TeamSection/>
    <EventsSection/>
    <ContactUsSection/>

  </React.StrictMode>,
)
