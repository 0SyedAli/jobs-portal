"use client";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>why work with US</h1>
                </div>


                {/* Blog Section */}
                <div className="blog-section pt-blog-section">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">the perks of working with People Index</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/blog2.jpg",
                                    title: "it's free",
                                    label: "news",
                                    bLi: [
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                    ]
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    title: "it's free",
                                    label: "news",
                                    bLi: [
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    ]
                                },
                                {
                                    img: "/images/blog1.jpg",
                                    title: "it's free",
                                    label: "news",
                                    bLi: [
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    ]
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-4">
                                    <div className="blog_card">
                                        <div className="b_label">{post.label}</div>
                                        <Image src={post.img} width={500} height={400} alt="" />
                                        <div className="b_content">
                                            <h6 className="blog-title">{post.title}</h6>
                                            <ul>
                                                {post.bLi.map((item, i) => (
                                                    <li key={i}>
                                                        <span><IoCheckmarkOutline /></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Ready To Use */}
                <section className="ready-to-use">
                    <div className="container">
                        <div className="row justify-content-between align-items-center gx-0" style={{ backgroundColor: "#192155", borderRadius: "10px" }}>
                            <div className="col-5">
                                <div className="rtu-left">
                                    <h2 className="section-title">
                                        ready to find your next challenge?
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. </p>
                                    <div className="btn btn-theme3">submit your resume</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <Image
                                    src="/images/rtf_img.jpg"
                                    width={600}
                                    height={400}
                                    className="w-100 object-fit-cover"
                                    style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px", }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section >

                {/* How It Works */}
                < div className="how-it-works" style={{ padding: "70px 0 80px" }
                }>
                    <div className="container">
                        <h2>People Index app </h2>
                        <h3 className="text-capitalize text-center fs-2 mb-4">finding daily shifts fast and easy</h3>
                        <p className="subtitle mb-0">
                            Lorem ipsum dolor sit amet consectetur. Leo eget pellentesque elementum enim. Faucibus elementum justo et eu in dui in a ut. Vitae elementum ullamcorper habitasse aenean condimentum. Arcu pellentesque leo et eu nec. Ut rhoncus odio penatibus arcu eget aliquet. Tellus pretium turpis et ut faucibus id duis feugiat sit. Turpis fermentum feugiat bibendum nunc tempus. Non amet consequat eget ut curabitur in nisl auctor. Ornare non vitae purus orci id porttitor fames ac. Odio laoreet ut neque bibendum diam pulvinar. Quisque odio dui elit tellus morbi lectus. Porta rhoncus ut semper commodo massa ac pulvinar fames.
                            Ultricies lobortis pulvinar semper mi ornare. Facilisis eu cursus donec a nulla massa eu.
                        </p>
                    </div>
                </div >

            </div >
        </>
    );
}
