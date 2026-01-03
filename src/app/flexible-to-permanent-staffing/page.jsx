"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>flexible to permanent staffing</h1>
                </div>

                {/* Evidence Based Approach */}
                <div className="partner-talent-section">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-4">
                                    handling uncertainty
                                </h2>
                                <p className="mb-0">
                                    In a rapidly changing market, workforce uncertainty is inevitable. People Index Hub helps organizations stay resilient by providing flexible staffing models that adapt to shifting business demands. Our approach ensures continuity, stability, and access to skilled professionals exactly when you need them.
                                </p>
                            </div>
                            <div className="col-lg-6 text-center  ps-5">
                                <Image src="/images/fp-img1.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-6 text-center  pe-5">
                                <Image src="/images/fp-img2.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-5 text-end">
                                <h2 className="section-title mb-4">
                                    deal with demand
                                </h2>
                                <p className="mb-0">
                                    Fluctuating demand should never slow your growth. We support businesses with scalable staffing solutions that allow you to expand or adjust your workforce efficiently. From short term surges to long term growth plans, our solutions keep your operations running smoothly.

                                </p>
                            </div>
                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-4">
                                    recruit with agility
                                </h2>
                                <p className="mb-0">
                                    Speed and precision are critical in today’s hiring landscape. Our agile recruitment process connects you with qualified talent quickly while maintaining high quality standards. Whether you need temporary, contract to hire, or permanent placements, we deliver talent that fits.

                                </p>
                            </div>
                            <div className="col-lg-6 text-center  ps-5">
                                <Image src="/images/fp-img3.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
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
                                    Start The Conversation
                                </h2>
                                <p className="mb-0">
                                    Ready to build a workforce strategy that evolves with your business? Contact People Index Hub to discuss your staffing needs and discover how flexible to permanent staffing can drive long term success.
                                </p>
                            </div>
                            <div className="col-3 text-end">
                                <div className="btn btn-theme2 px-4">let's meet</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
