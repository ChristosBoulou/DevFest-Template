import React from 'react';
import VenueImage from '../assets/The-Boardwalk.jpg';
import VenueLocationPin from '../assets/venue-location-pin.png';


const LocationSection = () => (

    <section className='my-20'>
        <h2 className='text-center'>Venue</h2>
        <div className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
            <div className="mx-auto px-auto text-center">
                <p className='text-xl lg:text-left lg:pt-0'>We're excited to announce that DevFest {process.env.REACT_APP_CHAPTER_NAME} will take place at <span className="font-semibold">The Boardwalk.</span></p>

                <a href="https://maps.app.goo.gl/ZJAhAicvRHoCj7Mk6" className='hover:text-Blue500 lg:text-left'>
                    <p className='text-lg'>The Boardwalk,<br />
                        105 Brunswick Street,<br />
                        Glasgow City,<br />
                        G11TF
                    </p>
                </a>
                <p className='text-xl lg:text-left lg:pt-0'>Please use these coordinates if you have difficulty locating the entrance, 55.859139, -4.247025 .</p>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/UZJNyzMfo3iKkqxo6"><img src={VenueImage} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-4">
                <a href="https://maps.app.goo.gl/UZJNyzMfo3iKkqxo6"><img src={VenueLocationPin} className='rounded-2xl overflow-hidden' alt='LOCATION'></img>
                </a>
            </div>
            <div className="mx-auto px-auto text-center">
                <br />
                <br />
                <br />
                <p className='text-xl lg:text-left lg:pt-0'><span className="font-semibold"> How to get to The Boardwalk.</span></p>
                <p className='text-xl lg:text-left lg:pt-0'>The nearest train stations are <span className="font-semibold"> Argyle Street</span> station Or <span className="font-semibold"> High Street</span> station. </p>
            </div>
        </div>
    </section>
);

export default LocationSection;