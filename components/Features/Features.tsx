import React, {useState, useEffect, useRef} from 'react';
import featureImage1 from '../../renderer/featureImage1.svg';
import featureImage2 from '../../renderer/featureImage2.svg';
import featureImage3 from '../../renderer/featureImage3.svg';
import learn from '../../renderer/learn.svg';
import attend from '../../renderer/attend.svg';
import stayUpdated from '../../renderer/stayUpdated.svg';
import {getAllFeatures} from '../../contentful';
import { Slide } from "react-awesome-reveal";
import { useInView } from 'react-intersection-observer';

interface FeaturesInput {
    header: string;
    subheader: string;
    link: string;
    linkUrl: string;
    image: {
        fields: {
            file: {
                url: string;
                fileName: string;
            }
        }
    }
}

const Features = () => {
    const [data, setData] = useState<FeaturesInput[] | null>(null);
    const { ref: learnRef, inView: learnVisible } = useInView({threshold: 0.8, triggerOnce: true});
    const { ref: attendRef, inView: attendVisible } = useInView({threshold: 0.8, triggerOnce: true});
    const { ref: stayUpdatedRef, inView: stayUpdatedVisible } = useInView({ threshold: 0.8, triggerOnce: true});

    useEffect(() => {
        getAllFeatures().then(response => {
            console.log(response)
            setData(response);
        })
    }, [])
    

  return (
    <>
        {data && data.length > 0 &&
        <>
            <div ref={learnRef} className="h-[100vh] self-stretch flex flex-col items-center justify-center gap-20 md:gap-14 lg:gap-12 lg:flex-row xl:gap-20 snap-start snap-always">
                
                <div className={`learn-text relative order-first lg:order-last`}>
                    <img src={learn} alt="Learn" className={`opacity-0 ${learnVisible? 'animate-slideDown': ''} hidden lg:block absolute lg:-top-7 lg:left-9 xl:-top-9 xl:left-5`} />
                    <div className={`opacity-0 ${learnVisible? 'animate-slideLeft lg:animate-slideRight': ''} relative flex flex-col items-start gap-4 w-[273px] md:gap-6 md:w-[366px] xl:w-[442px]`}>
                        <div className="font-secondary font-semibold text-color-primary text-2xl md:text-3xl lg:text-5xl ">
                            {data[2].header}
                        </div>
                        <div className="font-primary font-normal text-color-secondary text-base md:text-xl">
                            {data[2].subheader}
                        </div>
                        <div className="flex flex-row gap-2 group">
                            <a className="text-brand-accent font-primary font-medium flex flex-row gap-2" href={data[2].linkUrl}>
                                {data[2].link}
                                <svg className="group-hover:translate-x-2 transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
               
                <div className="learn-images relative flex justify-center max-w-[90%] w-[355px] ">
                    <img src={learn} alt="Learn" className={`opacity-0 ${learnVisible? 'animate-slideDown': ''} absolute top-[0px] left-[0px] md:left-[0px] md:-top-7 lg:hidden lg:-top-7 lg:left-9 xl:-top-9 xl:left-5 z-0`} />
                    <img src={'https:'+ data[2].image.fields.file.url} alt="Group of people learning in-front of a monitor" className={`opacity-0 ${learnVisible? 'animate-fadeIn': ''} relative max-w-[314px] h-[252px] md:w-[314px] md:h-[252px] lg:w-[400px] lg:h-[328px] xl:w-[443px] xl:h-[356px] z-10`}/>
                </div>
            </div>
            
            
            <div ref={attendRef} className="h-[100vh] self-stretch flex flex-col items-center justify-center snap-start snap-always gap-20">
                <div className="relative flex flex-col items-center justify-center gap-20  md:gap-14 md:w-[472px] lg:gap-12 lg:flex-row lg:w-[924px] xl:gap-20 xl:w-[1032px]">
                    <div className={`opacity-0 ${attendVisible? 'animate-slideLeft': ''} attend-text z-10`}>                    
                        <div className="relative flex flex-col items-start gap-4 w-[273px] md:gap-6 md:w-[366px] xl:w-[442px]">
                            <div className="font-secondary font-semibold text-color-primary text-2xl md:text-3xl lg:text-5xl ">
                            {data[0].header}
                            </div>
                            <div className="font-primary font-normal text-color-secondary text-base md:text-xl">
                            {data[0].subheader}
                            </div>
                            <div className="flex flex-row gap-2 group">
                                <a className="text-brand-accent font-primary font-medium flex flex-row gap-2" href={data[0].linkUrl}>
                                {data[2].link}
                                    <svg className="group-hover:translate-x-2 transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 12H20.25" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                        <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="attend-images relative flex justify-center max-w-[90%] w-[355px] z-10">
                        <img src={'https:'+ data[0].image.fields.file.url} alt="Two women infront of a laptop" className={`opacity-0 ${attendVisible? 'animate-fadeIn': ''} relative max-w-[314px] h-[252px] md:w-[314px] md:h-[252px] lg:w-[400px] lg:h-[328px] xl:w-[443px] xl:h-[356px] z-10`}/>
                    </div>
                    <img src={attend} alt="Attend" className={`opacity-0 ${attendVisible? 'animate-slideDown': ''} absolute top-0 left-1/4  md:left-[0px] md:translate-x-0 lg:-top-1/4 z-0`} />
                </div>
            </div>

            <div ref={stayUpdatedRef} className="h-[100vh] self-stretch flex flex-col items-center justify-center gap-20 md:gap-14 lg:gap-12 lg:flex-row xl:gap-20 snap-start snap-always">
                <div className="stay-updated-text relative order-first lg:order-last z-10">
                    <img src={stayUpdated} alt="Stay Updated" className={`opacity-0 ${stayUpdatedVisible? 'animate-slideDown': ''} hidden lg:block absolute lg:w-[423px] lg:h-[190px] lg:-top-[91px] lg:-left-1 xl:h-[215px] xl:-top-[116px] xl:left-5`} />
                    <div className={`opacity-0 ${stayUpdatedVisible? 'animate-slideLeft lg:animate-slideRight': ''} relative flex flex-col items-start gap-4 w-[273px] md:gap-6 md:w-[366px] xl:w-[442px]`}>
                        <div className="font-secondary font-semibold text-color-primary text-2xl md:text-3xl lg:text-5xl ">
                            {data[1].header}
                        </div>
                        <div className="font-primary font-normal text-color-secondary text-base md:text-xl">
                            {data[1].subheader}
                        </div>
                        <div className="flex flex-row gap-2 group">
                            <a className="text-brand-accent font-primary font-medium flex flex-row gap-2" href={data[1].linkUrl}>
                                {data[1].link}
                                <svg className="group-hover:translate-x-2 transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="stay-updated-images relative flex justify-center max-w-[90%] w-[369px] md:w-[423px] xl:w-[479px]">
                    <img src={stayUpdated} alt="Stay Updated" className={`opacity-0 ${stayUpdatedVisible? 'animate-slideDown': ''} absolute h-[215px] -top-[100px] left-[0px] md:h-[190px] md:-top-[80px] md:left-[0px] lg:hidden lg:-top-7 lg:left-9 xl:-top-9 xl:left-5 z-0`} />
                    <img src={'https:'+ data[1].image.fields.file.url} alt="A woman infront of a laptop" className={`opacity-0 ${stayUpdatedVisible? 'animate-fadeIn': ''} relative max-w-[314px] h-[252px] md:w-[314px] md:h-[252px] lg:w-[400px] lg:h-[328px] xl:w-[443px] xl:h-[356px] z-10`}/>
                </div>
            </div>  
        </>
        }
    </>
  );
};

export default Features;