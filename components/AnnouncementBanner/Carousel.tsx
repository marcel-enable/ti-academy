import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import {BannerInputs} from './AnnouncementBanner'
import caretLeft from "../../renderer/caretLeft.svg";
import caretRight from "../../renderer/caretRight.svg";

const Carousel = ({data}: BannerInputs) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
          newIndex = data.length - 1;
        } else if (newIndex >= data.length) {
          newIndex = 0;
        }
    
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          if (!paused) {
            updateIndex(activeIndex + 1);
          }
        }, 3000);
    
        return () => {
          if (interval) {
            clearInterval(interval);
          }
        };
    });
   
    return (
        
        <>
        {data.length >0 &&
        <div
            className="carousel-container relative mx-auto max-w-[80%] h-[380px] flex flex-col items-center gap-6 w-[349px] md:w-[493px] lg:w-[842px] xl:w-[1040px] z-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel w-full rounded-[32px] overflow-hidden shadow-banner h-full">
                <div
                    className="inner  w-full h-full relative"
                >
                    {
                        data.map((item, index) => {
                            let computedClass = index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0';
                            return <CarouselItem computedClass={computedClass} item={item} idx={index} key={index}/>
                        })
                    }
                </div>
                
            </div>
            <div className="scroll flex flex-row justify-end items-center gap-2">
                    {data.map((element, index) => {
                        return (
                            <button
                                key={index}
                                className={`w-10 h-1 bg-ui-tertiary ${index === activeIndex ? "active bg-brand-accent" : ""}`}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                            </button>
                        );
                    })}
            </div>

            
            <button
                className={`z-20 ${ activeIndex === 0 ? 'hidden' : '' } absolute -left-7 top-1/2 -translate-y-1/2 w-14 h-14 bg-light-constant shadow-md rounded-full text-brand-accent flex justify-center items-center`}
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
            >
                <img src={caretLeft} alt="arrow left" className="w-8 h-8" />
            </button>

            <button
                className={`z-20 ${ activeIndex === data.length - 1 ? 'hidden' : '' } absolute -right-7 top-1/2 -translate-y-1/2  w-14 h-14 bg-light-constant shadow-md rounded-full text-brand-accent flex justify-center items-center`}
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
            >
                <img src={caretRight} alt="arrow left" className="w-8 h-8"/>
            </button>
            
        </div>
        }
        </>
    );
};

export default Carousel;