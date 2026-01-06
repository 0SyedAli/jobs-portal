"use client";
import Testimonial from "@/component/Testimonial";
import Image from "next/image";
import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>temporary staffing</h1>
                </div>


                {/* Blog Section */}
                <div className="blog-section pt-blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">what makes our temporary recruitment different?</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    title: "it is free",
                                    bLi: [
                                        "Gain full access to expert career guidance at no cost.",
                                        "Personalized recommendations tailored to your goals.",
                                        "Immediate support designed to help you move forward with confidence."
                                    ]
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    title: "One On One Advice",
                                    bLi: [
                                        "Receive tailored advice from experienced professionals.",
                                        "Get clarity on the best direction for your next career move.",
                                        "Improve your confidence through professional guidance.",
                                    ]
                                },
                                {
                                    img: "/images/blog2.jpg",
                                    title: "Expanded Access To Interesting Jobs",
                                    bLi: [
                                        "Explore diverse opportunities matched to your strengths.",
                                        "Connect with recruiters who value your unique skill set.",
                                        "Stay informed about new openings that fit your goals.",
                                    ]
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-4">
                                    <div className="blog_card">
                                        <div className="b_label">{post.label}</div>
                                        <Image src={post.img} width={500} height={400} alt="" />
                                        <div className="b_content">
                                            <h6 className="blog-title">{post.title}</h6>
                                            <ul>
                                                {post.bLi.map((item, i) => (
                                                    <li key={i}>
                                                        <span><IoCheckmarkOutline /></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section per-rec" style={{ background: "#F0F0F0", padding: "80px 0" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-center">
                                <div className="position-relative me-5">
                                    <Image src="/images/cr_img3.png" className="w-100 h-auto object-fit-cover" width={400} height={400} alt="" />
                                    <Image src="/images/cr_img2.jpg" className="cr_img2" width={400} height={400} alt="" />
                                </div>

                            </div>
                            <div className="col-lg-7 pe-5">
                                <h2 className="section-title" style={{ fontSize: "50px" }}>
                                    operational talent <br /> solutions
                                </h2>
                                <p className="mb-2">
                                    Our operational talent solutions provide businesses with reliable,
                                    job-ready professionals for short-term and project-based roles. From
                                    administrative support to on-site operations, we ensure the right talent
                                    is available when and where you need it, helping you maintain efficiency
                                    and continuity.
                                </p>
                                <Link href="/jobs" className="btn btn-primary mt-3">Search Job</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4">core areas of specialization</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "you’ve got what it takes!", a: "Temporary roles require adaptability, reliability, and strong work ethics. If you are ready to learn and perform, we help you find opportunities that match your strengths." },
                                { q: "reach your full potential with a dedicated partner for talent", a: "We support you beyond job placement by offering guidance, career insights, and continuous opportunities that help you grow professionally." },
                                { q: "Dostay at the top of your game and excel in your field", a: "y connecting you with diverse work environments and hands-on experience, temporary staffing helps you sharpen your skills and stay competitive in the job market." },
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
                <div className="evidence-approach-section bj_section2" style={{ background: "#202545", color: "#FFF", padding: "90px 0" }}>
                    <div className="container">
                        <div className="row align-items-end justify-content-between ">
                            <div className="col-lg-12">
                                <h2 className="section-title text-center" style={{ fontSize: "40px", color: "#FFF", marginBottom: "70px" }}>
                                    learn about the best jobs in your specialty
                                </h2>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="lat_ul h-100">
                                        <ul>
                                            <li>business administration</li>
                                            <li>customer care</li>
                                            <li>engineering & design</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul h-100">
                                        <ul>
                                            <li>executive search</li>
                                            <li>finance and accounting</li>
                                            <li>healthcare</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul h-100">
                                        <ul>
                                            <li>human resources</li>
                                            <li>sales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section" style={{ background: "#F0F0F0" }}>
                    <div className="container">
                        <h2 className="mb-4">Frequently Asked Questions</h2>
                        <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p>

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

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section" style={{ padding: "80px 0" }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between gx-5">
                            <div className="col-lg-3 text-center">
                                <Image src="/images/quotation.png" className="img-fluid" width={290} height={191} alt="" />
                            </div>
                            <div className="col-lg-9">
                                {/* <div className="slider-container">
                                    <div className="slider-item">
                                        <h2 className="section-title" style={{ fontSize: "30px" }}>
                                            Our internal recruiting team was struggling to fill an accounting position that has been open for four months.
                                        </h2>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                        <p>Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla</p>
                                        <p><strong>Lorem ipsum dolor sit amet consectetur</strong></p>
                                    </div>
                                    <div className="slider-item">
                                        <h2 className="section-title" style={{ fontSize: "30px" }}>
                                            Our internal recruiting team was struggling to fill an accounting position that has been open for four months.
                                        </h2>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                        <p>Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla</p>
                                        <p><strong>Lorem ipsum dolor sit amet consectetur</strong></p>
                                    </div>
                                    <div className="slider-item">
                                        <h2 className="section-title" style={{ fontSize: "30px" }}>
                                            Our internal recruiting team was struggling to fill an accounting position that has been open for four months.
                                        </h2>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                        <p>Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla</p>
                                        <p><strong>Lorem ipsum dolor sit amet consectetur</strong></p>
                                    </div>
                                </div> */}
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section" style={{ background: "#202545", color: "#FFF" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center">
                                <Image src="/images/pr-img1.jpg" className="img-fluid " width={490} height={497} alt="" style={{ borderRadius: "20px" }} />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title" style={{ fontSize: "40px" }}>
                                    temporary staffing solutions for flexible workforce needs
                                </h2>
                                <p className="mb-4">
                                    Our temporary staffing solutions help businesses stay agile during peak
                                    demand, special projects, and seasonal requirements. We connect you with
                                    skilled professionals who are ready to contribute immediately, ensuring
                                    productivity without long-term hiring commitments.
                                </p>
                                <Link href="#" className="text-decoration-underline" style={{ fontWeight: "500" }}>Explore</Link>

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
                                <p className="mb-0">Our resume experts help you present your skills and experience in the best
                                    possible way. Whether you are applying for temporary roles or long-term
                                    opportunities, we make sure your resume stands out to employers.
                                </p>
                            </div>
                            <div className="col-lg-5 text-end">
                                <Image src="/images/need-resume.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
}
