import React from 'react';
import Hero from '../components/hero.js';

import SponsorLogos from '../components/sponsors.js';
import LocationSection from '../components/location.js';
import Schedule from "./schedule";

const Home = () => (
  <div>
    <Hero />
    <Schedule/>
    {/*<About />*/}
    {/*<SpeakerProfiles />*/}
    <LocationSection />
    <SponsorLogos />
  </div>
  
)
   


export default Home;