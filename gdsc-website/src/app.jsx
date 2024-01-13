// import React from 'react'

// IMPORTING ALL THE COMPONENTS HERE
import { HeroSection } from './components/_1_heroSection'
import { AboutSection } from './components/_2_aboutGdsc'
import { OpportunitiesSection } from './components/_3_Opportunities'
import { TechnologiesWeAreExitedAbout } from './components/_4_Technologies'
import { TeamSection } from './components/_5_TeamSection'
import { EventsSection } from './components/_6_EventsSection'
import { ContactUsSection } from './components/_7_ContactUs'
import Loader from './components/Loader'


// IMPORTING REACT HOOKS BELOW
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5900);

        return () => clearTimeout(timeout);
    }, []);





    return (

        loading ? (
            <Loader />
          ) : (
        <div>
            <HeroSection />
            <AboutSection />
            <OpportunitiesSection />
            <EventsSection />
            <TeamSection />
            <TechnologiesWeAreExitedAbout />
            <ContactUsSection />
        </div>)
    )
}
