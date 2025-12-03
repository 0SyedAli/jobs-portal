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
                                <p className="mb-1 text-black">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                <p>Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
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
                                    <h6 className="category-title">Data-Driven Decision Making</h6>
                                    <p>We use performance reviews, historical data, and predictive evaluations to recognize candidates who have the skills and mindset to thrive. This approach supports smart hiring decisions based on objective insights.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Comprehensive Evaluation</h6>
                                    <p>Through interviews, assessments, skill reviews, and situational testing, we gain a clear understanding of each candidates strengths, experience, and potential.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Balanced Data & Intuition</h6>
                                    <p>While data provides valuable insight, experience and intuition also play an important role in identifying cultural fit and leadership qualities. Our hiring framework blends both to support more successful outcomes.</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="category-card">
                                    <h6 className="category-title">Diverse Candidate Pool</h6>
                                    <p>We work to ensure the recruitment process remains inclusive and fair by promoting diversity and encouraging applications from underrepresented groups.</p>
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
