import React, { useState } from 'react';
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides;
    let nothing;

    if (!Array.isArray(slides) || slides.length <= 0) {
        return nothing;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    };

    return (
        <div className='slider'>
            <FaArrowAltCircleLeft classname="left-arrow" onClick={prevSlide} />
            <section>

                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            <div>{index === current && (< img src={slide.image} alt="me" className='image' />)}</div>

                        </div>
                    )
                })}
            </section>
            <FaArrowAltCircleRight classname="right-arrow" onClick={nextSlide} />
        </div>

    );

};

export default ImageSlider;
