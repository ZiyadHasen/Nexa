import React from 'react';
import Slider from 'react-slick';
import { Frames } from '../data';
import Frame from './Frame';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderFrame() {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='pt-4 pb-6 px-7 font-thin text-slate-300 bg-474747 absolute top-1/2 -left-[8rem] transform -translate-y-1/2 text-5xl border border-solid border-white border-opacity-40 rounded-full cursor-pointer  '
        onClick={onClick}
      >
        <span className='my-6'>&lt;</span>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='pt-4 pb-6 px-7 font-thin text-slate-300 bg-474747 absolute top-1/2 -right-[8rem] transform -translate-y-1/2 text-5xl border border-solid border-white border-opacity-40 rounded-full cursor-pointer   '
        onClick={onClick}
      >
        <span>&gt;</span>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: function (i) {
      const isActive = i === this.currentSlide;

      return (
        <div className='p-2 my-6'>
          <span
            className={`block h-4 w-4 rounded-full my-2 mx-2 ${
              isActive ? 'bg-white' : 'bg-474747'
            }`}
          ></span>
        </div>
      );
    },
  };

  return (
    <div>
      <div className='bg-black pt-[5rem] pb-[9rem] px-[14rem] xl:px-[rem] relative'>
        <h1 className='text-white text-center mb-[4rem] text-4xl'>
          포트폴리오
        </h1>
        <Slider {...settings}>
          {Frames.map((frame) => (
            <Frame key={frame.id} image={frame.frame} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
