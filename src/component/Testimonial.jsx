'use client'; // Add this for client-side interactivity

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Testimonial() {
    const slides = [
        {
            id: 1,
            title: "Our internal recruiting team was struggling to fill an accounting position that has been open for four months.",
            content: [
                "Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula.",
                "Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec.",
                "Lorem ipsum dolor sit amet consectetur"
            ]
        },
        {
            id: 2,
            title: "Our internal recruiting team was struggling to fill an accounting position that has been open for four months.",
            content: [
                "Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam.",
                "Facilisi luctus neque ligula mauris senectus ac nam netus massa.",
                "Lorem ipsum dolor sit amet consectetur"
            ]
        },
        {
            id: 3,
            title: "Our internal recruiting team was struggling to fill an accounting position that has been open for four months.",
            content: [
                "Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam.",
                "Facilisi luctus neque ligula mauris senectus ac nam netus massa.",
                "Lorem ipsum dolor sit amet consectetur"
            ]
        }
    ];

    return (
        <div className="col-lg-9">
            <div className="slider-container">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{ delay: 5000 }}
                    loop={false}
                    className="mySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="slider-item">
                                <h2 className="section-title" style={{ fontSize: "30px" }}>
                                    {slide.title}
                                </h2>
                                <p className="mb-0">{slide.content[0]}</p>
                                <p>{slide.content[1]}</p>
                                <p><strong>{slide.content[2]}</strong></p>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Custom Navigation Arrows */}
                    <div className="swiper-button-prev">
                        <FaArrowLeftLong  />
                    </div>
                    <div className="swiper-button-next">
                        <FaArrowRightLong />
                    </div>
                </Swiper>
            </div>
        </div>
    );
}