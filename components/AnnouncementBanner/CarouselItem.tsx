import React from 'react';
import { BannerInput} from './AnnouncementBanner'

const COLORS = ['#D8417A', '#56A0B5', '#90759B', '#989625'];

const CarouselItem = (props: {item:BannerInput, idx:number, computedClass:string} ) => {
    const color = COLORS[props.idx%COLORS.length];
    return (
      <div 
        style={{backgroundColor: `${color}`}}
        className={`transition-opacity duration-700 ease-in-out ${props.computedClass} bg-[url('../../renderer/pattern.svg')] md:bg-[url('../../renderer/patternMd.svg')] lg:bg-[url('../../renderer/patternLg.svg')] xl:bg-[url('../../renderer/patternXl.svg')] bg-no-repeat bg-left bg-contain whitespace-pre-line absolute top-0 left-0 w-full h-full bg-brand-primary flex-col justify-center items-start p-10 gap-6`}
        >
            <div className="item-text-container h-full flex flex-col justify-start items-start gap-4 self-stretch grow">
                <div className="item-text-heading text-light-constant font-primary font-bold text-xl lg:font-secondary lg:font-semibold lg:text-3xl xl:text-4xl">
                    {props.item.header}
                </div>
                <div className="item-text-subheading text-light-constant font-primary font-normal text-base xl:text-lg">
                    {props.item.subheader}
                </div>
            </div>
            
            <div className="item-link-container flex flex-row items-center gap-2 text-light-constant">
                <a className="item-link font-primary font-medium text-base flex flex-row gap-2" href={props.item.linkUrl}>
                    {props.item.link}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 12H20.25" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                    </svg>
                </a>
            </div>
      </div>
    );
  };

  export default CarouselItem;