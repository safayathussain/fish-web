import './App.css';
import BlueFoodEcoSystem from './components/BlueFoodEcosystem/BlueFoodEcoSystem';
import CommercePage from './components/CommercePage/CommercePage';
import Footer from './components/Footer/Footer';
import HelpPage from './components/HelpPage/HelpPage';
import Navbar from './components/Navbar/Navbar';
import PartnerPage from './components/PartnerPage/PartnerPage';
import PressPage from './components/PressPage/PressPage';
import TopBanner from './components/TopBanner/TopBanner';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <TopBanner></TopBanner>
      <BlueFoodEcoSystem></BlueFoodEcoSystem>
      <CommercePage></CommercePage>
      <PartnerPage></PartnerPage>
      <HelpPage></HelpPage>
      <PressPage></PressPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
