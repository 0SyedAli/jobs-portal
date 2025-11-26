"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        zipCode: "",
        company: "",
        jobTitle: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
    };

    return (
        <>
            <Navbar />
            <div className="contact-wrapper">
                {/* Hero Section */}
                <div className="contact-hero">
                    <h1>Contact Us</h1>
                </div>

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left Side */}
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h2>The Benefits Of Building Your Resume With Us</h2>
                                <p className="mb-3">
                                    Creating a strong resume is the first step toward unlocking new opportunities. At People Index Hub we help you highlight your strengths present your experience with clarity and showcase your full potential to employers. Our goal is to make sure your resume reflects who you are what you can achieve and the value you bring to every professional environment.
                                </p>
                                <p>A polished resume gives you a competitive advantage increases visibility in hiring searches and positions you as a confident applicant.</p>
                                <div className="row">
                                    <div className="col-lg-5 contact-info">
                                        <Image src="/images/phone.png" className="object-fit-contain mb-2" width={25} height={25} alt="" />
                                        <h5>Call for inquiry</h5>
                                        <p className="contact-detail">214-475-6331</p>
                                    </div>

                                    <div className="col-lg-5 contact-info">
                                        <Image src="/images/email.png" className="object-fit-contain mb-2" width={25} height={25} alt="" />
                                        <h5>Send us an email</h5>
                                        <p className="contact-detail">info@thewellnessprojectllc.com</p>
                                    </div>

                                    <div className="contact-info">
                                        <Image src="/images/location.png" className="object-fit-contain mb-2" width={25} height={25} alt="" />
                                        <h5>Address</h5>
                                        <p>414 W. Parkway Street 1st Floor Denton TX 76201</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <div className="text-center">
                                        <h4 className="mb-3">Contact Info</h4>
                                        <p>Nibh dis faucibus proin lacus tristique</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-4 mb-4">
                                            <div className="col-md-6">
                                                <label className="form-label">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstName"
                                                    placeholder="Your name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your last name"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Your E-mail address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Your Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Zip Code</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="zipCode"
                                                    placeholder="Your Zip Code"
                                                    value={formData.zipCode}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Company</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company"
                                                    placeholder="Enter Company Name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Job Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="jobTitle"
                                                    placeholder="Enter Job Title"
                                                    value={formData.jobTitle}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Tell Us About Yourself</label>
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    rows={4}
                                                    placeholder="Your message..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <div className="container">
                        <div className="map-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002810575!2d-74.14431235114544!3d40.69728463488439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1762996925992!5m2!1sen!2s"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Clients Section */}
                <div className="clients-section">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <Image src="/images/zoom.png" className="object-fit-contain" width={132.5} height={60} alt="Zoom" />
                            </div>
                            <div className="col-3">
                                <Image src="/images/tinder.png" className="object-fit-contain" width={132.5} height={60} alt="Tinder" />
                            </div>
                            <div className="col-3">
                                <Image src="/images/dribble.png" className="object-fit-contain" width={132.5} height={60} alt="Dribbble" />
                            </div>
                            <div className="col-3">
                                <Image src="/images/asana.png" className="object-fit-contain" width={132.5} height={60} alt="Asana" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* need resume */}
                <section className="need-resume-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h2 className="section-title">
                                    need help with your resume?
                                </h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur. Eu ante cursus justo lectus ac mauris Venenatis vel risus pretium diam aliquam.</p>
                            </div>
                            <div className="col-lg-5 text-end">
                                <Image src="/images/need-resume.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
