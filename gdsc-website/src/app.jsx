// import React from 'react'

// IMPORTING ALL THE COMPONENTS HERE
import { HeroSection } from './components/_1_heroSection'
import { AboutSection } from './components/_2_aboutGdsc'
import { OpportunitiesSection } from './components/_3_Opportunities'
import { TechnologiesWeAreExitedAbout } from './components/_4_Technologies'
import { TeamSection } from './components/_5_TeamSection'
import { EventsSection } from './components/_6_EventsSection'
import { ContactUsSection } from './components/_7_ContactUs'


// IMPORTING REACT HOOKS BELOW

export const App = () => {



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 6000);

        return () => clearTimeout(timeout);
    }, []);





    return (
        <div>
            <HeroSection />
            <AboutSection />
            <OpportunitiesSection />
            <TechnologiesWeAreExitedAbout />
            <TeamSection />
            <EventsSection />
            <ContactUsSection />
        </div>
    )
}
