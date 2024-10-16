
const Hero = () => {

    return (
        <div className="home-container">
            <div className="carousel w-full h-[100vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/y8Gm2LMh/5.jpg"
                        className="w-full" />
                    <div className="absolute flex  justify-between w-full  h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className="w-1/2 flex items-center ml-20">
                            <div>
                                <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                                <p className="text-white my-10">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-3">
                                    <button className="button">Discover more</button>
                                    <button className="button-2">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-end mb-10 mr-10">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/3wpvVYC7/2.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.postimg.cc/cHhrGHKq/3.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;