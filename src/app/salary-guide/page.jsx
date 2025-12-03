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
                    <h1>Salary Guide</h1>
                </div>

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row">
                            {/* Left Side */}
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <h2>the benefits of building your resume with us</h2>
                            </div>

                            {/* Right Side - Contact Form (Note: The form fields are missing in the original provided HTML structure, but the handler logic is present.) */}
                            <div className="col-lg-7">
                                <p className="mb-2">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.
                                </p>
                                <p className="mb-0">
                                    Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Go To The Overview */}
                <section className="hv-gto ms-gto sg-gto pt-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div>
                                    <h4 className="fw-semibold">what you get</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                    </ul>
                                    <h4 className="fw-semibold">what you get</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                        <li>Lorem ipsum dolor sit amet consectetur sagittis mauris orci felis arcu</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-5 position-relative text-end pt-5">
                                <Image
                                    src="/images/sg-img9.jpg"
                                    width={363}
                                    height={391}
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                    style={{ height: "391px", borderRadius: "10px", objectPosition: "center" }}
                                />
                                <Image
                                    src="/images/sg-img10.jpg"
                                    width={240}
                                    height={175}
                                    alt=""
                                    className="img-fluid object-fit-cover hv-img2"
                                    style={{ height: "175px", borderRadius: "10px" }}
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <div className="contact-section pt-0">
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

                {/* FAQ Section */}
                <div
                    className="faq-section msp-section text-white"
                    style={{
                        backgroundImage: 'url("/images/gto-bg.png")',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        padding: "100px 0",
                    }}
                >
                    <div className="container">
                        <h2 className="mb-4">talent acquisition solutions</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "you’ve got what it takes!", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                                { q: "reach your full potential with a dedicated partner for talent", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                            ].map((item, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${idx === 0 ? "active" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#accordion${idx}`}
                                        >
                                            <span>{`0${idx + 1}`}</span>
                                            {item.q}
                                        </button>
                                    </h2>
                                    <div
                                        id={`accordion${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section car-eas">
                    <div className="container">
                        <div className="row  align-items-center gx-5">
                            <div className="col-lg-6 ">
                                <div className="row g-4">

                                    <div className="col-6">
                                        <Image className="wcu_img w-100 h-100" src="/images/sg-img1.jpg" width={500} height={500} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <Image className="wcu_img w-100 mb-4" src="/images/sg-img2.jpg" width={500} height={338} alt="" />
                                        <Image className="wcu_img w-100" src="/images/sg-img2.jpg" width={500} height={200} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">
                                    how can we help?
                                </h2>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet consectetur. Lacus scelerisque ridiculus sed faucibus. Sit vehicula ante pharetra ut cursus pellentesque. Pharetra tristique augue neque suspendisse euismod at. Potenti tincidunt lacus nibh vel nisl ultrices nunc ornare. Arcu convallis euismod etiam elit neque faucibus.
                                    Eget ultrices sit pellentesque mattis est. Massa porttitor aliquet dignissim aliquet sit egestas quisque. Mus at a magna semper aliquet blandit porttitor orci consequat. Eget nisl commodo ultrices quis scelerisque tempor arcu. Amet cursus cursus est eu sed id in bibendum. Lobortis consectetur ut massa velit et. In pellentesque gravida adipiscing tellus dui. Amet adipiscing scelerisque enim id netus ullamcorper duis. Fames vitae enim nibh pellentesque faucibus id augue eget. Odio aliquam vulputate mattis elit cras nulla a. Ut vitae lacus nisl eu eleifend nec commodo. Congue ipsum cursus pharetra morbi nec vitae tortor. Urna massa integer velit nibh. Facilisis sodales pulvinar accumsan egestas habitant at.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog Section */}
                <div className="blog-section pt-blog-section" style={{ background: "#F0F0F0" }}>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">explore global talent solutions</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/sg-img5.jpg",
                                    title: "talent acquisition",
                                },
                                {
                                    img: "/images/sg-img6.jpg",
                                    title: "talent development",
                                },
                                {
                                    img: "/images/sg-img7.jpg",
                                    title: "talent transition",
                                },
                                {
                                    img: "/images/sg-img8.jpg",
                                    title: "advisory",
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-3">
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

            </div >
            <Footer />
        </>
    );
}