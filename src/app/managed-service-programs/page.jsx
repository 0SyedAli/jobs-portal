"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-wrapper">
                {/* Hero Section */}
                <div className="hero-section">
                    <h1>Managed Service Programs </h1>
                </div>

                {/* Blog Section */}
                <div className="blog-section pt-blog-section" style={{background:"#F0F0F0"}}>
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                <h2 className="section-title">explore global talent solutions</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    img: "/images/ms-img5.jpg",
                                    title: "talent acquisition",
                                },
                                {
                                    img: "/images/ms-img6.jpg",
                                    title: "talent development",
                                },
                                {
                                    img: "/images/ms-img7.jpg",
                                    title: "talent transition",
                                },
                                {
                                    img: "/images/ms-img8.jpg",
                                    title: "advisory",
                                },
                            ].map((post, idx) => (
                                <div key={idx} className="col-md-3">
                                    <div className="blog_card">
                                        {/* <div className="b_label">{post.label}</div> */}
                                        <Image src={post.img} width={500} height={400} style={{ height: "420px" }} alt="" />
                                        <div className="b_content">
                                            <h6 className="blog-title">{post.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                < div className="how-it-works bg-transparent" style={{ padding: "80px 0" }
                }>
                    <div className="container">
                        <h2>talent acquisition</h2>
                        {/* <h3 className="text-capitalize text-center fs-2 mb-4">finding daily shifts fast and easy</h3> */}
                        <p className="subtitle mb-1">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                        <p className="subtitle mb-1">Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                    </div>
                </div >

                {/* FAQ Section */}
                <div
                    className="faq-section msp-section text-white"
                    style={{
                        backgroundImage: 'url("/images/gto-bg.png")',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        padding: "100px 0",
                    }}
                >
                    <div className="container">
                        <h2 className="mb-4">talent acquisition solutions</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "you’ve got what it takes!", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                                { q: "reach your full potential with a dedicated partner for talent", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                                { q: "stay at the top of your game and excel in your field", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                            ].map((item, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${idx === 0 ? "active" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#accordion${idx}`}
                                        >
                                            <span>{`0${idx + 1}`}</span>
                                            {item.q}
                                        </button>
                                    </h2>
                                    <div
                                        id={`accordion${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Go To The Overview */}
                <section className="hv-gto ms-gto">
                    <div className="container">
                        <div className="row align-items-center gap-5">
                            <div className="col-5 position-relative text-end">
                                <Image
                                    src="/images/ms-img4.jpg"
                                    width={547}
                                    height={436}
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                    style={{ height: "436px", borderRadius: "10px", objectPosition: "center" }}
                                />
                            </div>
                            <div className="col-6">
                                <h2 className="section-title mb-4" style={{ fontSize: "50px" }}>
                                    talent development
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Lacus scelerisque ridiculus sed faucibus. Sit vehicula ante pharetra ut cursus pellentesque. Pharetra tristique augue neque suspendisse euismod at. Potenti tincidunt lacus nibh vel nisl ultrices nunc ornare. Arcu convallis euismod etiam elit neque faucibus.</p>
                                <p className="mb-4">Eget ultrices sit pellentesque mattis est. Massa porttitor aliquet dignissim aliquet sit egestas quisque. Mus at a magna semper aliquet blandit porttitor orci consequat. Eget nisl commodo ultrices quis scelerisque tempor arcu. Amet cursus cursus est eu sed id in bibendum.
                                </p>
                                <div className="btn btn-theme3 px-4">get in touch today</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4">talent development solutions</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "career coaching", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                            ].map((item, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${idx === 0 ? "active" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#accordion${idx}`}
                                        >
                                            <span>{`0${idx + 1}`}</span>
                                            {item.q}
                                        </button>
                                    </h2>
                                    <div
                                        id={`accordion${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ready To Use */}
                <section className="ready-to-use hvhs-rtu mb-0">
                    <div className="container">
                        <div className="row justify-content-between align-items-center gx-0" style={{ backgroundColor: "#F0F0F0", borderRadius: "10px" }}>
                            <div className="col-5">
                                <div className="rtu-left text-black">
                                    <h2 className="section-title">
                                        talent transition
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Lacus scelerisque ridiculus sed faucibus. Sit vehicula ante pharetra ut cursus pellentesque. Pharetra tristique augue neque suspendisse euismod at. Potenti tincidunt lacus nibh vel nisl ultrices nunc ornare. Arcu convallis euismod etiam elit neque faucibus.
                                        <br />Eget ultrices sit pellentesque mattis est. Massa porttitor aliquet dignissim aliquet sit egestas quisque. Mus at a magna semper aliquet blandit porttitor orci consequat. Eget nisl commodo ultrices quis scelerisque tempor arcu. Amet cursus cursus est eu sed id in bibendum. </p>
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


                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2 className="mb-4">talent transition solutions</h2>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "outplacement", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                                { q: "redeployment", a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, accusantium?" },
                            ].map((item, idx) => (
                                <div key={idx} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${idx === 0 ? "active" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#accordion${idx}`}
                                        >
                                            <span>{`0${idx + 1}`}</span>
                                            {item.q}
                                        </button>
                                    </h2>
                                    <div
                                        id={`accordion${idx}`}
                                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Go To The Overview */}
                <section className="hv-gto ms-gto">
                    <div className="container">
                        <div className="row align-items-center gap-5">
                            <div className="col-5 position-relative text-end pt-5">
                                <Image
                                    src="/images/ms-img1.png"
                                    width={363}
                                    height={391}
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                    style={{ height: "391px", borderRadius: "10px", objectPosition: "center" }}
                                />
                                <Image
                                    src="/images/ms-img2.jpg"
                                    width={240}
                                    height={175}
                                    alt=""
                                    className="img-fluid object-fit-cover hv-img2"
                                    style={{ height: "175px", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="col-6">
                                <h2 className="section-title mb-4" style={{ fontSize: "50px" }}>
                                    engage talent with a positive work experience
                                </h2>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.Considering venturing into entrepreneurship? Take advantage of our comprehensive mentorship programs designed to support you every step of the way on your entrepreneurial journey.
                                </p>
                                <div className="btn btn-theme3 px-4">get in touch today</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    );
}
