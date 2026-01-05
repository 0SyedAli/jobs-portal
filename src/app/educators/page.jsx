"use client"
import Image from "next/image"

export default function Educators() {
    return (
        <>

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
                                        Our team is made up of passionate educational professionals who bring dedication and purpose to every learning environment. Educational Specialists support student growth across academics social emotional skills and behavior to guide the creation of individualized learning plans. Licensed School Psychologists provide expertise in student development mental health assessment behavior analysis and modern educational practices. Instructional Assistants deliver focused support through structured teaching models that help students progress with confidence.
                                    </p>
                                    <p>
                                        Whether classes are conducted virtually in person or through blended formats our contractors receive competitive compensation and long term incentives. With the training and resources we provide they enjoy the freedom to grow while maintaining excellence. Our educators serve as the foundation of every program allowing schools and organizations to allocate their resources more efficiently. Through their skills and our staffing solutions we help communities strengthen learning outcomes and empower future success.
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
                                {/* <p className="mb-0">
                                    Meet the dedicated professionals behind the Community Wellness Project, a team of experts passionate about empowering educational institutions to thrive and making a lasting impact on the lives of students.
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-3 flex-nowrap pt-5">
                            <div className="col-sm-4">
                                <div className="category-card active">
                                    <h6 className="category-title">Speech Pathologists</h6>
                                    <p>Experts in communication disorders they assess diagnose and treat speech language and swallowing challenges. Their support helps individuals communicate more effectively and improve daily interactions.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="category-card">
                                    <h6 className="category-title">Occupational Therapists</h6>
                                    <p>Focused on strengthening individuals ability to perform daily tasks they provide guided interventions that enhance physical cognitive and social functioning for improved independence and quality of life.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="category-card">
                                    <h6 className="category-title">Physical Therapists</h6>
                                    <p>Dedicated to restoring mobility and strength they use specific exercises and therapeutic techniques that reduce pain improve movement and promote overall well being after injury or illness.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Blog Section */}
                <div className="blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                {/* <p className="mb-0">Meet the dedicated professionals behind the Community Wellness Project, a team of experts passionate about empowering educational institutions to thrive and making a lasting impact on the lives of students.</p> */}
                                <div>
                                    <h2 className="section-title">News and Blog</h2>
                                    <div className="d-flex justify-content-end align-items-center mb-4">
                                        <a href="/blogs" className="view-all-link text-decoration-underline">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    date: "30 March 2024",
                                    title: "Thirty March Two Thousand Twenty Four",
                                    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "Thirty March Two Thousand Twenty Four",
                                    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?",
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

        </>
    )
}