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
                    <h1>Partner For Talent</h1>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row align-items-end justify-content-between ">
                            <div className="col-lg-12">
                                <h2 className="section-title" style={{ fontSize: "40px" }}>
                                    learn about the best jobs in <br /> your specialty
                                </h2>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div className="lat_ul">
                                        <ul>
                                            <li>accounting</li>
                                            <li>administrative</li>
                                            <li>customer experience</li>
                                            <li>engineering</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul">
                                        <ul>
                                            <li>Finance</li>
                                            <li>Healthcare</li>
                                            <li>HR</li>
                                            <li>Logistics</li>
                                        </ul>
                                    </div>
                                    <div className="lat_ul">
                                        <ul>
                                            <li>Manufacturing</li>
                                            <li>Sales</li>
                                            <li>Marketing</li>
                                            <li>IT And Tech</li>
                                            <li>Life Science</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evidence Based Approach */}
                <div className="partner-talent-section" style={{ background: "#202545", color: "#FFF", paddingTop: "100px" }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between gy-4">
                            <div className="col-lg-6 text-center pe-5">
                                <Image src="/images/wi-img1.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-5 text-end">
                                <h2 className="section-title mb-4">
                                    Understanding Temporary Recruitment
                                </h2>
                                <p className="mb-0">
                                    Temporary recruitment plays a powerful role in today’s evolving workplace. More businesses rely on short term and project based professionals to maintain productivity, cover seasonal demands, and support organizational growth. This flexibility creates a wide range of opportunities for skilled candidates who want to explore new roles, build experience, or maintain work life balance. People Index Hub ensures both companies and candidates benefit from efficient and reliable staffing solutions that meet today’s workforce expectations.
                                </p>
                            </div>

                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-4">
                                    a new workplace baseline
                                </h2>
                                <p className="mb-0">
                                    The modern workplace has changed dramatically. Remote work options, digital collaboration, and flexible scheduling are now standard across many industries. Organizations are adapting by rethinking how teams operate, how productivity is measured, and how talent is sourced. Whether you are exploring a new role or planning your next career move, understanding these shifting trends helps you make smarter decisions and stay competitive in a rapidly changing job market.
                                </p>
                            </div>
                            <div className="col-lg-6 text-center  ps-5">
                                <Image src="/images/wi-img2.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-6 text-center  pe-5">
                                <Image src="/images/wi-img3.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-5 text-end">
                                <h2 className="section-title mb-4">
                                    understanding temporary recruitment
                                </h2>
                                <p className="mb-0">
                                    Short term and project focused opportunities continue to rise as companies look for specialized skills without long term commitment. This allows candidates to gain exposure to different environments, develop new abilities, and expand their professional network. People Index Hub supports this transition with transparent processes, dedicated guidance, and reliable resources that help you succeed in every assignment.
                                </p>
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
                                <p className="mb-0">Your resume is your first impression. Our specialists at People Index Hub can help refine your profile, strengthen your presentation, and highlight your strengths so employers immediately recognize your value. Whether you are new to the job market or preparing for a major career step, we will help you build a resume that gets attention and creates results.</p>
                            </div>
                            <div className="col-lg-5 text-end">
                                <Image src="/images/need-resume.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
