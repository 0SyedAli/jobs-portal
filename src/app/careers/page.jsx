"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
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
                    <h1>Careers</h1>
                </div>

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row">
                            {/* Left Side */}
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <h2>Partner With Us!</h2>
                            </div>

                            {/* Right Side - Contact Form (Note: The form fields are missing in the original provided HTML structure, but the handler logic is present.) */}
                            <div className="col-lg-7">
                                <p className="mb-0">
                                    People Index Hub is a specialized professional and educational staffing and recruitment organization dedicated to meeting the evolving needs of businesses and institutions. Our experienced team leverages industry expertise and deep sector knowledge to deliver tailored staffing solutions that drive performance, innovation, and long-term success.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Open Positions Section */}
                <div className="open-positions-section">
                    <div className="container">
                        <h2 className="positions-title">
                            Open Positions
                        </h2>
                        <div className="row justify-content-center">
                            <div className="col-xxl-11">
                                <div className="row justify-content-center positions-row">
                                    {/* Featured Position 1 - Dark Blue Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card featured-card">
                                            <h5 className="position-title">
                                                Speech Pathologist
                                            </h5>
                                            <p className="position-details">
                                                Lancaster, CA | Education Services
                                            </p>
                                        </div>
                                    </div>

                                    {/* Position 2 - White Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card regular-card">
                                            <h5 className="position-title">
                                                Speech Pathologist
                                            </h5>
                                            <p className="position-details">
                                                Marion County, OR | Education Services
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-between positions-row">
                                    {/* Position 3 - White Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card regular-card">
                                            <h5 className="position-title">
                                                Speech Pathologist
                                            </h5>
                                            <p className="position-details">Napa, CA | Education Services</p>
                                        </div>
                                    </div>

                                    {/* Position 4 - White Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card regular-card">
                                            <h5 className="position-title">
                                                Speech Pathologist
                                            </h5>
                                            <p className="position-details">Concord, CA | Education Services</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-around positions-row">
                                    {/* Position 5 - White Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card regular-card">
                                            <h5 className="position-title long-title">
                                                Early Childhood Special Education Teacher/ Preschool
                                            </h5>
                                            <p className="position-details">Lancaster, CA | Education Services</p>
                                        </div>
                                    </div>

                                    {/* Position 6 - White Card */}
                                    <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                        <div className="position-card regular-card">
                                            <h5 className="position-title">
                                                Physical Therapist
                                            </h5>
                                            <p className="position-details">Salem, OR | Professional Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-section">
                    <div className="container-fluid px-0 ">
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

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section car-eas">
                    <div className="container">
                        <div className="row flex-row-reverse align-items-center">
                            <div className="col-lg-6 ">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <Image className="wcu_img w-100 mb-4" src="/images/car-img1.jpg" width={500} height={338} alt="" />
                                        <Image className="wcu_img w-100" src="/images/car-img2.jpg" width={500} height={200} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <Image className="wcu_img w-100 h-100" src="/images/car-im3.jpg" width={500} height={500} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">
                                    Join Our Team
                                </h2>
                                <p className="mb-4">
                                    When you join People Index Hub, you become part of a community focused on impact, growth, and professional excellence. We provide flexible staffing solutions that adapt to virtual, hybrid, and on-site needs while ensuring professionals are supported, fairly compensated, and positioned for long-term success. Our mission is to empower organizations and talent alike by managing staffing complexities so you can focus on what matters most.
                                </p>
                                <Link href="/jobs" className="btn btn-primary me-4" style={{background:"#202545", borderColor:"#202545"}}>start your search</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}