import React from 'react'
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from '../components/HomeCarousel/HomeSectionCarousel';
import { MensKurta } from '../../Data/MensKurta';

function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={MensKurta} sectionName="Men's Kurta" />
        <HomeSectionCarousel data={MensKurta} sectionName="Shirt's" />
        <HomeSectionCarousel data={MensKurta} sectionName="Saree" />
        <HomeSectionCarousel data={MensKurta} sectionName="Dress" />
        <HomeSectionCarousel data={MensKurta} sectionName="Men's Shoes" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default HomePage;
