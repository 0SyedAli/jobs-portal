"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>find your perfect solution today</h1>
                </div>

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
                                    img: "/images/ss_img1.jpg",
                                    title: "Available Opportunities",
                                    para: "Explore verified job openings across multiple industries, designed to match your skills, goals, and preferred career path."
                                },
                                {
                                    img: "/images/ss_img2.jpg",
                                    title: "Career Resources",
                                    para: "Gain access to tools and guidance that help you build confidence, strengthen your resume, and prepare for real world interviews."
                                },
                                {
                                    img: "/images/ss_img3.jpg",
                                    title: "find your closest branch",
                                    para: "Connect with our partner offices and staffing teams available in select regions to support your employment or hiring needs."
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-4">
                                    <div className="blog_card">
                                        {/* <div className="b_label">{post.label}</div> */}
                                        <Image src={post.img} width={500} height={400} style={{ height: "420px" }} alt="" />
                                        <div className="b_content">
                                            <h6 className="blog-title">{post.title}</h6>
                                            <p>{post.para}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4" style={{ fontSize: "40px" }}>discover how 2025’s high-paying jobs can catapult <br />your career to new heights</h2>
                        {/* <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p> */}

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "You Have What It Takes", a: "Unlock opportunities that reflect your strengths and discover roles that reward your potential." },
                                { q: "Reach Your Full Potential With A Dedicated Partner For Talent", a: "Our platform connects you with employers who value your abilities and long term growth." },
                                { q: "Stay At The Top Of Your Game And Excel In Your Field", a: "Use our tools to stay informed, updated, and prepared for fast moving career trends." },
                                { q: "Factors To Consider In Your Job Search", a: "Learn what matters most when choosing the right role including salary, culture, growth, and balance." },
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
                <div className="evidence-approach-section" style={{ background: "#202545", color: "#FFF" }}>
                    <div className="container">
                        <div className="row flex-row-reverse align-items-center">
                            <div className="col-lg-6 text-center">
                                <Image src="/images/wi_right2.jpg" className="w-100 h-auto object-fit-cover" width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">
                                    our specializations
                                </h2>
                                <p className="mb-2">
                                    People Index Hub supports organizations of all sizes by providing comprehensive staffing solutions designed to meet evolving workforce demands. Whether you need temporary support, full time employees, specialized professionals, or leadership level hires, our team is prepared to assist.
                                </p>
                                <p className="mb-2">
                                    We evaluate every candidate thoroughly to ensure your organization receives individuals who excel in their field and align with your mission. Through a transparent and simplified hiring process, we help businesses build strong teams while saving valuable time and resources.
                                </p>
                                <p className="mb-2">
                                    Our focused approach prioritizes quality, consistency, and results which makes People Index Hub a trusted partner for organizations seeking top tier talent across diverse industries.
                                </p>
                                <Link href="#" className="text-decoration-underline" style={{ color: "#202544", fontWeight: "500" }}>Learn More</Link>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="op_terms_bottom" style={{ background: "#F0F0F0", padding:"100px 0" }}>
                    <div className="container ">
                        <div className="row pb-5">
                            <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title text-black" style={{ fontSize: "40px" }}>
                                    provide solutions for your organisation
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="ss_cards h-100">
                                    <Image
                                        src="/images/monitor-icon.png"
                                        width={70}
                                        height={70}
                                        alt=""
                                        className="mb-4"
                                    />
                                    <div>
                                        <h4 className="mb-4">01.contact us</h4>
                                        <p className="mb-0">Our team works directly with organizations to understand staffing needs and deliver reliable workforce solutions. Whether you are expanding, restructuring, or filling critical positions, we offer guidance tailored to your operational goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="ss_cards h-100">
                                    <Image
                                        src="/images/monitor-icon.png"
                                        width={70}
                                        height={70}
                                        alt=""
                                        className="mb-4"
                                    />
                                    <div>
                                        <h4 className="mb-4">01.contact us</h4>
                                        <p className="mb-0">Connect with our specialists to explore staffing plans, recruitment strategies, and support systems designed to strengthen your teams performance while reducing hiring challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
