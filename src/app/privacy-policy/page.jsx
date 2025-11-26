"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <div className="educators-wrapper">
                {/* Hero Section */}
                <section className="hero-section home-hero-section member-hero-section">
                    <h1>Privacy Policy</h1>
                </section>

                {/* Terms & Conditions Section */}
                <div className="evidence-approach-section mentor_seciont">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h2 className="section-title pe-5 mb-4" style={{ fontSize: "50px" }}>Global Privacy Policy</h2>
                                <p className="mb-0">
                                    <strong>Last Updated: November 2025</strong>
                                </p>
                                <p>
                                    People Index Hub is committed to protecting your privacy and ensuring transparent data practices
                                    across all global markets. This Privacy Policy explains how we collect, use, store, protect, and share
                                    your personal information in compliance with global privacy laws including GDPR, CCPA, CPRA, UK Data
                                    Protection Act, PIPEDA, and other applicable regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Privacy Policy Section */}
                <div className="op_terms_bottom">
                    <div className="container">
                        <div className="row pb-3">
                            <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                                {/* 1. Information We Collect */}
                                <h3 className="section-title text-black">1. Information We Collect</h3>
                                <p className="text-black mb-3">
                                    We collect different categories of personal information depending on your relationship with us.
                                </p>

                                <h4 className="text-black font-semibold mb-2">1.1 Website Visitors</h4>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• IP address, browser details, and device information</li>
                                    <li>• Cookies and website analytics</li>
                                    <li>• Contact form submissions and communication history</li>
                                </ul>

                                <h4 className="text-black font-semibold mb-2">1.2 Candidates and Job Applicants</h4>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Name, contact details, and address</li>
                                    <li>• Employment history and educational background</li>
                                    <li>• Resume, certificates, skills, and qualifications</li>
                                    <li>• Assessment records and interview notes</li>
                                    <li>• Job preferences and professional interests</li>
                                </ul>

                                <h4 className="text-black font-semibold mb-2">1.3 Temporary Workers and Employees</h4>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Payroll and banking information</li>
                                    <li>• Government issued identification numbers</li>
                                    <li>• Background checks where legally permitted</li>
                                    <li>• Assignment details, timesheets, and scheduling data</li>
                                    <li>• Health and safety information as required</li>
                                </ul>

                                <h4 className="text-black font-semibold mb-2">1.4 Business Clients and Partners</h4>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Business contact information</li>
                                    <li>• Contract, billing, and communication records</li>
                                </ul>

                                <h4 className="text-black font-semibold mb-2">1.5 Sensitive Personal Information</h4>
                                <p className="text-black mb-4">
                                    We may process sensitive information only when legally permitted or explicitly consented to.
                                </p>

                                {/* 2. How We Use Your Information */}
                                <h3 className="section-title text-black mt-5">2. How We Use Your Information</h3>
                                <p className="text-black mb-3">We use your information to:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Deliver recruitment and staffing services</li>
                                    <li>• Match candidates with job opportunities</li>
                                    <li>• Conduct assessments, interviews, and background checks</li>
                                    <li>• Create employment or temporary work agreements</li>
                                    <li>• Provide HR, payroll, and scheduling support</li>
                                    <li>• Manage client relationships and business operations</li>
                                    <li>• Improve our platforms and services</li>
                                    <li>• Comply with legal obligations</li>
                                </ul>
                                <p className="text-black font-semibold mb-4">We do not sell personal information.</p>

                                {/* 3. Legal Bases For Processing */}
                                <h3 className="section-title text-black mt-5">3. Legal Bases For Processing</h3>
                                <p className="text-black mb-3">We process data under:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Consent</li>
                                    <li>• Contractual necessity</li>
                                    <li>• Legal obligations</li>
                                    <li>• Legitimate interests</li>
                                    <li>• Public interest, where permitted</li>
                                </ul>

                                {/* 4. Data Sharing and Disclosure */}
                                <h3 className="section-title text-black mt-5">4. Data Sharing and Disclosure</h3>
                                <p className="text-black mb-3">We may share your information with:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Employers searching for talent</li>
                                    <li>• Background screening providers</li>
                                    <li>• Payroll and financial service providers</li>
                                    <li>• IT hosting and software partners</li>
                                    <li>• Legal authorities when required</li>
                                    <li>• People Index Hub subsidiaries and affiliates</li>
                                </ul>
                                <p className="text-black font-semibold mb-4">We never sell your information.</p>

                                {/* 5. International Data Transfers */}
                                <h3 className="section-title text-black mt-5">5. International Data Transfers</h3>
                                <p className="text-black mb-3">
                                    Your information may be transferred to countries with different data protection laws. We use:
                                </p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Standard Contractual Clauses</li>
                                    <li>• Data Processing Agreements</li>
                                    <li>• Adequacy mechanisms</li>
                                    <li>• Technical and organizational safeguards</li>
                                </ul>

                                {/* 6. Data Retention */}
                                <h3 className="section-title text-black mt-5">6. Data Retention</h3>
                                <p className="text-black mb-4">
                                    We retain personal information only as long as necessary for recruitment, employment, business
                                    operations, or legal compliance. Upon request, we delete data unless retention is required by law.
                                </p>

                                {/* 7. Your Privacy Rights */}
                                <h3 className="section-title text-black mt-5">7. Your Privacy Rights</h3>
                                <p className="text-black mb-3">You may have the right to:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Access your data</li>
                                    <li>• Correct inaccurate information</li>
                                    <li>• Request deletion</li>
                                    <li>• Restrict processing</li>
                                    <li>• Object to processing</li>
                                    <li>• Request portability</li>
                                    <li>• Withdraw consent</li>
                                    <li>• Opt out of marketing</li>
                                    <li>• File a complaint with your data protection authority</li>
                                </ul>
                                <p className="text-black">California residents also have rights under CCPA and CPRA.</p>

                                {/* 8. Cookies and Tracking Technologies */}
                                <h3 className="section-title text-black mt-5">8. Cookies and Tracking Technologies</h3>
                                <p className="text-black mb-3">We use cookies for:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Website functionality</li>
                                    <li>• Analytics and performance</li>
                                    <li>• Personalization</li>
                                </ul>
                                <p className="text-black mb-4">You may manage cookie settings through your browser.</p>

                                {/* 9. Data Security */}
                                <h3 className="section-title text-black mt-5">9. Data Security</h3>
                                <p className="text-black mb-3">We use strong security measures including:</p>
                                <ul className="text-black mb-4 ms-4">
                                    <li>• Encryption</li>
                                    <li>• Access controls</li>
                                    <li>• Secure servers</li>
                                    <li>• Monitoring and auditing</li>
                                    <li>• Employee privacy training</li>
                                </ul>

                                {/* 10. Children's Privacy */}
                                <h3 className="section-title text-black mt-5">10. Children's Privacy</h3>
                                <p className="text-black mb-4">
                                    We do not intentionally collect information from children under sixteen.
                                </p>

                                {/* 11. Third Party Links */}
                                <h3 className="section-title text-black mt-5">11. Third Party Links</h3>
                                <p className="text-black mb-4">
                                    We are not responsible for the privacy practices of external websites.
                                </p>

                                {/* 12. Changes to This Policy */}
                                <h3 className="section-title text-black mt-5">12. Changes to This Policy</h3>
                                <p className="text-black mb-4">
                                    We may update this policy and will notify users of significant changes.
                                </p>

                                {/* 13. Contact Us */}
                                <h3 className="section-title text-black mt-5 mb-4">13. Contact Us</h3>
                                <div className="text-black bg-muted p-4 rounded-lg mb-4">
                                    <p className="mb-2">
                                        <strong>People Index Hub – Privacy Office</strong>
                                    </p>
                                    <p className="mb-2">
                                        Email:{" "}
                                        <a href="mailto:privacy@peopleindexhub.com" className="text-blue-600 hover:underline">
                                            privacy@peopleindexhub.com
                                        </a>
                                    </p>
                                    <p className="mb-2">
                                        Phone: <span className="text-gray-600">[Insert Number]</span>
                                    </p>
                                    <p className="mb-0">
                                        Address: <span className="text-gray-600">[Insert Physical Address]</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* need resume */}
                <section className="need-resume-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <h2 className="section-title">
                                    need help with your resume?
                                </h2>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur. Eu ante cursus justo lectus ac mauris Venenatis vel risus pretium diam aliquam.</p>
                            </div>
                            <div className="col-lg-5 text-end">
                                <Image src="/images/need-resume.png" className="" width={360} height={313} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}