import call from '../../assets/call.png'
import location from '../../assets/location.png'
import time from '../../assets/time.png'
const Contact = () => {
    return (
        <div className="home-container bg-[#0a0a0a] rounded-xl flex justify-center gap-10 h-44">
            <div className="flex items-center gap-3">
                <img src={time} alt="" />
                <div className="text-white ml-3">
                    <p>We are open monday-friday</p>
                    <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex items-center">
                <img src={call} alt="" />
                <div className="text-white ml-3">
                    <p>Have a question?</p>
                    <h3 className="text-xl font-semibold">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex items-center">
                <img src={location} alt="" />
                <div className="text-white ml-3">
                    <p>Need a repair? our address</p>
                    <h3 className="text-xl font-semibold">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;