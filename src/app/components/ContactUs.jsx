import '../css/Contact.css'

import {useState} from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'; // Icons for contact details
import SectionBox from './NameComponent';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };
  return (
    <>
    <SectionBox title={"Contact Us"} description={"Get in touch with me for collaborations or inquiries."} borderColor={"#9b59b6"} />
    <div className="contact-page slide-top">
      <div className="contact-container slide-top">

        <div className="contact-details slide-left">
          <h2 className='heading-ct'>Drop a Message!</h2>
          <p className='descct'>Get in touch and let me know if i can help! Fill out the form and I'll be in touch as soon as possible</p>
          <div className="detail-item">
            <FaEnvelope className="icon-ct" />
            <div className="ct-ct">
            <h2>Email :</h2>
            <p><a href="mailto:naveenpoolakuntla09@gmail.com">naveenpoolakuntla09@gmail.com</a></p>
            </div>
          </div>
          <div className="detail-item">
            <FaPhone className="icon-ct" />
            <div className="ct-ct">
              <h2>Phone :</h2>
              <p><a href="tel:+919676238249">+91 9676238249</a></p>
            </div>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="icon-ct" />
            <div className="ct-ct">
              <h2>Address :</h2>
              <p>Madanapalle, Andhra Pradesh, India - 517325</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/naveen-kumar-aaa985252/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Naveenpy2001" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>

        <div className="contact-form slide-right">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
            <p className="status">{status}</p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;