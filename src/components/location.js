import React from 'react';
import VenueImage from '../assets/bankofScotlandMap.png';
import VenueLocationPin from '../assets/bankofScotlandFront.png';


const LocationSection = () => (

    <section className='my-20'>
        <h2 className='text-center'>Venue</h2>
        <div className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <div className="mx-auto px-auto text-center">
                <p className='text-xl lg:text-left lg:pt-0'>We're excited to announce that DevFest {process.env.REACT_APP_CHAPTER_NAME} will take place at <span className="font-semibold">Bank of Scotland, EH1 1YZ.</span></p>
                <br/>

                <p className='text-xl lg:text-left lg:pt-0'> <span className="font-semibold">Important message:</span> To enter the Bank of Scotland offices, attendees must present a government-issued ID (such as a driver’s license, passport, etc.).</p>
<br/>

                <a href="https://maps.app.goo.gl/TbbGDuZbVb7muD4VA" className='hover:text-Blue500 lg:text-left'>
                    <p className='text-lg'><span className="font-semibold">Bank of Scotland</span><br />
                        The Mound,<br />
                        Edinburgh,<br />
                        EH1 1YZ</p>
                </a>
                <p className='text-xl lg:text-left lg:pt-0'>Please use the following what3words if you have difficulty locating the entrance, ///since.spring.types</p>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/icjDhX2namzQ2QWX6"><img src={VenueImage} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/icjDhX2namzQ2QWX6"><img src={VenueLocationPin} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
        </div>
    </section>
);

export default LocationSection;