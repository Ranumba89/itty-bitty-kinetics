import './App.css';
import Header from './Components/Header';
import IntroductionSection from './Components/IntroductionSection';
import WelcomeItty from './Components/WelcomeItty';
import WhyChooseUs from './Components/WhyChooseUs';



function App() {
  return (
    <div className="App" >
     <Header/>
     <IntroductionSection/>
     <WelcomeItty/>
     <WhyChooseUs/>
    </div>
  );
}

export default App;
