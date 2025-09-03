import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
