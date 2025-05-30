import Hero from "./components/Hero";
import PortfolioSlider from "./components/PortfolioSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <PortfolioSlider />
    </>
  );
};

export default Home;
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <AboutSection />
    </>
  );
}
