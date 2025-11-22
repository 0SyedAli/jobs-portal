"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function Educators() {
    return (
        <>
            <Navbar />

            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section home-hero-section member-hero-section">
                    <h1>Accessibility Statement</h1>
                </section>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section mentor_seciont">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-6 text-center">
                                <Image src="/images/as-img1.jpg" className="object-fit-contain w-100" width={500} height={500} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title pe-5 mb-2" style={{ fontSize: "50px" }}>
                                    a website designed <br />
                                    with you in mind
                                </h2>
                                <p className="mb-4">
                                    Considering venturing into entrepreneurship? Take advantage of our comprehensive mentorship programs designed to support you every step of the way on your entrepreneurial journey. Our distinctive approach involves providing personalized guidance and practical resources to empower you to achieve independence and success. Through our program, you’ll receive step-by-step assistance tailored to your specific needs, ensuring that you gain a thorough understanding of key concepts and develop the necessary skills to reach your goals. Join us as we walk alongside you, offering invaluable mentorship and equipping you with the tools and knowledge needed to navigate the challenges of starting and growing your own business.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" style={{backgroundColor:"#F0F0F0"}}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <div className="row justify-content-center mb-5">
                                    <div className="col-8">
                                        <h2 className="section-title text-black ">
                                            Accessibility Statement
                                        </h2>
                                        <p className="mb-0 text-black fw-semibold">
                                            Seeking staffing solutions or want to contract your expertise? Connect with us today! We’ll discuss how our tailored services empower your organization.
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-black">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.
                                    Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.
                                </p>
                                <p className="mb-0 text-black">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.
                                    Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}