"use client"
import Link from "next/link"

export default function Educators() {
    return (
        <>

            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section home-hero-section member-hero-section">
                    <h1>have you identified <br />a security problem?</h1>
                </section>

                {/* Talent Section */}
                {/* Evidence Based Approach */}
                <div className="evidence-approach-section mentor_seciont" style={{ padding: "100px 0" }}>
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-12">
                                <h2 className="section-title pe-5 mb-4" style={{ fontSize: "50px" }}>
                                    have you identified a security problem?
                                </h2>
                                <p className="mb-3">
                                    At People Index Hub, the security of our platform, data, and users is a
                                    top priority. If you believe you have discovered a security
                                    vulnerability, data exposure risk, or any suspicious activity related
                                    to our website or services, we encourage you to report it responsibly.
                                </p>
                                <p className="mb-3">
                                    Security issues may include, but are not limited to, unauthorized
                                    access, data leaks, account compromise, system vulnerabilities, or
                                    misuse of platform features. Reporting these issues helps us take
                                    timely action to protect our users, partners, and systems.
                                </p>
                                <p className="mb-3">
                                    When submitting a security report, please provide clear details such
                                    as the affected page or feature, steps to reproduce the issue, and any
                                    supporting evidence if available. This information allows our
                                    technical team to investigate and resolve the matter efficiently.
                                </p>
                                <p className="mb-3">
                                    We ask that security issues are reported privately and not disclosed
                                    publicly until we have had sufficient time to assess and address the
                                    concern. This responsible approach helps prevent potential misuse and
                                    protects all users of the platform.
                                </p>
                                <p>
                                    If you have identified a security concern, please contact us through
                                    our official reporting channels. We appreciate your effort in helping
                                    us maintain a secure, reliable, and trusted environment for everyone
                                    using People Index Hub.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evidence Based Features */}
                <div className="our-professionals mentor-our text-white" >
                    <div className="container ">
                        <div className="row align-items-center justify-content-center pb-3">
                            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                <h2 className="section-title text-black mb-5">
                                    have you identified a security problem?
                                </h2>
                                <Link className=" btn btn-primary text-white ms-2 px-4 py-2" href="#register">report it here</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}