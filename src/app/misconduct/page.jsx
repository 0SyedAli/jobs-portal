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
                    <h1>misconduct reporting procedure</h1>
                </div>

                {/* Evidence Based Features */}
                <div className="op_terms_bottom">
                    <div className="container ">
                        <div className="row pb-3">
                            <div className="col-lg-3 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title text-black" style={{ fontSize: "50px" }}>
                                    reporting misconduct
                                </h2>
                            </div>
                            <div className="col-lg-9">
                                <p className="mb-1 text-black">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                <p className="mb-1 text-black">Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                                <p className="mb-1 text-black">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                <p className="mb-1 text-black">Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Go To The Overview */}
                <section className="gto-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="section-title mb-4">
                                    report an incident in your country
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula.
                                </p>
                            </div>
                            <div className="col-lg-4 text-end">
                                <div className="btn btn-theme3">see contact details</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
