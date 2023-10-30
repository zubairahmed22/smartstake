
import BlogPost from "./Component/BlogPost";
import Home from "./Home";
import HeaderComponent from "./Component/header";
import FooterSection from "./FooterSection";
import Contact from "./Component/Contact";
import { Routes, Route} from "react-router-dom"
import Team from "./Component/Team";
import Staking from "./Staking";
import BuyToken from "./Component/BuyToken";



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
       
      <Routes>
      <Route path="/" element={<Home/>}/>
        
        <Route  path="BlogPost" element={<BlogPost/>}/>
        <Route path="Contact" element={<Contact/> }/>  
        <Route path="Team" element={<Team/>} />  
        <Route path="Staking" element={<Staking/>}/>
        <Route path="BuyToken" element={<BuyToken/>}/>
        
      </Routes>
      <FooterSection/>
    </div>
  );
}

export default App;
