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
                                        Protecting job seekers is one of our most important responsibilities. Our team works to ensure that every opportunity shared through People Index Hub is genuine trustworthy and safe.
                                    </p>
                                    <p className="mb-2">
                                        We encourage all users to stay alert and informed especially when interacting with unfamiliar employers or messages that feel unusual. Scammers often attempt to impersonate real companies create fake job postings or contact candidates through personal messages that ask for sensitive information.
                                    </p>
                                    <p>
                                        We encourage all users to stay alert and informed especially when interacting with unfamiliar employers or messages that feel unusual. Scammers often attempt to impersonate real companies create fake job postings or contact candidates through personal messages that ask for sensitive information.
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
                                    Job scams usually involve fake online job ads fake employer profiles or unrealistic offers that seem too good to be true. Scammers may also contact individuals through text messages or platforms like Facebook or WhatsApp pretending to offer interviews or instant job placements.
                                </p>
                                <p className="mb-0">
                                    These attempts often involve pressure to share personal information pay upfront fees or transfer money before the interview. Any request that asks for payment personal details or banking access before an official hiring process should always be treated as suspicious.
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
                            Job scams can take many forms but the signs below make them easier to identify.
                        </p>

                        <div className="accordion" id="faqAccordion">
                            {[
                                { q: "How long will the recruitment process take?", a: "If the recruiter promises an instant offer without interviews meetings or verification it may be a scam." },
                                { q: "Do you recruit for Graduates Apprentices and Students?", a: "Scammers often target individuals who may be new to the workforce because they are more likely to trust misleading promises." },
                                { q: "What does the recruitment and selection process involve?", a: "Legitimate employers follow clear steps including interviews reference checks and official communication sent from company email addresses." },
                                { q: "Can I receive notifications for any future jobs that may interest me  ?", a: "Real companies allow you to subscribe to job alerts so you never feel pressured to accept suspicious offers." },
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
                                    <p className="mb-2">If you believe you have been contacted by a scammer stop communication immediately.</p>
                                    <p className="mb-2">Do not share personal information do not send money and do not open links from unfamiliar sources. Take screenshots of the messages emails or profiles involved so you can report them accurately.</p>
                                    <p>Report the incident to your local authorities and notify the platform where the scam occurred. Our team at People Index Hub is always here to guide you through the process and help you stay safe.</p>
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
                                    Real opportunities come from trusted companies transparent communication and clear hiring steps. If an offer feels uncertain take time to research the employer read reviews or request a video meeting to confirm legitimacy.
                                </p>
                                <p className="mb-0">
                                    At People Index Hub we are committed to promoting safe hiring practices and connecting you with employers who value professionalism honesty and growth. When you stay informed you protect your future and ensure that every opportunity you pursue is real meaningful and aligned with your career goals.
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