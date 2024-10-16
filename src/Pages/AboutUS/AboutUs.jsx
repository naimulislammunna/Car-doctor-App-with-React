import person from '../../assets/person.jpg'
import parts from '../../assets/parts.jpg'
const AboutUs = () => {
    return (
        <div className='home-container flex'>
            <div className='relative'>
                <img src={person} alt="" className='w-3/5 rounded-xl '/>
                <img src={parts} alt="" className='w-1/2 absolute top-[40%]  right-20 rounded-xl border-8 border-white'/>
            </div>
            <div>
                <p className="text-[#FF3811] font-bold">About Us</p>
                <h1 className="text-4xl my-4 font-bold">We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className="button my-5">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;