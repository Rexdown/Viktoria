import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import HeaderContacts from './components/HeaderContacts/HeaderContacts';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Events from './components/Events/Events';

import leafOne from '../src/assets/imgs/leaf_1.png'
import leafTwo from '../src/assets/imgs/leaf_2.png'
import leafThree from '../src/assets/imgs/leaf_3.png'
import leafFour from '../src/assets/imgs/leaf_4.png'
import leafFive from '../src/assets/imgs/leaf_5.png'
import leafSix from '../src/assets/imgs/leaf_6.png'
import leafSeven from '../src/assets/imgs/leaf_7.png'
import leafEight from '../src/assets/imgs/leaf_8.png'
import leafNine from '../src/assets/imgs/leaf_9.png'
import leafTen from '../src/assets/imgs/leaf_10.png'
import leafEleven from '../src/assets/imgs/leaf_11.png'
import leafTwelve from '../src/assets/imgs/leaf_12.png'
import leafThirteen from '../src/assets/imgs/leaf_13.png'
import leafFourteen from '../src/assets/imgs/leaf_14.png'
import leafFifteen from '../src/assets/imgs/leaf_15.png'

import './App.scss';
import Application from './components/Application/Application';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <img src={leafOne} alt='leaf' className='App-leafOne'></img>
      <img src={leafTwo} alt='leaf' className='App-leafTwo'></img>
      <img src={leafThree} alt='leaf' className='App-leafThree'></img>
      <img src={leafFour} alt='leaf' className='App-leafFour'></img>
      <img src={leafFive} alt='leaf' className='App-leafFive'></img>
      <img src={leafSix} alt='leaf' className='App-leafSix'></img>
      <img src={leafSeven} alt='leaf' className='App-leafSeven'></img>
      <img src={leafEight} alt='leaf' className='App-leafEight'></img>
      <img src={leafNine} alt='leaf' className='App-leafNine'></img>
      <img src={leafTen} alt='leaf' className='App-leafTen'></img>
      <img src={leafEleven} alt='leaf' className='App-leafEleven'></img>
      <img src={leafTwelve} alt='leaf' className='App-leafTwelve'></img>
      <img src={leafThirteen} alt='leaf' className='App-leafThirteen'></img>
      <img src={leafFourteen} alt='leaf' className='App-leafFourteen'></img>
      <img src={leafFifteen} alt='leaf' className='App-leafFifteen'></img>

      <Header />
      <HeaderContacts />
      <HeaderSlider />
      <AboutUs />
      <Services />
      <Reviews />
      <Events />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
