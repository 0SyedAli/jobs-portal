"use client"
import Image from "next/image"
import Link from "next/link"

export default function Educators() {
    return (
        <>

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
                                    At People Index Hub, we are committed to building an inclusive digital environment where every individual can access opportunities with ease and confidence. Our platform is thoughtfully designed to support users with diverse abilities by offering clear guidance, intuitive navigation, and helpful resources throughout their journey. We aim to empower you with meaningful tools that promote independence, equal access, and a deeper understanding of employment and career options. With features created to accommodate different needs, you receive personalized assistance that aligns with your goals. Join us as we work together to create a supportive space where everyone can thrive and pursue their ambitions.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" style={{ backgroundColor: "#F0F0F0" }}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <div className="row justify-content-center mb-4">
                                    <div className="col-lg-8">
                                        <h2 className="section-title text-black ">
                                            Accessibility Statement
                                        </h2>
                                        <p className="mb-0 text-black fw-semibold">
                                            Seeking staffing solutions or want to contract your expertise? Connect with us today!
                                        </p>
                                        <p className="mb-0 text-black fw-semibold">
                                            We’ll discuss how our tailored services empower your organization.
                                        </p>
                                    </div>
                                </div>
                                <p className="mb-4 text-black">
                                    We’re dedicated to ensuring our platform remains accessible for users of all abilities by offering adaptive features that support smooth navigation and interaction. Our commitment includes creating clear content, simplifying user processes, and improving usability to ensure that everyone can access career information and opportunities confidently.
                                </p>
                                <p className="mb-4 text-black">We continually refine our tools to support accessibility needs through thoughtful design and helpful guidance. Our aim is to provide consistent access to employment resources, clear job details, and supportive features that enhance your overall experience. We strive to create an inclusive space that empowers individuals to explore opportunities with greater ease.</p>
                                <p className="mb-4 text-black">We believe accessibility is essential for equal opportunity, so our platform includes features that enhance readability and interaction for all users. From organized layouts to intuitive navigation, our goal is to deliver an experience that supports independent access to career pathways and essential employment resources.</p>
                                <p className="mb-0 text-black">Our ongoing focus is to strengthen accessibility across the platform by improving clarity, functionality, and user support tools. We aim to ensure everyone can explore job options comfortably and confidently. Through consistent updates and enhancements, we work to maintain a welcoming experience that meets the needs of diverse users everywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}