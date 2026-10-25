import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">CABRERA BAKERY</p>
          <p>443 W Main Ave, Robstown, TX 78380</p>
          <p><a href="tel:+13615007843">(361) 500-7843</a></p>
        </div>


        <div className="footer-social">
        <p>Check out our Facebook for daily updates! </p>
          <a
            href="https://www.facebook.com/cabrerabakery"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Cabrera Bakery. All rights reserved.</p>
        <p>
          Website by Homestead Web
        </p>
      </div>
    </footer>
  );
}

export default Footer;