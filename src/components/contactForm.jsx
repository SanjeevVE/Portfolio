import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    linkedin: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xzzdlkny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thankyou for your feedback!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          linkedin: '',
          message: '',
        });
      } else {
        setStatus('Failed to send email. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 px-4">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3  px-4">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3  px-4">
        <input
          type="tel"
          name="contact"
          className="form-control"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3  px-4">
        <input
          type="text"
          name="linkedin"
          className="form-control"
          placeholder="Your LinkedIn ID"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3  px-4">
        <textarea
          name="message"
          className="form-control"
          rows="3"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-warning w-100">
        Submit Button
      </button>
      {status && <p className="text-light mt-3">{status}</p>}
    </form>
  );
};

export default ContactForm;
