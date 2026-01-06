"use client";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>high-volume hiring support</h1>
                </div>
                {/* Evidence Based Features */}
                <div className="op_terms_bottom" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="container ">
                        <div className="row pb-3">
                            <div className="col-lg-5 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title text-black" >
                                    high-volume talent management
                                </h2>
                            </div>
                            <div className="col-lg-7">
                                <p className="mb-0 text-black">Our high-volume hiring solutions help organizations scale their workforce efficiently while maintaining quality, speed, and compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" >
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <div className="text-center mb-5">
                                    <h2 className="section-title text-black " style={{ fontSize: "40px" }}>
                                        benefits of high-volume management
                                    </h2>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-xxl-11">
                                        <div className="row justify-content-center positions-row">
                                            {/* Featured Position 1 - Dark Blue Card */}
                                            <div className="col-md-5 mb-4 card-wrapper">
                                                <div className="position-card featured-card featured-card2" style={{ padding: "40px 20px" }}>
                                                    <h5 className="position-title p-0">
                                                        reduce your hiring costs
                                                    </h5>
                                                </div>
                                            </div>

                                            {/* Position 2 - White Card */}
                                            <div className="col-md-5 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2" style={{ padding: "40px 20px" }}>
                                                    <h5 className="position-title p-0">
                                                        Enhance worker engagement
                                                    </h5>
                                                </div>
                                            </div>

                                            <div className="col-md-5 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2" style={{ padding: "40px 20px" }}>
                                                    <h5 className="position-title p-0">
                                                        Customized workforce solutions
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-md-5 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2" style={{ padding: "40px 20px" }}>
                                                    <h5 className="position-title p-0 long-title">
                                                        Leverage advanced HR technology
                                                    </h5>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Position 4 - White Card */}

                                    </div>
                                    {/* Position 5 - White Card */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Go To The Overview */}
                <section className="gto-section">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-9">
                                <h2 className="section-title mb-4" style={{ fontSize: "50px" }}>
                                    contact us to start a conversation about your needs
                                </h2>
                                <p className="mb-0">
                                    Reach out to us to start a simple, no-pressure conversation about what you’re looking for. We’ll listen, ask the right questions, and help you figure out the best next steps—no matter where you’re starting from.
                                </p>
                            </div>
                            <div className="col-3 text-end">
                                <div className="btn btn-theme2 px-4">let's meet</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4">core areas of specialization</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "Reduce Your Total Hiring Costs", a: "We help organizations minimize recruitment expenses while improving speed-to-hire and workforce performance." },
                                { q: "How We Reduce Your Costs", a: "Through optimized hiring workflows, technology-driven screening, and scalable recruitment strategies tailored to your business needs." },
                                { q: "Engage Talent With a Positive Work Experience", a: "We create meaningful candidate experiences that boost retention, performance, and long-term engagement." },
                                { q: "How We Engage Talent", a: "Our engagement strategy combines communication, support, and performance tracking to deliver a motivated workforce." },
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
                {/* Ready To Use */}
                <section className="ready-to-use hvhs-rtu">
                    <div className="container">
                        <div className="row justify-content-between align-items-center gx-0" style={{ backgroundColor: "#F0F0F0", borderRadius: "10px" }}>
                            <div className="col-5">
                                <div className="rtu-left text-black">
                                    <h2 className="section-title">
                                        Reduce Your Total Hiring Costs
                                    </h2>
                                    <p>We help organizations minimize recruitment expenses while improving speed-to-hire and workforce performance.</p>
                                    <div className="btn btn-theme3">submit your resume</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <Image
                                    src="/images/rtf_img.jpg"
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

                {/* How It Works */}
                < div className="how-it-works bg-transparent" style={{ padding: "0 0 80px" }
                }>
                    <div className="container">
                        <h2>how we reduce your costs </h2>
                        {/* <h3 className="text-capitalize text-center fs-2 mb-4">finding daily shifts fast and easy</h3> */}
                        <p className="subtitle mb-1">
                            Through optimized hiring workflows, technology-driven screening, and scalable recruitment strategies tailored to your business needs.</p>
                    </div>
                </div >

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
                                    We create meaningful candidate experiences that boost retention, performance, and long-term engagement.
                                </p>
                                <div className="btn btn-theme2 px-4">get in touch today</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Evidence Based Features */}
                <div className="op_terms_bottom" style={{ backgroundColor: "#FFF" }}>
                    <div className="container ">
                        <div className="row pb-3">
                            <div className="col-lg-5 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title text-black" style={{ fontSize: "50px" }}>
                                    how we engage talent
                                </h2>
                            </div>
                            <div className="col-lg-7">
                                <p>Our engagement strategy combines communication, support, and performance tracking to deliver a motivated workforce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
