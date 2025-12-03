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
                    <h1>contact People Index </h1>
                </div>

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row align-items-center">
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
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
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
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Zip Code*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="zipCode"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">Company</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company"
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
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">tell us about yourself</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="jobTitle"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                                    <label className="form-check-label" htmlFor="checkDefault">
                                                        Receive workplace insights, trends and more useful information to help you grow your business success.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary d-inline-flex  ">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Go To The Overview */}
                <section className="gto-section hv-gto">
                    <div className="container">
                        <div className="row align-items-center gap-5">
                            <div className="col-5 position-relative text-end">
                                <Image
                                    src="/images/high-vol-img1.jpg"
                                    width={363}
                                    height={391}
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                    style={{ height: "391px", borderRadius: "10px" }}
                                />
                                <Image
                                    src="/images/high-vol-img2.jpg"
                                    width={240}
                                    height={175}
                                    alt=""
                                    className="img-fluid object-fit-cover hv-img2"
                                    style={{ height: "175px", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="col-6">
                                <h2 className="section-title mb-4" style={{ fontSize: "50px", color: "#FFF" }}>
                                    engage talent with a positive work experience
                                </h2>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.Considering venturing into entrepreneurship? Take advantage of our comprehensive mentorship programs designed to support you every step of the way on your entrepreneurial journey.
                                </p>
                                <div className="btn btn-theme2 px-4">get in touch today</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <div className="blog-section pt-blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">the perks of working with People Index</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/cpi-img1.jpg",
                                    title: "Available Opportunities",
                                },
                                {
                                    img: "/images/cpi-img2.jpg",
                                    title: "Career Resources",
                                },
                                {
                                    img: "/images/cpi-img3.jpg",
                                    title: "find your closest branch",
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-4">
                                    <div className="blog_card">
                                        {/* <div className="b_label">{post.label}</div> */}
                                        <Image src={post.img} width={500} height={400} style={{ height: "420px" }} alt="" />
                                        <div className="b_content">
                                            <h6 className="blog-title">{post.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                                <Image src="/images/find-emp-monitor.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
