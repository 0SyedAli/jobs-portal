"use client"
import Image from "next/image"

export default function Blogs() {
    return (
        <>
            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>News and Blogs</h1>
                </section>

                {/* Blog Section */}
                <div className="blog-section">
                    <div className="container">
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    date: "30 March 2024",
                                    title: "Thirty March Two Thousand Twenty Four",
                                    para: "Revitalizing Workplace Morale Innovative Tactics For Boosting Employee Engagement in Two Thousand Twenty Four",
                                    label: "news"
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    date: "30 March 2024",
                                    title: "Thirty March Two Thousand Twenty Four",
                                    para: "How To Avoid The Top Six Most Common Job Interview Mistakes",
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
                                            <p className="blog-para">{post.para}</p>

                                            {/* <a href="#" className="read-more-link">
                                                Read more →
                                            </a> */}
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