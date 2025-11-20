"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function Educators() {
    return (
        <>
            <Navbar />

            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Educators</h1>
                </section>

                {/* Talent Section */}
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row gx-4 align-items-start">
                            <div className="col-lg-3">
                                <Image src="/images/ed-sec1.png" className="w-100 h-100" width={400} height={700} alt="" />
                            </div>
                            <div className="col-lg-9">
                                <div className="p-4">
                                    <h2 className="section-title" style={{ fontSize: "40px" }}>
                                        Talent That Teaches, Inspires, <br /> and Leads
                                    </h2>
                                    <p className="mb-2">
                                        Our team consists of passionate educational professionals driving our mission. Educational Specialists assess and support student needs across academics, social-emotional skills, and behavior to inform individualized education plans. Licensed School Psychologists lend expertise in student learning, mental health, behavior analysis, and educational systems. Instructional Assistants provide tailored intervention support through push-in and pull-out models under teacher supervision.
                                    </p>
                                    <p>
                                        Whether virtual, hybrid, or onsite, our contractors receive competitive compensation and long-term incentives. Through our training and resources, they crave flexibility while upholding quality. Our employees are the backbone, allowing educational organizations to reallocate resources to core priorities. With their skills and our staffing solutions, we empower communities.
                                    </p>
                                </div>
                                <Image src="/images/ed-sec1-2.png" className="w-100 h-auto" width={500} height={300} alt="" />

                            </div>

                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="tailored-talent-section evidence-section our-professionals text-white" style={{ padding: "100px 0px 110px" }}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                <h2 className="section-title">
                                    Our Professionals
                                </h2>
                                <p className="mb-0">
                                    Meet the dedicated professionals behind the Community Wellness Project, a team of experts passionate about empowering educational institutions to thrive and making a lasting impact on the lives of students.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-3 flex-nowrap pt-5">
                            <div className="col-sm-4">
                                <div className="category-card active">
                                    <h6 className="category-title">Speech Pathologists</h6>
                                    <p>Experts in communication disorders, they assess, diagnose, and treat speech, language, and swallowing difficulties, empowering individuals to communicate effectively.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="category-card">
                                    <h6 className="category-title">Speech Pathologists</h6>
                                    <p>Experts in communication disorders, they assess, diagnose, and treat speech, language, and swallowing difficulties, empowering individuals to communicate effectively.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="category-card">
                                    <h6 className="category-title">Speech Pathologists</h6>
                                    <p>Experts in communication disorders, they assess, diagnose, and treat speech, language, and swallowing difficulties, empowering individuals to communicate effectively.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Blog Section */}
                <div className="blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                <h2 className="section-title">News and Blog</h2>
                                <p className="mb-0">Meet the dedicated professionals behind the Community Wellness Project, a team of experts passionate about empowering educational institutions to thrive and making a lasting impact on the lives of students.</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    date: "30 March 2024",
                                    title: "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "How To Avoid The Top Six Most Common Job Interview Mistakes",
                                    label: "blog"
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-6">
                                    <div className="blog_card">
                                        <div className="b_label">{post.label}</div>
                                        <Image src={post.img} width={500} height={500} alt="" />
                                        <div className="b_content">
                                            <small className="blog-date">{post.date}</small>
                                            <h6 className="blog-title">{post.title}</h6>
                                            <a href="#" className="read-more-link">
                                                Read more →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}