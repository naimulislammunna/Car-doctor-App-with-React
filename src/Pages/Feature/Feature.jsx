import person from '../../assets/person.svg'
import quote from '../../assets/quote.svg'
import Wrench from '../../assets/Wrench.svg'
import check from '../../assets/check.svg'
import group from '../../assets/group.svg'
import deliveryt from '../../assets/deliveryt.svg'
const Feature = () => {
    return (
        <div className="home-container text-center">
            <p className="text-[#FF3811] text-lg font-semibold my-4">Core Features</p>
            <h1 className="text-3xl font-bold my-4">Why Choose Us</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            <div className="flex gap-7 mt-5">
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={check} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={person} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={group} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={deliveryt} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={check} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
                <div className='p-7 rounded-xl border border-gray-300'>
                    <img src={Wrench} alt="" className='mx-auto'/>
                    <h3 className='font-bold'>Expert Team</h3>
                </div>
            </div>
        </div>
    );
};

export default Feature;