import React, {Component} from 'react'
import './index.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-newsletter">
          <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
          <p className="footer-description">
            Sign up for updates from mettä muse.
          </p>
          <div className="newsletter-input-container">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="newsletter-input"
            />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="footer-subheading">CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="footer-subheading">CURRENCY</h3>
          <p>
            <span role="img" aria-label="flag">
              🇺🇸
            </span>{' '}
            USD
          </p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-subheading">mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-subheading">QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h3 className="footer-subheading">FOLLOW US</h3>
          <div className="social-icons">
            <span>🔗</span>
            <span>🔗</span>
          </div>
          <h3 className="footer-subheading">mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <span>Google Pay</span>
            <span>Visa</span>
            <span>MasterCard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
