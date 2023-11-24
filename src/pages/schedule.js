import MainRoom from '../assets/schedule/2.png';
import Room1 from '../assets/schedule/3.png';
import Student from '../assets/schedule/4.png';
const Schedule = () => {
    return (
        <section className="text-center bg-LightBlue py-10">
            {/* Image for Main Room Schedule */}
            <div className="schedule-image mx-auto max-w-4xl"> {/* Adjust max-w-4xl to the maximum width you desire */}
                <img src={MainRoom} alt="Main Room Schedule" className="mx-auto" />
            </div>

            {/* Image for Room 1 Schedule */}
            <div className="schedule-image mx-auto max-w-4xl">
                <img src={Room1} alt="Room 1 Schedule" className="mx-auto" />
            </div>

            {/* Image for Students Track Schedule */}
            <div className="schedule-image mx-auto max-w-4xl">
                <img src={Student} alt="Students Track Schedule" className="mx-auto" />
            </div>
        </section>
    );
};

export default Schedule;
