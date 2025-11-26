"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>About Us</h1>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row flex-row-reverse align-items-center">
                            <div className="col-lg-6 text-center">
                                <Image src="/images/about_sec1.png" className="w-100 h-auto object-fit-cover" width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">
                                    Empowering Educational & Personnel Staffing Solutions
                                </h2>
                                <p className="mb-2">
                                    At People Index Hub, we provide flexible and reliable staffing solutions built to meet the evolving needs of organizations worldwide. Whether you’re looking for interim executives, specialized project-based professionals, or long-term academic and administrative talent, our platform connects you with the right people at the right time.
                                </p>
                                <p className="mb-2">
                                    Our approach focuses on simplifying the recruitment journey. We handle the sourcing, screening, and coordination of new hires, enabling you to focus on strategic goals while we support your growth. Through transparent processes and long-term partnerships, we help you adapt to industry shifts and remain competitive.
                                </p>
                                <p className="mb-5">
                                    By choosing People Index Hub, you strengthen your workforce with skilled professionals committed to excellence. Our dedication to quality service and consistent support empowers organizations to thrive and maintain high standards of performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="how-it-works">
                    <div className="container">
                        <h2>How it works</h2>
                        <p className="subtitle">
                            At vix lobortis premium amet sed et aliquam placerat. Blandit a massa elementum of molestie rhoncus.
                        </p>

                        <div className="row g-3">
                            {[
                                { icon: "/images/user2.png", title: "Create Account", desc: "Sign up in minutes and unlock your personalized dashboard designed to support your hiring or job-search goals." },
                                { icon: "/images/file2.png", title: "Upload Resume", desc: "Share your experience and skills. Our smart tools help present your resume professionally and effectively." },
                                { icon: "/images/o_bag.png", title: "Find Jobs", desc: "Explore verified job opportunities tailored to your expertise, industry interests, and preferred location." },
                                { icon: "/images/check2.png", title: "Apply Job", desc: "Submit your application instantly and monitor your progress as you move toward your next career opportunity." },
                            ].map((step, idx) => (
                                <div key={idx} className="col-md-6 col-lg-3">
                                    <div className={`how-step ${idx === 0 ? "highlight" : ""}`}>
                                        <div className="hit-icon">
                                            <Image src={step.icon} width={34} height={34} alt="" />
                                        </div>
                                        <h6>{step.title}</h6>
                                        <small>{step.desc}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4">Frequently Asked Questions</h2>
                        {/* <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p> */}

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "Can I upload a CV?", a: "Yes, you can upload your CV directly to your People Index Hub profile. It’s secure, accessible anytime, and helps us match you with roles that fit your experience. Our system supports multiple file formats and ensures your resume is stored safely for future applications." },
                                { q: "How long will the recruitment process take?", a: "Recruitment timelines vary depending on the role and employer needs. Some positions move quickly, while others require several stages. We’ll keep you updated throughout the process." },
                                { q: "Do you recruit for Graduates, Apprentices and Students?", a: "The process may include application review, skills assessments, interviews, and background verification depending on the employer." },
                                { q: "What does the recruitment and selection process involve?", a: "Yes. We support early-career candidates through job placements, internships, apprenticeships, and entry-level professional roles." },
                                { q: "Can I receive notifications for any future jobs that may interest me?", a: "Absolutely. Enable job alerts to receive personalized updates on new openings that match your profile." },
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

                {/* Why Choose Us */}
                <div className="evidence-approach-section why_section">
                    <div className="container">
                        <div className="row  align-items-center gx-5">
                            <div className="col-lg-6 ">
                                <div className="row g-4">
                                    <div className="col-6">
                                        <Image className="wcu_img w-100 h-100" src="/images/ab1.png" width={500} height={500} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <Image className="wcu_img w-100 mb-4" src="/images/ab3.png" width={500} height={338} alt="" />
                                        <Image className="wcu_img w-100" src="/images/ab2.png" width={500} height={200} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title">
                                    Why Choose Us?
                                </h2>
                                <p className="mb-2">
                                    Partnering with People Index Hub means gaining access to a staffing ally invested in your success. We provide dependable hiring solutions designed for virtual, hybrid, and onsite environments. Every applicant is vetted to ensure quality, and our partners benefit from consistent support and tailored recruitment services.
                                </p>
                                <p className="mb-5">
                                    Our mission is to remove the complexity from hiring by offering strategic, end-to-end workforce guidance. Whether you’re scaling teams or filling specialized roles, we empower you with trusted talent, streamlined processes, and technology that simplifies every step.
                                </p>
                                <div className="row gy-5">
                                    <div className="col-5">
                                        <div className="wcu d-flex align-items-center gap-4">
                                            <Image src="/images/crown2.png" width={40} height={40} alt="" />
                                            <h3>Quality Job</h3>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="wcu d-flex align-items-center gap-4">
                                            <Image src="/images/userfile2.png" width={40} height={40} alt="" />
                                            <h3>Resume builder</h3>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="wcu d-flex align-items-center gap-4">
                                            <Image src="/images/star2.png" width={40} height={40} alt="" />
                                            <h3>Top Companies</h3>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="wcu d-flex align-items-center gap-4">
                                            <Image src="/images/batch2.png" width={40} height={40} alt="" />
                                            <h3>Top Talent Network</h3>
                                        </div>
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
