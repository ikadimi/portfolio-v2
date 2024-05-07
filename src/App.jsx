import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import WorkHistory from './features/WorkHistory';
import Home from './features/Home';
import About from './features/About';
import { useRef } from 'react';

function App() {
  const workHistoryRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App relative">
      <Header homeRef={homeRef} aboutRef={aboutRef} workHistoryRef={workHistoryRef} contactRef={contactRef} />
      <main className='flex flex-col'>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <WorkHistory ref={workHistoryRef} />
      </main>
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
