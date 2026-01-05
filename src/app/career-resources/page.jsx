"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>career resources</h1>
                </div>

                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <div className="text-center mb-5">
                                    <h2 className="section-title text-black ">
                                        How Can We Help You Today
                                    </h2>
                                    <p className="text-dark">Explore the tools guidance and support you need to move forward in your career with confidence. Our resources are designed to strengthen your skills improve your job search and help you prepare for new opportunities.</p>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-xxl-11">
                                        <div className="row justify-content-center positions-row">
                                            {/* Featured Position 1 - Dark Blue Card */}
                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card featured-card featured-card2">
                                                    <h5 className="position-title">
                                                        resume writing
                                                    </h5>
                                                    <p>Build a clear professional resume that highlights your strengths and experience.</p>
                                                </div>
                                            </div>

                                            {/* Position 2 - White Card */}
                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2">
                                                    <h5 className="position-title">
                                                        job interviews
                                                    </h5>
                                                    <p>Learn how to communicate confidently and make a strong impression.</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2">
                                                    <h5 className="position-title">
                                                        job search tips
                                                    </h5>
                                                    <p> Discover strategies that help you find opportunities faster and more effectively.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2">
                                                    <h5 className="position-title long-title">
                                                        career development
                                                    </h5>
                                                    <p>Get support in planning your long term goals and expanding your professional growth.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2">
                                                    <h5 className="position-title">
                                                        Salary Negotiation
                                                    </h5>
                                                    <p> Gain the confidence to discuss compensation and secure fair pay.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 mb-4 card-wrapper">
                                                <div className="position-card regular-card featured-card2">
                                                    <h5 className="position-title">
                                                        Work From Home
                                                    </h5>
                                                    <p>  Access practical guidance for remote work success and productivity.  </p>
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

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 text-center">
                                <div className="position-relative me-5">
                                    <Image src="/images/cr_img3.png" className="w-100 h-auto object-fit-cover" width={400} height={400} alt="" />
                                    <Image src="/images/cr_img2.jpg" className="cr_img2" width={400} height={400} alt="" />
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <h2 className="section-title">
                                    ready for your next job opportunity?
                                </h2>
                                <p className="mb-2">
                                    Start your journey toward new possibilities with expert tools and guidance. Whether you are preparing your resume searching for the right job or exploring a new path our resources help you take the next step with clarity and direction.
                                </p>
                                <Link href="/jobs" className="btn btn-primary me-4" style={{ background: "#202545", borderColor: "#202545" }}>start your search</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Go To The Overview */}
                <section className="gto-section cr-gto-section">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="section-title mb-4">
                                    resume builder by people <br />index hub
                                </h2>
                                <p className="mb-3">
                                    Create a polished resume that reflects your experience skills and unique strengths. Our resume builder provides structure inspiration and direction to help you present yourself with confidence.
                                </p>
                                <p className="mb-5">
                                    We make the process simple clear and effective so you can focus on achieving your goals.
                                </p>
                                <div className="btn btn-theme3">let's get started</div>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
