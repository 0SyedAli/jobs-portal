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
                <p className="mb-0">
                  We help professionals present their experience with clarity,
                  confidence, and relevance. Our resume guidance is designed to
                  align your skills with market demand while highlighting
                  measurable impact.{" "}
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
                  <p className="me-5">
                    Personalized resume structure aligned with your career
                    goals. Clear role descriptions that reflect real world
                    responsibilities. Content optimized for recruiter and
                    employer review.
                  </p>
                </div>
              </div>
              <div className="col-5 position-relative text-end pt-5">
                <Image
                  src="/images/sg-img9.jpg"
                  width={363}
                  height={391}
                  alt=""
                  className="img-fluid object-fit-cover"
                  style={{
                    height: "391px",
                    borderRadius: "10px",
                    objectPosition: "center",
                  }}
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
                        <label className="form-label">
                          tell us about yourself
                        </label>
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
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkDefault"
                          >
                            Receive workplace insights, trends and more useful
                            information to help you grow your business success.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-primary d-inline-flex  "
                      >
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
            <h2 className="mb-4">Why Choose Our Salary Guide</h2>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "How can I understand my market value?",
                  a: "By accessing insights on salaries, demand, and trends for your role and experience level.",
                },
                {
                  q: "Can I compare roles across industries and locations?",
                  a: "Yes, you can view how similar roles differ by industry, region, and market demand.",
                },
                {
                  q: "How does this help with career and compensation decisions?",
                  a: "It gives you reliable data to make confident, informed choices about your career path and pay.",
                },
              ].map((item, idx) => (
                <div key={idx} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        idx === 0 ? "active" : "collapsed"
                      }`}
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
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
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
                    <Image
                      className="wcu_img w-100 h-100"
                      src="/images/sg-img1.jpg"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <Image
                      className="wcu_img w-100 mb-4"
                      src="/images/sg-img2.jpg"
                      width={500}
                      height={338}
                      alt=""
                    />
                    <Image
                      className="wcu_img w-100"
                      src="/images/sg-img2.jpg"
                      width={500}
                      height={200}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="section-title">how can we help?</h2>
                <p className="mb-4">
                  Whether you are exploring new roles or negotiating compensation, our tools and guidance support confident career decisions.

                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Section */}
        <div
          className="blog-section pt-blog-section"
          style={{ background: "#F0F0F0" }}
        >
          <div className="container">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                <h2 className="section-title">
                  explore global talent solutions
                </h2>
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
                    <Image
                      src={post.img}
                      width={500}
                      height={400}
                      style={{ height: "420px" }}
                      alt=""
                    />
                    <div className="b_content">
                      <h6 className="blog-title">{post.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
