import ParticleBackground from './components/particleBackground';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMediaQuery } from "react-responsive";
import { BigScreen, DesktopOrLaptop, TabletOrMobile } from './reponsiveComp';


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
      <div>
      <ParticleBackground />
        {isDesktopOrLaptop && <DesktopOrLaptop />}
        {isTabletOrMobile && <TabletOrMobile />}
      </div>
  );
}

export default App;
