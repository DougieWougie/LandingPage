import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
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
        <FeaturedLinks />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
