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
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
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
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
                                </p>
                            </div>
                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-4">
                                    recruit with agility
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
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
                                    contact us to start a conversation about your needs
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula.
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
