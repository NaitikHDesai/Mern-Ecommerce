import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { MensKurta } from '../../../Data/MensKurta';

function HomePage() {
  return (
    <div>
      <HomeCarousel images={""} />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={MensKurta}  sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={MensKurta} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data={MensKurta} sectionName={"Men's shoes"}/>
        <HomeSectionCarousel data={MensKurta} sectionName={'Saree'}/>
        <HomeSectionCarousel data={MensKurta}  sectionName={"Women's Dress"}/>
      </div>
    </div>
  );
}

export default HomePage
