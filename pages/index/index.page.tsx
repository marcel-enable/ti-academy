import React from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import FeaturedContent from '../../components/FeaturedContent/FeaturedContent';
import FAQ from '../../components/FAQ/FAQ';
import NavBar from '../../components/Navigation/NavBar';
import { HydratedContentItem } from '@thoughtindustries/content';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
    {/* snap-y snap-proximity overflow-y-scroll max-h-screen */}
      <NavBar />
       <div className="snap-y snap-proximity overflow-y-auto">
        <Hero />
        <Features />
        <FeaturedContent />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
