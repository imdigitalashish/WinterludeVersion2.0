import '../App.css';
import Hero from "../components/sections/Hero";
import ValueProposition from "../components/sections/ValueProposition";
import SocialValidation from "../components/sections/SocialValidation";
import Sponsors from "../components/sections/Sponsors";
function App() {
  
  return (
    <div className='flex flex-col items-center overflow-clip'>
      <Hero/>
      <ValueProposition/>
      {/* <SocialValidation/> */}
      <Sponsors/>
    </div>
  );
}

export default App;
