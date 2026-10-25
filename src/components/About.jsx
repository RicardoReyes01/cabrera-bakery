import { useInView } from '../hooks/useInViews';


function About() {
  const [headingRef, headingVisible] = useInView();
  const [imgRef, imgVisible] = useInView();
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img
            ref={imgRef}
            className={imgVisible ? 'reveal-top visible' : 'reveal-top'}
            src="/images/building.png"
            alt="Cabrera Building"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <h2
            ref={headingRef}
            className={headingVisible ? 'reveal-left visible' : 'reveal-left'}
          >
            Our Story
          </h2>
          <p>
            Cabrera Bakery opened its doors in Robstown in 1944, bringing traditional Mexican baked goods to the local community. What began as a neighborhood bakery grew into a familiar stop for locals.
            Over the years, it became part of the daily routine for generations of families, with its roots firmly planted in Robstown.
          </p>
          <p>
            Whether you're picking up a dozen conchas for the family, celebrating a quinceañera, or stopping by for your usual favorites, we're proud to be part of your everyday moments and biggest celebrations. 
            After more than 80 years, we're still here doing what we love and sharing the flavors that have made Cabrera Bakery a local favorite.
          </p>
          <p className="about-signoff">-The Cabrera Family</p>
        </div>
      </div>
    </section>
  );
}

export default About;