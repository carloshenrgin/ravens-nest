import Hero from "../components/Hero";
import About from "../components/About";
import { Element } from "react-scroll/modules";

function Home() {
  return (
    <div>
      <Hero />
      <Element name="about-section">
        <About />
      </Element>
    </div>
  );
}

export default Home;
