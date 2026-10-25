function Visit() {
  return (
    <section className="container visit" id="visit">
      <h2>Visit Us</h2>
      <div className="visit-grid">
        <div>
          <h3>Hours</h3>
          <ul className="hours">
            <li><span>Monday</span><span>Closed</span></li>
            <li><span>Tuesday</span><span>Closed</span></li>
            <li><span>Wednesday</span><span>9:00 AM – 5:00 PM</span></li>
            <li><span>Thursday</span><span>9:00 AM – 5:00 PM</span></li>
            <li><span>Friday</span><span>9:00 AM – 5:00 PM</span></li>
            <li><span>Saturday</span><span>10:00 AM – 5:00 PM</span></li>
            <li><span>Sunday</span><span>9:00 AM – 1:00 PM</span></li>
          </ul>
          <p>443 W Main Ave, Robstown, TX 78380</p>
        </div>
        <iframe
          title="Cabrera Bakery location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.599857222304!2d-97.67788002394744!3d27.79130102178258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86687c6d22e64049%3A0xe2e1c9b3f45d71a2!2sCabrera%20Bakery!5e0!3m2!1sen!2sus!4v1792871187444!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Visit;