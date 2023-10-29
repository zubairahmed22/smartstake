import React from 'react'
import BannerSection from "./Component/BannerSection";
import CardSection from "./Component/CardSection";
import RoadmapSection from "./Component/RoadmapSection";
import Section_3 from "./Component/Section_3";



const Home = () => {
  return (
    <div> <BannerSection/>
    {/* <ProjectSection/> */}
    <CardSection/>
    {/* <TokenCard/> */}
    <Section_3/>
    <RoadmapSection/>
    

    </div>
  )
}

export default Home