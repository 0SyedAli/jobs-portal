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
                                <p className="mb-2">Our flexible employment options are designed to cater to the specific needs of our clients. Whether you require interim executives, project-based specialists, or permanent educational leaders, The Community Wellness Project delivers the talent you need, when and where you need it.</p>
                                <p className="mb-2">We prioritize client success by managing the entire recruitment process. Our dedicated team ensures seamless integration of new hires, allowing organizations to focus on their strategic goals. We believe in building long-term partnerships with our clients, providing continuous support and adapting to evolving needs.</p>
                                <p >By partnering with The Community Wellness Project, you are investing in your organization’s success through empowered leadership and skilled personnel. Our commitment to excellence and client satisfaction drives us to deliver the best staffing solutions in the industry</p>
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
                        <h2>How it works</h2>
                        <p className="subtitle mb-0">
                            people index hub is the world’s leading talent company and a partner of choice to clients. In 2024, in our 39 markets, we helped over 1.7 million people find a job and advised over 180,000 clients on their talent needs
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
                                    it takes 128 jobs to land a plane, but one place to apply for all of them
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
                                </p>
                            </div>

                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-5">
                                    a new workplace baseline
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
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
                                    empowering clients, talent and communities
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
                                </p>
                            </div>
                            <div className="col-lg-5 text-start">
                                <h2 className="section-title mb-5">
                                    understanding talent scarcity: the Gen Z workplace blueprint
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Porttitor erat eget sit turpis libero duis sed semper laoreet. Eget sit felis consequat a. Tincidunt ullamcorper et nec maecenas dui pulvinar blandit. Nisi amet molestie massa amet amet nisl in aliquam. Duis quis integer elementu
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
                                    find people index hub in your market.
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula.
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
                                    title: "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
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
            <Footer />
        </>
    );
}
