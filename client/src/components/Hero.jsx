import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
import "../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="cta-heading">
            Seize Your Destiny. <br /> Start Your Journey.
          </h1>
          <p className="cta-text">
            Ready to embark on your adventure and conquer riches and fame? Use
            our{" "}
            <Link to="/characterbuilder" className="cta-link link">
              character builder
            </Link>{" "}
            to create your hero and customize every detail to best reflect your
            imagination.
          </p>

          <div className="cta-links">
            <Link
              to="/characterbuilder"
              className="btn-primary btn-md link btn"
            >
              Get Started
            </Link>
            <ScrollLink
              className="btn-secondary btn-md link btn"
              to="about-section"
              smooth={true}
              duration={500}
            >
              Learn More
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
