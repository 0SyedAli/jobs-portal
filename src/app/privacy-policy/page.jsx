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
                    <h1>Privacy Policy</h1>
                </div>

                {/* How It Works */}
                <div className="how-it-works privacy-hiw">
                    <div className="container">
                        <h2>who are you?</h2>
                        <p className="subtitle">
                            Learn what we do for you in specific situations to ensure your privacy.
                        </p>
                        <div className="row g-3">
                            {[
                                { icon: "/images/user2.png", title: "website visitor", desc: "Nunc sed a nisl purus. Nibh dis faucibus proin lacus" },
                                { icon: "/images/file2.png", title: "candidate", desc: "Felis eu ultrices a sed massa. Commodo fringilla sed tempor" },
                                { icon: "/images/o_bag.png", title: "temporary worker", desc: "Commodo fringilla sed tempor risus laoreet ultricies ipsum" },
                                { icon: "/images/check2.png", title: "business relation", desc: "Nisi enim feugiat enim volutpat. Sem quis viverra" },
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

                {/* Main Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row ">
                            {/* Left Side */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h2>your privacy <br /> matters to us</h2>
                            </div>

                            {/* Right Side - Contact Form (Note: The form fields are missing in the original provided HTML structure, but the handler logic is present.) */}
                            <div className="col-lg-8">
                                <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                <p className="mb-2">Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                                <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                <p className="mb-0">Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section mentor_seciont pp-mentor-section">
                    <div className="container">
                        <div className="row  align-items-end gx-5">
                            <div className="col-lg-6 text-end position-relative pt-5">
                                <Image src="/images/pms-img2.jpg" className="pms-img2" width={400} height={500} alt="" />
                                <Image src="/images/pp-img3.jpg" className="" width={400} height={500} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title pe-5 mb-2" style={{ fontSize: "50px" }}>
                                    our promise <br />
                                    human forward
                                </h2>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.Considering venturing into entrepreneurship? Take advantage of our comprehensive mentorship programs designed to support you every step of the way on your entrepreneurial journey. Our distinctive approach involves providing personalized guidance and practical resources to empower you to concepts and develop the necessary skills to reach your goals. Join us as we walk alongside you, offering invaluable and equipping you with the tools and knowledge needed to navigate the challenges of starting and growing your own business.
                                </p>
                                <Link href="" className="text-decoration-underline" style={{ color: "#FFF", fontWeight: "500" }}>Learn More</Link>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <div className="row justify-content-center mb-5">
                                    <div className="col-8">
                                        <h2 className="section-title text-black ">
                                            jump to a specific privacy page
                                        </h2>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-xxl-11">
                                        <div className="row justify-content-center positions-row">
                                            {/* Featured Position 1 - Dark Blue Card */}
                                            <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card featured-card">
                                                    <h5 className="position-title">
                                                        website visitors
                                                    </h5>
                                                </div>
                                            </div>

                                            {/* Position 2 - White Card */}
                                            <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card">
                                                    <h5 className="position-title">
                                                        candidates
                                                    </h5>
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card">
                                                    <h5 className="position-title">
                                                        temporary workers
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card">
                                                    <h5 className="position-title long-title">
                                                        business relations
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card">
                                                    <h5 className="position-title">
                                                        full privacy notice
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
            </div>
            <Footer />
        </>
    );
}
