"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Partner For Talent</h1>
                </div>

                {/* Evidence Based Approach */}
                <div className="evidence-approach-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h2 className="section-title" style={{ fontSize: "40px" }}>
                                    to become the world’s most equitable and specialized company
                                </h2>
                            </div>
                            <div className="col-lg-8">
                                <p className="mb-2">People Index Hub provides flexible employment solutions designed to match the unique needs of every client. Whether you require interim executives, project based specialists, or permanent educational leaders, our team delivers the talent you need, exactly when and where you need it.</p>
                                <p className="mb-2">We support client success by managing the entire recruitment process with precision. Our dedicated team ensures a seamless integration of new hires, helping organizations stay focused on their long term goals. We believe in building strong partnerships that evolve with your needs, providing continuous support and adapting to changing trends.</p>
                                <p >By partnering with People Index Hub, you are investing in your organization’s progress. Through empowered leadership and skilled professionals, we help clients maintain excellence while ensuring a high level of satisfaction. Our commitment to quality drives us to deliver the most effective staffing solutions in the industry.</p>
                            </div>
                            <div className="col-lg-4 text-center">
                                <Image src="/images/pt_img1.jpg" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "40px 0 0 0" }} width={400} height={400} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="how-it-works" style={{ padding: "70px 0 80px" }}>
                    <div className="container">
                        <h2>Get To Know Us</h2>
                        <p className="subtitle mb-0">
                            People Index Hub is the world’s leading talent company and the trusted partner for organizations of every size. In 2024, across our global network of thirty nine markets, we supported more than one point seven million people in finding meaningful employment and advised over one hundred eighty thousand clients on their talent needs.
                        </p>
                    </div>
                </div>

                {/* Evidence Based Approach */}
                <div className="partner-talent-section">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 text-center pe-5">
                                <Image src="/images/pt_img2.png" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-5 text-end">
                                <h2 className="section-title mb-5">
                                    It Takes One Hundred Twenty Eight Jobs To Land A Plane, But Only One Place To Apply For All Of Them
                                </h2>
                                <p className="mb-0">
                                    The modern workforce thrives on collaboration, skill development, and access to meaningful roles. People Index Hub brings together a wide range of opportunities across every specialty, giving job seekers a single destination to explore, apply, and grow.
                                </p>
                            </div>

                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-5">
                                    A New Workplace Baseline
                                </h2>
                                <p className="mb-0">
                                    The workplace continues to evolve with rapid shifts in technology, culture, and expectations. Remote options, flexible schedules, and digital collaboration have become essential for both companies and professionals.
                                </p>
                            </div>
                            <div className="col-lg-6 text-center  ps-5">
                                <Image src="/images/pt_img2.png" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-6 text-center  pe-5">
                                <Image src="/images/pt_img2.png" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                            <div className="col-lg-5 text-end">
                                <h2 className="section-title mb-5">
                                    Empowering Clients, Talent And Communities
                                </h2>
                                <p className="mb-0">
                                    People Index Hub empowers employers by connecting them with skilled professionals who elevate performance. We empower candidates by providing tools, guidance, and visibility into high quality opportunities.
                                </p>
                            </div>
                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-5">
                                    Understanding Talent Scarcity: The Gen Z Workplace Blueprint
                                </h2>
                                <p className="mb-0">
                                    Talent scarcity continues to shape the recruitment landscape, especially as younger generations enter the workforce with new expectations.
                                </p>
                            </div>
                            <div className="col-lg-6 text-center  ps-5">
                                <Image src="/images/pt_img2.png" className="w-100 h-auto object-fit-cover" style={{ borderRadius: "15px" }} width={400} height={400} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Go To The Overview */}
                <section className="gto-section">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <h2 className="section-title mb-4">
                                    Find People Index Hub In Your Market
                                </h2>
                                <p className="mb-0">
                                    Explore our global footprint and discover tailored staffing solutions in your region.
                                </p>
                            </div>
                            <div className="col-4 text-end">
                                <div className="btn btn-theme2">Go To The Overview</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <div className="blog-section pt-blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">latest updates</h2>
                                <p>Stay informed with workplace insights, hiring trends, and expert perspectives designed to help you navigate the changing world of work.</p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    date: "30 March 2024",
                                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    label: "news"
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-4">
                                    <div className="blog_card">
                                        <div className="b_label">{post.label}</div>
                                        <Image src={post.img} width={500} height={400} alt="" />
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
    );
}
