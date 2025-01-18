import './App.css';
import AreasOfSpecialty from './Components/AreasOfSpecialty';
import Header from './Components/Header';
import IntroductionSection from './Components/IntroductionSection';
import WeDo from './Components/WeDo';
import WelcomeItty from './Components/WelcomeItty';
import WhyChooseUs from './Components/WhyChooseUs';



function App() {
  return (
    <div className="App" >
     <Header/>
     <IntroductionSection/>
     <WelcomeItty/>
     <WhyChooseUs/>
     <AreasOfSpecialty/>
     <WeDo/>
    </div>
  );
}

export default App;
