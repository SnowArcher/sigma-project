import './css/App.css';
import { NavMenu } from './components/NavMenu';
import { ProgressBar } from './components/ProgressBar';
import { Landing } from './components/Landing';
import { Footer } from "./components/Footer";

function App() {
  return (
  <>
    <NavMenu />
    <ProgressBar />
    <Landing />
    <Footer />
  </>
  );
}

export default App;
