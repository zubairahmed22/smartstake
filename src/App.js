import BannerSection from "./Component/BannerSection";
import CardSection from "./Component/CardSection";
import ProjectSection from "./Component/ProjectSection";
import RoadmapSection from "./Component/RoadmapSection";
import Section_3 from "./Component/Section_3";
import HeaderComponent from "./Component/header";
import FooterSection from "./FooterSection";




function App() {
  return (
    <div className="App">
       {/* <div className="preloader">
        <div className="preloader__inner">
            <div className="preloader__icon">
                <span></span>
                <span></span>
            </div>
        </div>

        
      </div> */}
      <HeaderComponent/>
      <BannerSection/>
      {/* <ProjectSection/> */}
      <CardSection/>
      {/* <TokenCard/> */}
      <Section_3/>
      <RoadmapSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
