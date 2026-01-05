"use client"
import Image from "next/image"
import Link from "next/link"

export default function Educators() {
    return (
        <>

            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section home-hero-section member-hero-section">
                    <h1>Mentorship</h1>
                </section>

                {/* Talent Section */}
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section mentor_seciont">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-6 text-center pe-5">
                                <Image src="/images/mentor-sec1.jpg" className="object-fit-cover w-100 rounded" width={500} height={500} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title pe-5 mb-2" style={{ fontSize: "50px" }}>
                                    Mentorship
                                </h2>
                                <p className="mb-2">
                                    Considering taking the next step in your professional journey Our mentorship programs are designed to give you the guidance support and clarity you need to grow with confidence. We focus on providing personalized direction that helps you strengthen your abilities understand complex concepts and develop the skills required to reach meaningful goals.
                                </p>
                                <p className="mb-2">
                                    Through one on one guidance and structured learning we help you overcome challenges discover new possibilities and build a solid foundation for long term success. Our mentors walk beside you offering insight encouragement and practical strategies that support your development at every stage.
                                </p>
                                <p className="mb-4">
                                    Join us to gain valuable mentorship that elevates your potential opens new opportunities and prepares you to thrive in both your professional and personal life.
                                </p>
                                <Link href="#!" className="text-decoration-underline" style={{ color: "#E95C4B", fontWeight: "500" }}>Learn More</Link>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" >
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                <h2 className="section-title text-black">
                                    Interested? Let’s Talk!
                                </h2>
                                <p className="mb-0 text-black">
                                    Seeking staffing solutions or looking to offer your expertise Connect with us today. We will help you explore how our tailored services can support your growth or strengthen your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}