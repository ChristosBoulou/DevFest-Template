import React from 'react';
// import {Link} from 'react-router-dom';
import GoogleLogo from '../assets/sponsors/Google_2015_logo.png';
import JPMorganLogo from '../assets/sponsors/JP Morgan text.png';

import WTMLogo from '../assets/sponsors/WTM-logo.png';
// import GDSCLogo from '../assets/sponsors/GDSC-Logo.png';
import GlasgowInvovators from '../assets/sponsors/gcid-logo-1.png'

const SponsorLogos = () => (

    <div className='text-center my-20'>
        <h2>Sponsors</h2>
        <p className='my-20'>Thank you to our exceptional sponsors for your generous and unwavering support towards the tech community. Your contributions are fueling innovation, fostering collaboration, and empowering future technology leaders. We deeply appreciate your commitment to driving progress and excellence within our vibrant tech ecosystem.</p>

        <section className='my-20'>
            <div>
                    <a href="https://www.google.com">
                    <img src={GoogleLogo} alt="Jetbrains" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                <div className='flex w-full h-full justify-center'>
                <a href="https://www.jpmorgan.com/technology">
                    <img src={JPMorganLogo} alt="JPMorgan Logo" width="600px"  className="object-contain h-48"></img>
                </a>
            </div>
                
        </section>
        <section>
            <h3 className='my-10 font-semibold'>Community Partners</h3>
            <div className='w-1/2 grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className=''>
                    <a href="https://developers.google.com/womentechmakers">
                    <img src={WTMLogo} alt="WTM Logo" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                <div className=''>
                    <a href="https://www.glasgowcityinnovationdistrict.com/">
                        <img src={GlasgowInvovators} alt="GlasgowInvovators" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
            </div> 
        </section>
        {/* <div className='m-16'>
            <Link to='/sponsors' className='text-white bg-Green500 hover:text-white rounded-full text-md px-6 py-4'>Become a Sponsor</Link> 
         </div> */}

    </div>
);

export default SponsorLogos;