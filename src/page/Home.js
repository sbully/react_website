import React from 'react';
import { Footer } from '.';
import '../App.css';
import { Cards, HeroSection } from '../components/';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
