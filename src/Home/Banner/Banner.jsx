import bannerImg from '../../assets/uthsoBanner.jpeg'
const Banner = () => {
    return (
        <div className='bg-[#111723] p-4 min-h-screen'>

            <div className='md:flex gap-10 md:max-w-7xl mx-auto'>
                <div className='md:w-1/2 flex flex-col justify-center gap-10'>
                    <h1 className='text-5xl lg:text-7xl'><span className='text-transparent bg-clip-text bg-gradient-to-t from-[#f4278d] to-[#8260b4]'>MERN STACK <br /> DEVELOPER</span></h1>

                    <div className='space-y-5'>
                        <p className='text-white text-3xl'>I am Uthso - dedicated <span className='text-[#1d6ee6]'>web developer</span> with a passion for crafting visually appealing and responsive websites that deliver seamless user experiences.</p>

                        <button className='btn btn-primary'>RESUME</button>
                    </div>
                </div>

                <div className='md:w-1/2 mt-5 md:mt-0 md:ml-10'>
                    <img className="md:max-w-xl max-w-sm rounded-lg object-cover" src={bannerImg} alt="Banner image showcasing Uthso" />
                </div>
            </div>

        </div>
    );
};

export default Banner;