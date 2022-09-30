import React, {useState, useEffect} from 'react';
import Carousel from './Carousel';
import {getBottomHeroContent} from '../../contentful';

export interface BannerInput {
    header: string;
    subheader: string;
    link: string;
    linkUrl: string;
}
export interface BannerInputs {
    data: BannerInput[];
}
const data: BannerInput[] = [
    {
        heading: 'Learn Something New Every Week in Office Hours!',
        subheading: 'Join our team live to focus on platform best practices and explore features.',
        CTA: 'Register Now',
        CTAUrl: 'http://www.google.com'
    },
    {
        heading: 'Looking for your new customer onboarding training?',
        subheading: 'If you have a redemption code, you can redeem it here, then find the learning path on your dashboard.',
        CTA: 'Redeem My Code',
        CTAUrl: 'http://www.google.com'
    },
    {
        heading: 'NEW! Next-level Training VILT Series',
        subheading: 'Learn how to future-proof your content by using the platform to your advantage.',
        CTA: 'Register Now',
        CTAUrl: 'http://www.google.com'
    },
    {
        heading: 'Check out the newest release details and featured content',
        subheading: 'Join our team live to focus on platform best practices and explore features.',
        CTA: 'Find out more',
        CTAUrl: 'http://www.google.com'
    },
    {
        heading: 'Other news',
        subheading: 'Join our team live to focus on platform best practices and explore features.',
        CTA: 'Find out more',
        CTAUrl: 'http://www.google.com'
    },

]

const AnnouncementBanner = () => {
    const [data, setData] = useState<BannerInput[]>([]);

    useEffect(() => {
        getBottomHeroContent().then(items => {
            console.log('bottomHeroContent', items)
            setData(items)
        })
    }, [])

    return (
        <>
            <Carousel data={data}/>
        </>
    )
}

export default AnnouncementBanner;
