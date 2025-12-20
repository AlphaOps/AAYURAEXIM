import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <div className="contact-info-panel">
                    <h2>Get an Export Quote</h2>
                    <p>
                        Ready to source high-quality products from India? Fill out the form, and our export team will get back to you within 24 hours.
                    </p>
                    <div className="contact-details-box">
                        <div className="detail-item">
                            <strong>WhatsApp / Call</strong>
                            <span>+91 98508 47425</span>
                        </div>
                        <div className="detail-item">
                            <strong>Email</strong>
                            <span>export@aayuraexim.com</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-panel">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" placeholder="Your Business Ltd." required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" placeholder="USA / UAE / UK" required />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="tel" placeholder="+1 ..." required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Product Interest</label>
                            <select>
                                <option>Select Product</option>
                                <option>Spices</option>
                                <option>Fresh Vegetables</option>
                                <option>Dehydrated Products</option>
                                <option>Rice & Beans</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message / Requirements</label>
                            <textarea rows="4" placeholder="Specific requirements, quantity, etc."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Request Quote</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
