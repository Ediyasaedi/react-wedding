import CoupleInfo from './components/coupleInfo';
import ParticleBackground from './components/particleBackground';
import './App.css';
import { useMediaQuery } from "react-responsive";
import { BigScreen, DesktopOrLaptop, TabletOrMobile } from './reponsiveComp';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
      <div>
      <ParticleBackground />
      <h1>Device Test!</h1>
        {isDesktopOrLaptop && <DesktopOrLaptop />}
        {isBigScreen && <BigScreen />}
        {isTabletOrMobile && <TabletOrMobile />}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}
      </div>
  );
}

export default App;
