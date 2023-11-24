import React, { useState } from 'react';
import speakerData from '../assets/json//devfest_2023_sessions_new.json';

const Sessions = () => {
    // Assuming speakerData is an array of session objects.
    // If it's not, you would need to adjust this to match the structure of your JSON.
    const [sessions] = useState(speakerData);

    // No need for fetchData since we're importing the data directly.

    // The useEffect hook can be removed if we're not fetching data asynchronously.
    // useEffect(() => {
    //     fetchData();
    // }, []);

    console.log(speakerData)

    return (
        <section className="text-center bg-LightBlue py-10">
            <h2 className="text-center">Sessions</h2>
            <div className='w-11/12 mx-auto'>
                {sessions.length > 0 && sessions.map((session, idx) => (
                    <div className='session-component my-10 p-5' key={idx}>
                        <h3 className='mb-3'>{session.title}</h3>
                        {/* Assuming there is a 'speakers' property in the JSON */}
                        {session.speaker && session.speaker.length > 0 && (
                            session.speaker.map((speaker, index) => (
                                <p className='font-semibold' key={index}>Speaker: {speaker.FullName}</p>
                            ))
                        )}
                        <p className='mb-3'>{session.description}</p>

                        {/* Update category processing as per your JSON's structure */}
                        {session.categories && session.categories.map(category =>
                            category.categoryItems.map(item => {
                                // Determine the class based on the item name
                                const pillClass = item.name.includes("Talk") ? "talk-pill" : "workshop-pill";

                                return (
                                    <span key={item.id} className={pillClass}>
                                        {item.name.includes("Talk") ? "Talk" : "Workshop"}
                                    </span>
                                );
                            })
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sessions;
