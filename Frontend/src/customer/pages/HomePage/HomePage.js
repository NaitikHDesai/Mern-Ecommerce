import React from 'react'
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { MensKurta } from '../../../Data/MensKurta';
import {mensShoesPage1} from '../../../Data/Shoes';
import { gouns } from '../../../Data/gouns';
import { dressPage1 } from '../../../Data/page1';
import { mens_jeans } from '../../../Data/men_jeans';

function HomePage() {
  return (
    <div>
      <HomeCarousel images={""} />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={MensKurta}  sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mensShoesPage1} sectionName={"Shoes"}/>
        <HomeSectionCarousel data={gouns} sectionName={"Gouns"}/>
        <HomeSectionCarousel data={dressPage1} sectionName={'Dress'}/>
        <HomeSectionCarousel data={mens_jeans}  sectionName={"Men's Jeans"}/>
      </div>
    </div>
  );
}

export default HomePage
