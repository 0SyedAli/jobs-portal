"use client";
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
            <div className="contact-wrapper">
                {/* Hero Section */}
                <div className="contact-hero">
                    <h1>Find A Job You'll Love</h1>
                </div>

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left Side */}
                            <div className="col-12 mb-5 mb-lg-0 text-center">
                                <h2>ready for a new challenge?</h2>
                                <p>
                                    This page invites candidates to explore new career opportunities and submit their resumes. It is designed to capture candidate information and connect them with relevant job opportunities through People Index Hub.
                                </p>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div className="col-12">
                                <div className="contact-form">
                                    <h2 className="mb-5">submit your resume</h2>

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
                                                <label className="form-label">Email Address</label>
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
                                                <label className="form-label">Type of Job Interested In*</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="zipCode"
                                                    placeholder="City and State or Zip"
                                                    value={formData.zipCode}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Location*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="location"
                                                    placeholder="Enter Your Location"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label">Resume Upload (optional)</label>
                                                <div className="form_upload_file">
                                                    <input
                                                        className="form-control"
                                                        name="message"
                                                        rows={4}
                                                        placeholder="add a file or drag files here"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        type="file"
                                                    />
                                                    <h5>add a file or drag files here <span>(txt, rtf, docx, pdf/ max. 10 mb drag files here)</span></h5>
                                                </div>
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

                {/* need resume */}
                <section className="need-resume-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h2 className="section-title">
                                    Call To Action

                                </h2>
                                <p className="mb-0">Interested? Let’s Talk! Connect with our team today to discuss how our tailored staffing services can empower your career growth.</p>
                            </div>
                            <div className="col-lg-5 text-end">
                                <Image src="/images/need-resume.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
