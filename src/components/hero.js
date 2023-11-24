import React from 'react';
import gif from '../assets/DevFest_SaveTheDate_01.gif';

const Hero = () => (
 
    <section className='w-11/12 sm:my-5 mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='my-5 mx-auto'>
            <img src={gif} className="mx-auto" alt='DevFest Save The Date Gif'></img>
        </div>
        <div className='mx-auto text-center sm:my-5 w-11/12'>
            <h1>DevFest {process.env.REACT_APP_CHAPTER_NAME} <br/>
            </h1>
            <h3 className='text-Green500 font-semibold animate-pulse'>Date: {process.env.REACT_APP_DEVFEST_DATE}</h3>
            <p className='sm:px-5 sm:text-lg'>DevFests are global tech events run by Google Developer Groups (GDGs) that offer a mix of talks, hands-on sessions, workshops, and a deep dive into the latest from Google and the world of open source. In 2022 alone, over 550 DevFests took place, reaching 320k+ tech enthusiasts.

                For this year's celebration, GDG Glasgow, GDG Edinburgh, GDSC Glasgow Uni and Strathclyde & Women Techmakers Scotland are teaming up for DevFest Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿, aiming to bring together the brilliant Scottish tech community in Glasgow's vibrant center for a jam-packed day 🎉</p>
            
            {/*<div className='my-10'>*/}
            {/*        <a href={process.env.REACT_APP_DEVFEST_REGISTRATION_URL} className='text-white bg-Red500 hover:text-white rounded-full text-md px-6 py-4'>Register</a> */}
            {/*</div>*/}
        </div>
    </section>
    
);

export default Hero;