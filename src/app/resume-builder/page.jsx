"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Resume Builder</h1>
                </div>

                {/* Evidence Based Features */}
                <div className="op_terms_bottom">
                    <div className="container ">
                        <div className="row pb-3">
                            <div className="col-lg-4 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title text-black" >
                                    the benefits of building your resume with us
                                </h2>
                            </div>
                            <div className="col-lg-8">
                                <p className="mb-1 text-black">At People Index Hub, our Resume Builder is designed to help professionals present their experience with clarity, confidence, and market relevance. We combine hiring expertise with smart tools to ensure your resume reflects what employers are actively seeking today.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Evidence Based Features */}
                <div className="tailored-talent-section evidence-section home-es text-white" style={{ padding: "70px 0" }}>
                    <div className="container">
                        <div className="row g-3 flex-nowrap">
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Effortlessly Create Your Resume</h6>
                                    <p>Build a professional resume quickly using guided steps and proven structures. Our platform removes guesswork and ensures your resume is clear, organized, and impactful.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Your Competitive Resume Is Yours To Keep</h6>
                                    <p>Once created, your resume is fully yours. Download, update, and reuse it anytime without restrictions, giving you long-term value and flexibility.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Quickly Apply To Jobs With Your New Resume</h6>
                                    <p>Apply to relevant opportunities faster with a resume that aligns with employer expectations. Spend less time editing and more time connecting with opportunities.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Get Jobs Sent Straight To Your Inbox</h6>
                                    <p>Receive job alerts matched to your resume and preferences. Stay informed about new roles without constantly searching.</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-theme3 mt-5">submit your resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
