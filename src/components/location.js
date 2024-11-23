import React from 'react';
import VenueImage from '../assets/JPmorgan1.png';
import VenueLocationPin from '../assets/JPmorgan2.png';


const LocationSection = () => (

    <section className='my-20'>
        <h2 className='text-center'>Venue</h2>
        <div className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <div className="mx-auto px-auto text-center">
                <p className='text-xl lg:text-left lg:pt-0'>We're excited to announce that DevFest {process.env.REACT_APP_CHAPTER_NAME} will take place at <span className="font-semibold">JPMorgan Chase - Glasgow Offices.</span></p>
                <br/>

                <p className='text-xl lg:text-left lg:pt-0'> <span className="font-semibold">Important message:</span> To enter the JP Morgan offices, attendees must present a government-issued ID (such as a driver’s license, passport, etc.).</p>
<br/>

                <a href="https://maps.app.goo.gl/icjDhX2namzQ2QWX6" className='hover:text-Blue500 lg:text-left'>
                    <p className='text-lg'>JPMorgan Chase - Glasgow Offices<br />
                    311-345 Argyle Street,<br />
                    Glasgow,<br />
                    G2 8LP</p>
                </a>
                <p className='text-xl lg:text-left lg:pt-0'>Please use the following what3words if you have difficulty locating the entrance, ///attend.coins.input</p>
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