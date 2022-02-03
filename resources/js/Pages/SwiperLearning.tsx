import React, {CSSProperties, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs} from "swiper";
import './swiper.css';

const SwiperLearning: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const styleSwiper1: React.CSSProperties = {
    // https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
    ['--swiper-navigation-color' as any]: '#e012e5',
    ['--swiper-pagination-color' as any]: '#29e19a'
  };

  return (
    <>
      <style>
        {/*"--swiper-navigation-color": "#fff",*/}
        {/*"--swiper-pagination-color": "#fff",*/}



      </style>

      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        style={styleSwiper1}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide >
          <img className="bg-[url('/img/POWER.jpg')] bg-center bg-cover z-0 absolute"/>
          <div className="bg-pink-400 m-4 w-5/6 h-3/6 flex justify-evenly items-center z-10 ">

            <div className="bg-white text-black w-64 h-64 text-center flex justify-around items-center rounded-md ">
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
            </div>

            <div className=" bg-[url('/img/dare.png')] bg-white w-64 h-64 text-center flex justify-around items-center rounded-md  ">
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
            </div>

            <div className="bg-white text-black w-64 h-64 text-center flex justify-around items-center rounded-md ">
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
              <div className="bg-black w-16 h-16 text-center text-white rounded-md p-2">Hot</div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex-container">
            <div>1</div>
            <div>2</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex-container">
            <div>1</div>
          </div>
        </SwiperSlide>

       {/*<SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>*/}
      </Swiper>

      {/*<Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >*/}

        {/*<SwiperSlide>
          <div className="flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </SwiperSlide>*/}

        {/*<SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>*/}
      {/*</Swiper>*/}

      {/*<Swiper
        slidesPerView={2}
        spaceBetween={50}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>*/}
    </>
  )
}

export default SwiperLearning;
