import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // EmailJS configuration - Replace these with your actual EmailJS credentials
    // You can find these in your EmailJS dashboard (https://dashboard.emailjs.com/admin)
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your service ID
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your template ID
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your public key
    
    // Validate EmailJS credentials
    if (serviceId === 'YOUR_EMAILJS_SERVICE_ID' || 
        templateId === 'YOUR_EMAILJS_TEMPLATE_ID' || 
        publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      console.error('Error: Please configure your EmailJS credentials in Contact.js');
      setStatus({
        submitted: true,
        submitting: false,
        info: { 
          error: true, 
          msg: 'Contact form is not configured yet. Please contact me directly at jeeviselvip2005@gmail.com' 
        }
      });
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setStatus({
          submitted: true,
          submitting: false,
          info: { 
            error: false, 
            msg: 'Thank you for your message! I will get back to you soon.' 
          }
        });
        
        // Reset form
        setFormData({
          from_name: "",
          reply_to: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({
            ...prev,
            submitted: false,
            info: { error: false, msg: null }
          }));
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        let errorMessage = 'Something went wrong. Please try again later or contact me directly at jeeviselvip2005@gmail.com';
        
        // More specific error messages based on common issues
        if (error.text) {
          try {
            const errorData = JSON.parse(error.text);
            if (errorData.error) {
              errorMessage = `Error: ${errorData.error}`;
            }
          } catch (e) {
            // If we can't parse the error, use the default message
          }
        }
        
        setStatus({
          submitted: true,
          submitting: false,
          info: { 
            error: true, 
            msg: errorMessage
          }
        });
        
        // Log detailed error information to console
        console.group('EmailJS Error Details');
        console.log('Status:', error.status);
        console.log('Status Text:', error.text);
        console.log('Service ID:', serviceId);
        console.log('Template ID:', templateId);
        console.groupEnd();
      });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Feel free to reach out to me for any questions or opportunities.
        </p>

        <Row style={{ justifyContent: "center", padding: "20px 0" }}>
          <Col md={5} className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <AiOutlineMail />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>jeeviselvip2005@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <AiOutlinePhone />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 9344629953</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <AiOutlineEnvironment />
                </div>
                <div>
                  <h5>Location</h5>
                  <p>Namakkal, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={7} className="contact-form">
            {status.info.msg && (
              <Alert variant={status.info.error ? "danger" : "success"}>
                {status.info.msg}
              </Alert>
            )}
            
            <Form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="px-1">
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="px-1">
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="reply_to"
                      value={formData.reply_to}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                />
              </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit"
                disabled={status.submitting}
                className="send-message-btn"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
