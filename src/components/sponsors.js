import React from 'react';
import GoogleLogo from '../assets/sponsors/Google_2015_logo.png';
import FileStack from '../assets/sponsors/Default-Image.png';
import WTMLogo from '../assets/sponsors/WTM-logo.png';
import GDSCLogo from '../assets/sponsors/GDSC-Logo.png';
import Codebase from '../assets/sponsors/Codebase.png'
import JPMorgan from '../assets/sponsors/JPMorgan.jpeg'
const SponsorLogos = () => (

    <div className='text-center my-20'>
        <h2>Sponsors</h2>
        <p className='my-20'>Thank you to our exceptional sponsors for your generous and unwavering support towards the tech community. Your contributions are fueling innovation, fostering collaboration, and empowering future technology leaders. We deeply appreciate your commitment to driving progress and excellence within our vibrant tech ecosystem.</p>

        <section className='my-20'>
            <div className='flex w-full h-full justify-center'>
                <a href="https://www.jpmorgan.com/global">
                    <img src={JPMorgan} alt="CodeMagic Logo" width="600px"  className="object-contain h-48"></img>
                </a>
            </div>
            <div className='flex w-full h-full justify-center'>
                <a href="https://www.filestack.com/">
                    <img src={FileStack} alt="Filestack" width="600px"  className="object-contain h-48"></img>
                </a>
            </div>
            <div className='flex w-full h-full px-10 justify-center'>
                <a href="https://www.thisiscodebase.com/">
                    <img src={Codebase} alt="Codebase"  width="600px" height="10rem" className="object-contain"></img>
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

                <div>
                    <a href="https://www.google.com">
                        <img src={GoogleLogo} alt="Jetbrains" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
                <div>
                    <a href="https://developers.google.com/community/gdsc">
                        <img src={GDSCLogo} alt="GDSC" className="object-contain h-36 w-full px-2"></img>
                    </a>
                </div>
            </div>
        </section>

    </div>
);

export default SponsorLogos;