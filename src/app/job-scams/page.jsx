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
                <section className="hero-section">
                    <h1>how to avoid and report job scams</h1>
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
                                        your safety is our priority
                                    </h2>
                                    <p className="mb-2">
                                        Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.
                                    </p>
                                    <p>
                                        Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.
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
                                    what is a job scam?
                                </h2>
                                <p className="mb-0">
                                    These recruitment scams often involve fake online job ads on social platforms and untrusted job portals offering high-paying jobs that are too good to be true. Another common job scam involves sending a fake offer in an unsolicited text message or on another platform like Facebook or WhatsApp. Job scammers will often ask victims to share personal information or transfer money prior to the interview.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="container">
                        <h2>how to spot a job scam</h2>
                        <p className="subtitle">
                            Job scams can take many different forms, but here are some common themes that can make it easier to spot.
                        </p>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "How long will the recruitment process take?", a: "Nunc sed ad purus. Nisi sis lobortis proin locus torques, sit ipse maleada ad sed in. Pislis du ultricies a sed volutpat. Com iaque velit volutpat com varius..." },
                                { q: "Do you recruit for Graduates, Apprentices and Students?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                                { q: "What does the recruitment and selection process involve?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                                { q: "Can I receive notifications for any future jobs that may interest me?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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

                {/* Dark CTA Section */}
                <section>
                    <div className="container">
                        <div className="dark-cta-section js_dc_section text-white">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-7">
                                    <h2 className="section-title">
                                        what should you do if you encounter a job scam?
                                    </h2>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam.</p>
                                    <p>Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.</p>
                                </div>
                                <div className="col-4 text-center">
                                    <Image src="/images/wsjs-im5.jpg" width={320} height={448} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Evidence Based Features */}
                <div className="our-professionals js-our-scam " style={{ padding: "0px 0px 50px" }}>
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                <h2 className="section-title">
                                    finding a real opportunity
                                </h2>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur. Sagittis mauris orci felis arcu eu habitant elementum quam. Purus amet vivamus at venenatis auctor egestas vehicula. Etiam scelerisque morbi consectetur ipsum potenti velit ipsum. Adipiscing vel quisque ac ultrices sollicitudin amet tempor nullam Facilisi luctus neque ligula mauris senectus ac nam netus massa. A vivamus ultrices neque neque iaculis tellus id nec. Tristique diam at elementum vel eu enim. Tristique eget ipsum nisl facilisis scelerisque amet. Id viverra nulla penatibus malesuada adipiscing tellus in. Et sem vitae odio proin pulvinar vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}