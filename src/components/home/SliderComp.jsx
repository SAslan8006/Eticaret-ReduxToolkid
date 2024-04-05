import React from 'react';
import Slider from "react-slick";

const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className=''>
                        <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar</div>
                        <div className='text-lg my-4 '>Lorem ipsum dolor sit amet, consectet</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-400'>İncele</div>
                    </div>
                    <img className='w-1/4' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb0c5724-d3ab-42a6-891b-5be3afc92d83/defy-all-day-antrenman-ayakkab%C4%B1s%C4%B1-JL753w.png" alt="" />
                </div>
                <div className='!flex items-center bg-gray-100 px-6'>
                    <div className=''>
                        <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar</div>
                        <div className='text-lg my-4 '>Lorem ipsum dolor sit amet, consectet</div>
                        <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-400'>İncele</div>
                    </div>
                    <img className='w-1/4' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/05555856-e64c-48ea-b82f-f03f7d24091c/defy-all-day-antrenman-ayakkab%C4%B1s%C4%B1-JL753w.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderComp
