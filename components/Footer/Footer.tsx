import React, {useState, useEffect} from 'react';
import footerLogo from '../../renderer/footerLogo.svg';
import {getFooterDetails, getFooterSocialLinks, getFooterQuickLinks} from '../../contentful';

interface FooterDetails {
  copyright:string;
}
interface FooterSocialLinks {
  header: string;
  link1: string;
  link1Url: string;
  link2:string;
  link2Url:string;
  link3: string;
  link3Url: string;
}
interface FooterQuickLinks {
  header: string;
  link1: string;
  link1Url: string;
  link2:string;
  link2Url:string;
  link3: string;
  link3Url: string;
  link4: string;
  link4Url: string
}

const Footer = () => {
  const [footerDetails, setFooterDetails] = useState<FooterDetails | null>(null);
  const [footerSocialLinks, setFooterSocialLinks] = useState<FooterSocialLinks | null>(null);
  const [footerQuickLinks, setFooterQuickLinks] = useState<FooterQuickLinks | null>(null);

  useEffect(() => {
    getFooterDetails().then(response => {
      setFooterDetails(response);
    })
  
    getFooterSocialLinks().then(response => {
      setFooterSocialLinks(response)
    })
  
    getFooterQuickLinks().then(response => {
      setFooterQuickLinks(response)
    })
  }, [])
  return (
    <>
      <div className="flex flex-col items-start self-stretch p-0 h-[709px] md:h-[472px] lg:h-[632px] lg:p-16 snap-center">
        <div className="footer-container bg-brand-muted h-full w-full flex flex-col gap-20 p-12 rounded-t-[32px] lg:rounded-[32px] md:p-16 lg:p-20 ">
          <div className="details flex flex-col gap-20 md:flex-row md:justify-between">
            <div className="logo flex flex-col items-start gap-6 xl:flex-row xl:justify-between xl:w-[50%]">
              <img src={footerLogo} alt="Though Industries Logo" className="h-[54px] w-[160px]"/>
              <div className="address font-primary font-normal text-lg text-light-constant w-[223px]">
                33 Broad St STE 500, Boston, MA 02109, USA
              </div>
            </div>
            <div className="links flex items-start justify-between gap-6 lg:gap-20 md:w-[255px] lg:w-[311px]">

              {footerQuickLinks &&
              <div className="quick-link flex flex-col items-start gap-6">
                <h3 className="font-primary font-bold text-lg text-light-constant">{footerQuickLinks.header}</h3>
                <a href={footerQuickLinks.link1Url} className="font-primary font-normal text-lg text-light-constant">{footerQuickLinks.link1}</a>
                <a href={footerQuickLinks.link2Url} className="font-primary font-normal text-lg text-light-constant">{footerQuickLinks.link2}</a>
                <a href={footerQuickLinks.link3Url} className="font-primary font-normal text-lg text-light-constant">{footerQuickLinks.link3}</a>
                <a href={footerQuickLinks.link4Url} className="font-primary font-normal text-lg text-light-constant">{footerQuickLinks.link4}</a>
              </div>
              }
              {footerSocialLinks && 
              <div className="social-links flex flex-col items-start gap-6">
                <h3 className="font-primary font-bold text-lg text-light-constant">{footerSocialLinks.header}</h3>
                <a href={footerSocialLinks.link1Url} className="font-primary font-normal text-lg text-light-constant">{footerSocialLinks.link1}</a>
                <a href={footerSocialLinks.link2Url} className="font-primary font-normal text-lg text-light-constant">{footerSocialLinks.link2}</a>
                <a href={footerSocialLinks.link3Url} className="font-primary font-normal text-lg text-light-constant">{footerSocialLinks.link3}</a>
              </div>
              }
            </div>
          </div>
          <div className="copy font-primary font-normal text-lg text-light-constant">
            {
              footerDetails?.copyright
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
