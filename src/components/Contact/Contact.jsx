import React from 'react';
import styles from './Contact.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <div id='contact' className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                {/* Contact Info Section */}
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>
                        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello — feel free to reach out.
                    </p>
                    <p className={styles.contact_address}>
                        <FaMapMarkerAlt /> 181/18, Soi Chenmari, Nai Mueang Subdistrict,<br />
                        Mueang District, Nakhon Ratchasima 30000
                    </p>
                    <p><FaPhone /> (+66) 61-641-4625</p>
                    <p><FaEnvelope /> suchichart.chuttale@gmail.com</p>
                </div>

                {/* Contact Form Section */}
                <div className={styles.contact_form}>
                    <form action="">
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your professional email address"
                            required
                        />

                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Please write your message or inquiry here"
                            required
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
