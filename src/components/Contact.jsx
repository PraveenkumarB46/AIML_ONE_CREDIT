import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
            <div className="contact-details">
              <p><strong>Name:</strong> Praveenkumar B</p>
              <p><strong>Email:</strong> praveenbk1910@gmail.com</p>
              <p><strong>Phone:</strong> +91 9360365826</p>
              <p><strong>Location:</strong> India</p>
              <p><strong>Role:</strong> Professional Stock and Data Trader Analyst</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
