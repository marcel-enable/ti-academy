import React, { ReactNode, useState, useEffect, useRef, useCallback} from 'react';
import { ContentItem } from './FeaturedContent';
import caretLeft from "../../renderer/caretLeft.svg";
import caretRight from "../../renderer/caretRight.svg";



const BOXES = ['../../renderer/boxes1.svg', '../../renderer/boxes2.svg', '../../renderer/boxes3.svg']

export const SliderItem = (props:{data:ContentItem, index: number}) => {
    const boxIdx = props.index%BOXES.length
    const boxUrl = BOXES[boxIdx];
    const boxStyle = `hidden md:block absolute ${boxIdx === 0 ? '-left-[44px] -bottom-[74px] rotate-180 lg:left-0 lg:-bottom-[20px] lg:-scale-x-100 lg:-scale-y-100' : boxIdx === 1 ?  '-right-[62px] -top-[60px] lg:-right-[25px] lg:-top-[8px]' : '-left-[42px] -top-[55px] lg:left-[px] lg:top-[0px]'}`;                  
    return (
        <div className="slider-item-container shrink-0 w-[160px] h-[240px] md:w-[170px] md:h-[237px] lg:w-[250px] lg:h-[350px]" >
            
            <div className="slider-item w-full h-full rounded-2xl overflow-hidden whitespace-pre-line flex items-center justify-center relative group">
                {
                    props.data.ribbon && 
                    <div className="ribbon z-50 absolute flex items-start gap-2.5 bg-brand-accent rounded-tr-[20px] rounded-br-[20px] left-0 top-[25px]  pt-2 pr-2 pb-2 pl-1   md:pt-2.5 md:pr-4 md:pb-2.5 md:pl-2">
                        <div className="ribbon-text font-primary font-semibold text-xs text-ui-quaternary">{props.data.ribbon.label}</div>
                    </div>
                }
                <div className="title text-base font-semibold font-secondary text-center text-light-constant p-4 z-30 md:text-lg md:font-bold lg:text-2xl lg:font-semibold">{props.data.title}</div>
                <img src={boxUrl} className={`${boxStyle} z-20`}/>
                <div className="overlay absolute h-full w-full bg-black opacity-60 z-10"></div>
                <img src={props.data.asset} className="image transition-all duration-300 group-hover:scale-150 absolute h-full w-full z-0 object-cover "/>
                
            </div>
        </div>
    )
}

interface SliderProps {
    children? :ReactNode
}
const Slider = ({children}: SliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const initialRef: any = null;
    const carousel = useRef(initialRef);
    const track = useRef(initialRef);
    const [carouselWidth, setCarouselWidth] = useState(carousel?.current?.offsetWidth || 0);
    const [numberOfScrolls, setNumberOfScrolls] = useState(0);
    
    useEffect(() => {
        if(carousel?.current?.offsetWidth) {
            setCarouselWidth(carousel?.current?.offsetWidth || 0);
            setNumberOfScrolls(Math.ceil(track?.current?.offsetWidth/carousel?.current?.offsetWidth));
            setActiveIndex(0);

        }
        function handleResize() {
            setCarouselWidth(carousel?.current?.offsetWidth || 0);
            setNumberOfScrolls(Math.ceil(track?.current?.offsetWidth/carousel?.current?.offsetWidth));
            setActiveIndex(0);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])   
  
    const updateIndex = (newIndex: number) => {
        
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
    
        setActiveIndex(newIndex);
    };

    return (
        <div
            className="slider-container w-[100%] relative mx-auto z-10 flex flex-col gap-5 pl-2 md:pl-6 lg:pl-16"
            ref={carousel}
        >
            <div className="scroll flex flex-row justify-end items-center gap-2 h-[56px] pr-[9px] md:pr-[17px] lg:pr-[65px]">
                    {[...Array(numberOfScrolls).keys()].map((element, index) => {
                        return (
                            <button
                                key={index}
                                className={`w-6 h-1 md:w-[10] bg-ui-tertiary ${index === activeIndex ? "active bg-brand-accent" : ""}`}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                            </button>
                        );
                    })}
            </div>
            <div className="slider-inner overflow-hidden relative">
                <div
                    className="track whitespace-nowrap transition-transform duration-300 inline-flex gap-2 lg:gap-4"
                    style={{transform: `translateX(-${activeIndex * carouselWidth}px)`}}
                    ref={track}
                    
                >
                    {React.Children.map(children, (child, index) => {
                        if(React.isValidElement(child)) {
                            return React.cloneElement(child);
                        }
                        
                    })}
                </div>
                <div className="nav">
                    <div className="p-4 lg:p-6 flex flex-start gap-2.5 absolute left-0 top-1/2 -translate-y-1/2">
                        <button
                            className={`${activeIndex <=0 ? 'hidden': ''} z-30  w-10 h-10 md:w-14 md:h-14 bg-light-constant shadow-md rounded-full text-brand-accent flex justify-center items-center`}
                            onClick={() => {
                                updateIndex(activeIndex - 1);
                            }}
                        >
                            <img src={caretLeft} alt="arrow left" className="w-4 h-4 md:w-8 md:h-8" />
                        </button>
                    </div>
                    <div className="p-4 lg:p-6 flex flex-start gap-2.5 absolute right-0 top-1/2 -translate-y-1/2">
                        <button
                            className={`${track?.current?.offsetWidth - (activeIndex * carouselWidth) < carouselWidth ? 'hidden': ''} z-30   w-10 h-10 md:w-14 md:h-14 bg-light-constant shadow-md rounded-full text-brand-accent flex justify-center items-center `}
                            onClick={() => {
                                updateIndex(activeIndex + 1);
                            }}
                        >
                            <img src={caretRight} alt="arrow left" className="w-4 h-4 md:w-8 md:h-8"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;