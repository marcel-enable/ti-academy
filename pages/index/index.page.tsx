import React, {useRef} from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import FAQ from '../../components/FAQ/FAQ';
import NavBar from '../../components/Navigation/NavBar';
import { HydratedContentItem } from '@thoughtindustries/content';
import useScrollSnap from 'react-use-scroll-snap';
export { Page };
export { documentProps };

const documentProps = {
  title: 'TI Academy',
  description: 'Though Industries Academy'
};

function Page() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });
  return (
    <>
      <NavBar />
       <div ref={scrollRef}>
        <Hero />
        <Features />
        <FeaturedContent />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
