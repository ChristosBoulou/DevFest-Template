import React from 'react';
import Hero from '../components/hero.js';

import SponsorLogos from '../components/sponsors.js';
import LocationSection from '../components/location.js';

const Home = () => (
  <div>
    <Hero />
    {/*<About />*/}
    {/*<SpeakerProfiles />*/}
    <LocationSection />
    <SponsorLogos />
  </div>
  
)
   


export default Home;