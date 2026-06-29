import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { useState } from 'react';
import '../Styles/Slider.css';

type referenceImage = {
    src: string;
    alt: string;
};

type SliderProps = {
    referenceImages: referenceImage[];
};

const Slider = ({ referenceImages }: SliderProps) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === referenceImages.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? referenceImages.length - 1 : slide - 1);
    };
    return (
        <figure className="slider">
            <CircleChevronLeft className="arrow left" onClick={prevSlide} />

            {referenceImages.map((item, index: number) => {
                return (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        className={slide === index ? 'slide' : 'slide hidden'}
                    />
                );
            })}
            <CircleChevronRight className="arrow right" onClick={nextSlide} />
            <span className="indicators">
                {referenceImages.map((_, index: number) => {
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                setSlide(index);
                            }}
                            className={slide === index ? 'indicator' : 'indicator inactive'}
                        ></button>
                    );
                })}
            </span>
        </figure>
    );
};

export default Slider;
