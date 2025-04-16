
import '../css/Footer.css'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Naveen Kumar</h2>
            <p className="footer-tagline">Creating beautiful digital experiences</p>
            <div className="social-links">
              <a href="https://github.com/yourusername" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/yourusername" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://instagram.com/yourusername" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
              <a href="mailto:youremail@example.com" aria-label="Email">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="links-title">Quick Links</h3>
            <ul className="links-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/projects" className="footer-link">Projects</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-text">Subscribe to my newsletter for the latest updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Naveen. All rights reserved.
          </p>
          <div className="legal-links">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <span className="link-divider">|</span>
            <Link href="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}