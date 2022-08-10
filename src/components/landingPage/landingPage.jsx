import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Body from '../body/body';
import Footer from '../footer/footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Body />
      <Footer />
    </>
  );
};

export default LandingPage;
