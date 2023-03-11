import './css/App.css';
import { NavMenu } from './components/NavMenu';
import { ProgressBar } from './components/ProgressBar';
import { Landing } from './components/Landing';
import { Footer } from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavMenu />
      <ProgressBar />
      <Landing />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
