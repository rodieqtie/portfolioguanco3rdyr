import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactReasons = [
  'Student project collaboration and frontend discussions',
  'Portfolio feedback, design suggestions, and code review conversations',
  'Internship interest, freelance opportunities, or networking'
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_id', 'template_id', formData, 'public_key')
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <>
      <Navbar />
      <section className="section fade-in-element">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s Start A Conversation</h1>
        </div>
        <p className="intro">Whether it is a project idea, portfolio feedback, or a student opportunity, I am open to meaningful conversations about growth and collaboration.</p>

        <div className="contact-layout">
          <div className="contact-form premium-panel">
            <span className="eyebrow">Direct Message</span>
            <h2>Send A Note</h2>
            <p className="contact-copy">This form is ready for EmailJS setup. Once the keys are added, it can become a direct contact channel from the live portfolio.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary contact-submit">
                <Send size={18} /> Send Message
              </button>
            </form>
            {status && <p className="status-text">{status}</p>}
          </div>

          <div className="contact-sidebar">
            <div className="card premium-card contact-card">
              <span className="eyebrow">Profile</span>
              <h2>Rod Christian H. Guanco</h2>
              <p>2nd Year BSIT Student at Western Institute of Technology focused on frontend development, project presentation, and continuous growth.</p>
              <div className="contact-points">
                <p><Mail size={16} /> Add your real email here</p>
                <p><Phone size={16} /> Add your real phone number here</p>
                <p><MapPin size={16} /> Iloilo City, Philippines</p>
                <p><Globe size={16} /> Portfolio-ready student developer</p>
              </div>
            </div>

            <div className="card premium-card checklist-card">
              <span className="eyebrow">Best For</span>
              <h3>Reasons To Reach Out</h3>
              <ul className="detail-list">
                {contactReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <div className="card premium-card">
              <span className="eyebrow">Mindset</span>
              <h3>Open To Growth</h3>
              <p>I value feedback, collaboration, and opportunities that help me grow into a stronger developer with better judgment and better presentation.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
