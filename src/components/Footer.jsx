import { Link } from "react-router-dom";
import { footer, images } from "../data/siteData.js";

function FooterLink({ to, children }) {
  return /^https?:/.test(to) ? (
    <a href={to} target="_blank" rel="noreferrer">{children}</a>
  ) : (
    <Link to={to}>{children}</Link>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {Object.entries(footer).map(([title, links]) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map(([t, to]) => (
                <li key={t}><FooterLink to={to}>{t}</FooterLink></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3>Connect &amp; App</h3>
          <div className="social">
            <a href="#" aria-label="WhatsApp"><img src={images.whatsapp} alt="WhatsApp" /></a>
            <a href="https://www.linkedin.com/company/dream-service-software" target="_blank" rel="noreferrer"><img src={images.linkedin} alt="LinkedIn" /></a>
            <a href="https://www.facebook.com/dreamservicecrm" target="_blank" rel="noreferrer"><img src={images.facebook} alt="Facebook" /></a>
            <a href="https://www.instagram.com/dreamservicesoftware/" target="_blank" rel="noreferrer"><img src={images.instagram} alt="Instagram" /></a>
          </div>
          <h5>Download The App!</h5>
          <div className="stores">
            <a href="https://apps.apple.com/in/app/pestream/id1174328672" target="_blank" rel="noreferrer"><img src={images.appStore} alt="App Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.info.dreampestservices" target="_blank" rel="noreferrer"><img src={images.playStore} alt="Google Play" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>
            <p>© Dream Service Software</p>
            <p>11802 Warfield St. #200, San Antonio, TX 78216</p>
            <p>
              <a href="mailto:team@dreamservicesoftware.com">team@dreamservicesoftware.com</a>{" "}
              <a href="tel:2106950795">210-695-0795</a>
            </p>
          </div>
          <p className="powered">
            Proudly powered by{" "}
            <a href="https://quacito.com/" target="_blank" rel="noreferrer">
              <img src={images.quacito} alt="Quacito" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
