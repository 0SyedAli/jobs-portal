"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function Educators() {
    return (
        <>
            <Navbar />

            <div className="educators-wrapper about-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>best jobs</h1>
                </section>

                {/* Talent Section */}
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row gx-4 align-items-start">
                            <div className="col-lg-3">
                                <Image src="/images/bj_img1.jpg" style={{ borderRadius: "12px" }} className="w-100 h-100" width={400} height={700} alt="" />
                            </div>
                            <div className="col-lg-9">
                                <div className="p-4">
                                    <h2 className="section-title" style={{ fontSize: "40px" }}>
                                        start 2025 with the best jobs <br />that perfectly match you
                                    </h2>
                                    <p className="mb-2">
                                        Finding the right job should feel exciting, not overwhelming. That is why at People Index Hub, we connect you with high quality opportunities tailored to your skills, goals, and aspirations.
                                    </p>
                                    <p className="mb-2">
                                        Whether you are entering the workforce, growing your career, or making a strategic shift, we ensure each job recommendation brings you closer to long term success.
                                    </p>
                                    <p>Unlock your potential with a partner that understands what truly matters — competitive roles, real growth, and a clear path forward.</p>
                                </div>
                                <Image src="/images/bj_img2.jpg" className="w-100" style={{ borderRadius: "12px" }} width={500} height={300} alt="" />

                            </div>

                        </div>
                    </div>
                </div>

                {/* How It Works */}
                < div className="how-it-works" style={{ padding: "70px 0 80px" }
                }>
                    <div className="container">
                        <h2>Top Roles You Do Not Want To Miss </h2>
                        {/* <h3 className="text-capitalize text-center fs-2 mb-4">finding daily shifts fast and easy</h3> */}
                        <p className="subtitle mb-3">
                            Explore high demand careers across multiple industries and discover opportunities that align perfectly with your strengths. Our curated list highlights roles offering strong salaries, great work environments, and exciting advancement potential.
                        </p>
                        <p className="mb-0">
                            We help you identify top positions so you can stay ahead, stand out, and strategize your next big move with confidence.
                        </p>
                    </div>
                </div >
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section bj_section2" style={{ background: "#202545", color: "#FFF" }}>
                    <div className="container">
                        <div className="row align-items-end justify-content-between ">
                            <div className="col-lg-12">
                                <h2 className="section-title" style={{ fontSize: "40px", color: "#FFE3E3" }}>
                                    learn about the best jobs in <br /> your specialty
                                </h2>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="lat_ul">
                                        <ul>
                                            <li>Accounting</li>
                                            <li>Finance</li>
                                            <li>Manufacturing</li>
                                            <li>Administrative</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul">
                                        <ul>
                                            <li>Healthcare</li>
                                            <li>Sales</li>
                                            <li>Customer Experience</li>
                                            <li>HR</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul">
                                        <ul>
                                            <li>Marketing</li>
                                            <li>Engineering</li>
                                            <li>Logistics</li>
                                            <li>IT And Tech</li>
                                            <li>Life Science</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="ready-to-use bj_rtu">
                    <div className="container">
                        <div className="row justify-content-between align-items-center gx-0" style={{ backgroundColor: "#F0F0F0", borderRadius: "10px" }}>
                            <div className="col-6">
                                <div className="rtu-left">
                                    <h2 className="section-title">
                                        Your Location Your Career Advantage
                                    </h2>
                                    <p>Where you live matters and so does where your next opportunity could take you. Your location plays an important role in job availability, salary ranges, and long term growth potential.</p>
                                    <p>We provide detailed insights into which cities offer the strongest career advantages for your specialty so you can make confident and informed decisions.</p>
                                    <div className="btn btn-theme3">submit your resume</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <Image
                                    src="/images/bj_img21.jpg"
                                    width={600}
                                    height={400}
                                    className="w-100 object-fit-cover"
                                    style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px", }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section >


                {/* FAQ Section */}
                <div className="faq-section pt-0">
                    <div className="container">
                        <h2 className="mb-4" style={{ fontSize: "40px" }}>How 2025 High Paying Jobs Can Catapult <br />Your Career</h2>
                        {/* <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p> */}

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "you’ve got what it takes!", a: "Yes, you can upload your CV directly to your People Index Hub profile. It’s secure, accessible anytime, and helps us match you with roles that fit your experience. Our system supports multiple file formats and ensures your resume is stored safely for future applications." },
                                { q: "reach your full potential with a dedicated partner for talent", a: "Recruitment timelines vary depending on the role and employer needs. Some positions move quickly, while others require several stages. We’ll keep you updated throughout the process." },
                                { q: "stay at the top of your game and excel in your field", a: "The process may include application review, skills assessments, interviews, and background verification depending on the employer." },
                                { q: "factors to consider in your job search", a: "Yes. We support early-career candidates through job placements, internships, apprenticeships, and entry-level professional roles." },
                                { q: "discover how your skills can elevate your career path", a: "Absolutely. Enable job alerts to receive personalized updates on new openings that match your profile." },
                                { q: "your first step towards strategic upskilling", a: "Absolutely. Enable job alerts to receive personalized updates on new openings that match your profile." },
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
            </div>

            <Footer />
        </>
    )
}