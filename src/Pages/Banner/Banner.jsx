import banner from '../../assets/banner.jpg'
const Banner = ({props}) => {
    return (
        <div>
            <div className='rounded-lg relative w-full'>
                <img src={banner} alt="" className='h-64 w-full object-cover' />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[#15151500] w-full top-0 h-full'>
                    <h1 className='absolute text-2xl top-1/2 left-10 text-white font-bold'>{props.name}</h1>
                    <div className='w-full absolute bottom-0 text-center'>
                        <p className='bg-[#FF3811] text-white  w-52 mx-auto px-3 py-2'>Home/{props.route}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;