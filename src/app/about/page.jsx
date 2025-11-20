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
                                    Our flexible employment options are designed to cater to the specific needs of our clients. Whether you require interim executives, project-based specialists, or permanent educational leaders, The Community Wellness Project delivers the talent you need, when and where you need it.
                                </p>
                                <p className="mb-2">
                                    We prioritize client success by managing the entire recruitment process. Our dedicated team ensures seamless integration of new hires, allowing organizations to focus on their strategic goals. We believe in building long-term partnerships with our clients, providing continuous support and adapting to evolving needs.
                                </p>
                                <p className="mb-5">
                                    By partnering with The Community Wellness Project, you are investing in your organization’s success through empowered leadership and skilled personnel. Our commitment to excellence and client satisfaction drives us to deliver the best staffing solutions in the industry
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
                                { icon: "/images/user2.png", title: "Create Account", desc: "Nullam sed volutpat nulla sed et ante accumsan. Consectetur Fringilla sed tempore" },
                                { icon: "/images/file2.png", title: "Upload Resume", desc: "Nullam sed volutpat nulla sed et ante accumsan. Consectetur Fringilla sed tempore" },
                                { icon: "/images/o_bag.png", title: "Find Jobs", desc: "Nullam sed volutpat nulla sed et ante accumsan. Consectetur Fringilla sed tempore" },
                                { icon: "/images/check2.png", title: "Apply Job", desc: "Nullam sed volutpat nulla sed et ante accumsan. Consectetur Fringilla sed tempore" },
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
                        <h2>Frequently Asked Questions</h2>
                        <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "Can I upload a CV?", a: "Nunc sed ad purus. Nisi sis lobortis proin locus torques, sit ipse maleada ad sed in. Pislis du ultricies a sed volutpat. Com iaque velit volutpat com varius..." },
                                { q: "How long will the recruitment process take?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                                { q: "Do you recruit for Graduates, Apprentices and Students?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                                { q: "What does the recruitment and selection process involve?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                                { q: "Can I receive notifications for any future jobs that may interest me?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
                                <p className="mb-5">
                                    When you partner with the Community Wellness Project, you gain a staffing ally invested in your success and the strength of your community. We provide tailored staffing solutions that flex to your virtual, hybrid, or onsite needs. Our contracted professionals are well-compensated to ensure top talent. Long-term partners receive discounted rates. Above all, our mission is your organizational empowerment – freeing you to focus on core priorities while we handle supplemental staffing demands.
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
                                            <h3>Top Talents</h3>
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
