import React from 'react'
import { Autoplay, Pagination, Scrollbar, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import image1 from './images/image1.jpg'
import banner from './images/banner.jpg'
// import image2 from './images/image2.webp';
// import image3 from './images/image3.webp';
// import image4 from './images/image4.webp';

const Banner = () => {
    // function createSlide(imageSrc) {
    //     return (
    //         <SwiperSlide >
    //             <img id='banner-imgs ' className="img-fluid"   src={imageSrc} alt="" />
    //         </SwiperSlide>
    //     );
    // }
  return (
    <div>
    <section className="h-[450px] flex bg-cover bg-center bg-no-repeat bg-gray-900 text-gray-300 items-center"
    style={{ backgroundImage: `url(${banner})` }}
    >

    </section>
    </div>
  )
}

export default Banner

{/* <header className="bg-gray-800 py-5">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center text-center md:text-left gap-14">
            <div className="w-full md:w-1/2 lg:w-7/12 xl:w-6/12">
                <Swiper
                    style={{ width: '100%', height: '100%' }}
                    modules={[Autoplay, Pagination, Scrollbar, EffectCards]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 6000 }}
                    className="rounded-xl"
                >
                    {createSlide(image1)}
                    {createSlide(image3)}
                </Swiper>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12">
                <div className="my-5">
                    <h1 className="text-3xl md:text-xl  xl:text-2xl font-bold text-white mb-4">A Tailwind CSS template for modern businesses</h1>
                    <p className="text-base md:text-md xl:text-lg text-white opacity-75 mb-4">Quickly design and customize responsive mobile-first sites with Tailwind CSS, the world’s most popular utility-first CSS framework!</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a className="px-2 py-1 text-base md:text-lg font-bold text-white bg-blue-600 rounded hover:bg-blue-700" href="#features">Get Started</a>
                        <a className="px-2 py-1 text-base md:text-lg font-bold text-white border border-white rounded hover:bg-white hover:text-black" href="#!">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header> */}













{/*

          <Swiper style={{ width: '100%', height: '100%' }}
                modules={[Autoplay, Pagination, Scrollbar, EffectCards]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2500 }}
                scrollbar={{ draggable: true }}
            >
                {createSlide(image1)} */}
                {/* {createSlide(image2)} */}
                {/* {createSlide(image3)} */}
                {/* {createSlide(image4)} */}

            {/* </Swiper> */}



