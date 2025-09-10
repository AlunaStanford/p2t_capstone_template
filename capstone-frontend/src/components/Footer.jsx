import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>

        <form id="contactForm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      <p>&copy; {currentYear} Aluna Stanford "Forever Luxury" e-commerce</p>
    </footer>
  );
};

export default Footer;


{/* const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <h2>Footer (c) {currentYear}</h2>
    </footer>
  )
} */}