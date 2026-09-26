import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Systems from './components/Systems';
import Trace from './components/Trace';
import Education from './components/Education';
import Human from './components/Human';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Human />
        <Trace />
        <Education />
        <Systems />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
