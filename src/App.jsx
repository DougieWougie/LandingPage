import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { ForageCta } from './components/ForageCta';
import { FeaturedLinks } from './components/FeaturedLinks';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <ForageCta />
        <FeaturedLinks />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
