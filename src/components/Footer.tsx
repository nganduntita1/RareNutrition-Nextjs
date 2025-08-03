'use client';

import { useState } from 'react';
import './Footer.css';


export default function Footer() {
  const [disclaimerVisible, setDisclaimerVisible] = useState(false);

  return (
    <footer className="Footer" id="footer">
      <div className="fade-right"></div>

      <div className="details">
        <h1 className="heading">Contact us</h1>
        <div className="detail_contact">
          <i className="fa-solid fa-phone contact-icon"></i>
          <div className="info">
            <div className="label">Telephone/Whatsapp number</div>
            <span>+27 66 046 3245</span>
          </div>
        </div>
        <div className="detail_contact">
          <i className="fa-solid fa-envelope contact-icon"></i>
          <div className="info">
            <div className="label">Email address</div>
            <span>
              <a href="mailto:info@rarenutrition.co.za">
                info@rarenutrition.co.za
              </a>
            </span>
          </div>
        </div>
        <div className="socials">
          <a style={{ color: 'white' }}
            href="https://www.facebook.com/profile.php?id=61558079447811&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook"></i> Follow us on Facebook

          </a>
        </div>
        <br />
        <span className="extra-info">
          
          <span
            className="disclaimer"
            onClick={() => {
              setDisclaimerVisible(true);
            }}
          >
            <span>Disclaimer</span>
          </span>
          <span>
            {disclaimerVisible ? (
              <div className="disclaimer-cover" onClick={() => setDisclaimerVisible(false)}>
                <i
                  className="fa-solid fa-xmark close"
                  onClick={() => {
                    setDisclaimerVisible(false);
                  }}
                ></i>
                <div className="disclaimer-container" onClick={(e) => e.stopPropagation()}>
                  <h4>Disclaimer</h4>
                  <p>
                    All statements on this site have not been evaluated by the
                    South Africa Health Products Regulatory Authority (SAHPRA).
                    These products are not intended to diagnose, treat, cure or
                    prevent any disease. This website contains general
                    information about assisting medical conditions. This
                    information should not be considered as advice, and should
                    not be treated as such Kindly consult your health provider
                    for any advice for medical conditions
                  </p>
                </div>
              </div>
            ) : null}
          </span>
        </span>
      </div>
    </footer>
  );
}