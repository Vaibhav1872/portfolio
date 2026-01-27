import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log("SUCCESS!", result.text);
                alert("Message Sent Successfully!");
                e.target.reset(); 
            }, (error) => {
                console.error("FAILED...", error);
                alert(`Failed to send: ${error.text || "Check console for details"}`);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="heading">Get In <span>Touch</span></h2>
            
            <div className="contact-card">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>I am currently looking for new opportunities as a <strong>Full-Stack Developer</strong>.</p>
                    
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <a href="mailto:bangarvaibhav1872@gmail.com">bangarvaibhav1872@gmail.com</a>
                    </div>

                    <div className="info-item">
                        <span className="info-label">Phone:</span>
                        <a href="tel:+919146691458">+91 91466 91458</a>
                    </div>
                    
                    <div className="info-item">
                        <span className="info-label">Location:</span>
                        <span>Pune, Maharashtra</span>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="input-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>
                    {/* NEW: Phone Number Input Field */}
                    <div className="input-group">
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="input-group">
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;