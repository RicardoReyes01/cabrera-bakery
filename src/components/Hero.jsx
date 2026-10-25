import Slider from "./Slider";

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-text">
        <h1 className="hero-header slide-down">A Taste of Home, Baked Fresh.</h1>
        <p className="hero-p">Cabrera Bakery has been a part of Robstown, Texas, since 1944, serving up traditional Mexican pan dulce, donuts, and a variety of other sweet treats. Whether you're stopping in for your favorite pan dulce, grabbing a box to share with family, or picking up something for the road, there's always something good waiting for you. For generations, Cabrera Bakery has been a familiar part of the community, bringing people together over the baked goods they know and love.</p>
        <div className="hero-buttons">
          <a href="tel:+1361-500-7843" className="btn">Call Us</a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Cabrera+Bakery+Robstown+TX"
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
      <div className="hero-image">
        <Slider/>
      </div>
    </section>
  );
}

export default Hero;