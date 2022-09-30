import React, {useState, useEffect} from 'react';
import hero from '../../renderer/HeroImage.svg';
import waves from '../../renderer/waves.svg';
import academy from '../../renderer/academyBlock.svg';
import AnnouncementBanner from '../AnnouncementBanner/AnnouncementBanner';
import {getTopHeroContent} from '../../contentful';
import AnimatedText from './AnimatedText';

interface HeroData {
  header: string;
  subheader: string;
}

const Hero = () => {
  const [data, setData] = useState<HeroData[] | []>([]);

  useEffect(() => {
    getTopHeroContent().then(data => {
      
      setData(data)
    });
  }, [])

  return (
    <>
      <div className=" h-[1197px] md:h-[890px] lg:h-[977px] xl:h-[1112px] w-full z-0 pb-20 ">
        <div className="hero-container h-[837px] md:h-[570px] lg:min-h-[697px] xl:min-h-[752px] relative bg-brand-secondary-light py-10 px-12 md:px-16 lg:px-20 -mb-[100px]">
          <img src={waves} className="z-10 waves w-full absolute bottom-0 left-0 right-0 h-[288px] md:h-[200px] object-cover" />
          <img src={academy} className="z-10 academy absolute right-4 bottom-5 w-[206px] h-[402px] md:w-[185px] md:h-[336px] md:bottom-[63px] md:right-[17px] lg:w-[266.98px] lg:h-[521px] lg:top-[74px] lg:bottom-[22px] xl:w-[350px] xl:h-[683px] xl:right-[40px] xl:bottom-[19px]" />
          <div className="hero-section relative h-full justify-between text-left flex flex-col md:flex-row gap-10">
            <div className="hero-text-container md:w-[333px] lg:w-[500px] xl:w-[540px] flex flex-col justify-center items-start ">
              <div className="hero-text-wrapper w-full flex flex-col justify-end items-start gap-6">
                <div className="hero-text w-full flex flex-col items-start gap-4 min-h-[150px]">
                  {data.length > 0 && 
                    <AnimatedText style={"min-h-[72px] md:min-h-[162px] text-2xl md:text-4xl lg:text-5xl font-secondary font-semibold text-text-color-primary"} wordsToAnimate={data.map((item => item.header))}/>
                  }
                  {data.length > 0 && 
                    <div className={"text-base md:text-xl font-primary text-text-color-primary"}>{data[0].subheader}</div>
                  }
                </div>
                <a href={"https://academy.thoughtindustries.com/pages/sign-in"} className="my-auto items-center bg-brand-primary-light hover:bg-brand-primary text-white font-primary font-semibold shadow-sm rounded-full py-2.5 px-4 md:py-3 md:px-5 lg:py-3.5 lg:px-6 ">
                  Sign in
                </a>
              </div>
            </div>
            <div className="hero-image-container h-full flex items-end">
              
            </div>
            <img src={hero} alt="smiling person" className="hero-image absolute object-cover bottom-0 right-0 z-0 w-[386px] h-[386px] md:w-[390px] md:h-[390px] lg:w-[480px] lg:h-[480px] xl:w-[600px] xl:h-[600px]"/>
          </div>
        </div>

        <AnnouncementBanner />
      </div>
    </>
    
  );
};

export default Hero;
