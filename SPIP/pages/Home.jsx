import { Link } from "react-router-dom";
import PlotCard from "../components/PlotCard";

function Home() {
  const plots = [
    { name: "Green Valley Plot", location: "Bangalore", price: "₹25L", img: "/images/plot1.jpg" },
    { name: "Sunrise Layout", location: "Hyderabad", price: "₹18L", img: "/images/plot2.jpg" },
    { name: "Lake View Plot", location: "Chennai", price: "₹30L", img: "/images/plot3.jpg" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Invest in Smart Plots Online</h1>
          <p>Secure, Verified, and Profitable Land Investment Platform</p>
          <div className="hero-buttons">
            <button>View Plots</button>
            <Link to="/signup">
              <button className="btn-secondary">Sign Up</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Plots */}
      <section className="featured-plots">
        <h2>Featured Plots</h2>
        <div className="plots-grid">
          {plots.map((plot, index) => (
            <PlotCard
              key={index}
              name={plot.name}
              location={plot.location}
              price={plot.price}
              img={plot.img}
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create your free account and complete KYC</p>
          </div>
          <div className="step">
            <h3>2. Choose Plot</h3>
            <p>Select from our verified plots with complete details</p>
          </div>
          <div className="step">
            <h3>3. Invest Online</h3>
            <p>Pay securely and own your investment online</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits">
        <h2>Why Choose SPIP</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Verified Plots</h3>
            <p>All plots are legally verified and approved</p>
          </div>
          <div className="benefit-card">
            <h3>Secure Payments</h3>
            <p>Invest online with fully secure payment gateways</p>
          </div>
          <div className="benefit-card">
            <h3>Transparent Docs</h3>
            <p>Complete transparency with ownership documents</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Investing?</h2>
        <button>Get Started</button>
      </section>
    </div>
  );
}

export default Home;