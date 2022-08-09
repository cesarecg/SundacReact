import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Translate from '../components/sections/TranslateButton';

import '../i18n'
const Home = () => {

  return (
    <>  
    
      <Hero className="illustration-section-01" /> 
      <Translate/>
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
    </>
  );
}

export default Home;