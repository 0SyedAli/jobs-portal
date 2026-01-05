"use client";
import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function About() {
  return (
    <>
      
      <div className="about-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>Managed Service Programs </h1>
        </div>

        {/* Blog Section */}
        <div
          className="blog-section pt-blog-section"
          style={{ background: "#F0F0F0" }}
        >
          <div className="container">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="col-lg-12 mb-4 mb-lg-0 text-start">
                <h2 className="section-title">
                  explore global talent solutions
                </h2>
                <p>
                  Our managed service programs deliver end-to-end workforce
                  solutions designed to help organizations attract, develop,
                  transition, and retain top talent globally.
                </p>
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
                    <Image
                      src={post.img}
                      width={500}
                      height={400}
                      style={{ height: "420px" }}
                      alt=""
                    />
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
        <div
          className="how-it-works bg-transparent"
          style={{ padding: "80px 0" }}
        >
          <div className="container">
            <h2>talent acquisition</h2>
            {/* <h3 className="text-capitalize text-center fs-2 mb-4">finding daily shifts fast and easy</h3> */}
            <p className="subtitle mb-1">
              We help organizations identify, attract, and hire high-quality
              talent through strategic sourcing, screening, and recruitment
              solutions aligned with business goals.
            </p>{" "}
          </div>
        </div>

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
                {
                  q: "What are customized hiring strategies?",
                  a: "They’re tailored recruitment plans designed around your specific goals, roles, and company culture.",
                },
                {
                  q: "What does a dedicated recruitment team mean?",
                  a: "It means a focused team of recruiters working exclusively on your hiring needs.",
                },
                {
                  q: "How does scalable hiring support work?",
                  a: "We adjust hiring resources up or down based on your changing business demands.",
                },
                {
                  q: "What is employer branding alignment?",
                  a: "It ensures your hiring process reflects and strengthens your company’s brand and values.",
                },
              ].map((item, idx) => (
                <div key={idx} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        idx === 0 ? "active" : "collapsed"
                      }`}
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
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
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
                  style={{
                    height: "436px",
                    borderRadius: "10px",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="col-6">
                <h2 className="section-title mb-4" style={{ fontSize: "50px" }}>
                  talent development
                </h2>
                <p className="mb-4">
                  Our talent development programs focus on strengthening skills,
                  leadership capabilities, and long-term workforce performance
                  through targeted initiatives.
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
                {
                  q: "What is career coaching?",
                  a: "Personalized guidance to help individuals plan, grow, and succeed in their careers.",
                },
                {
                  q: "What does leadership development include?",
                  a: "Programs that build leadership skills like decision-making, communication, and team management.",
                },
                {
                  q: "What are skills upskilling programs?",
                  a: "Training initiatives designed to enhance or update skills for current and future roles.",
                },
              ].map((item, idx) => (
                <div key={idx} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        idx === 0 ? "active" : "collapsed"
                      }`}
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
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
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
            <div
              className="row justify-content-between align-items-center gx-0"
              style={{ backgroundColor: "#F0F0F0", borderRadius: "10px" }}
            >
              <div className="col-5">
                <div className="rtu-left text-black">
                  <h2 className="section-title">talent transition</h2>
                  <p>
                    We support organizations and employees through change by
                    providing structured transition programs that maintain
                    productivity and engagement.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <Image
                  src="/images/rtf_img.jpg"
                  width={600}
                  height={400}
                  className="w-100 object-fit-cover"
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="container">
            <h2 className="mb-4">talent transition solutions</h2>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What are outplacement services?",
                  a: "Support programs that help employees transition smoothly into new job opportunities.",
                },
                {
                  q: "What is workforce redeployment?",
                  a: "The process of moving employees into new roles within or across the organization.",
                },
                {
                  q: "What does career transition support include?",
                  a: "Guidance, coaching, and resources to help individuals navigate career changes with confidence.",
                },
              ].map((item, idx) => (
                <div key={idx} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        idx === 0 ? "active" : "collapsed"
                      }`}
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
                    className={`accordion-collapse collapse ${
                      idx === 0 ? "show" : ""
                    }`}
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
                  style={{
                    height: "391px",
                    borderRadius: "10px",
                    objectPosition: "center",
                  }}
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
                  Ignite the Power of Your Talent
                </h2>
                <p className="mb-5">
                  Our holistic workforce solutions help organizations unlock
                  potential, drive performance, and achieve sustainable growth
                  through people-first strategies.
                </p>
                <div className="btn btn-theme3 px-4">get in touch today</div>
              </div>
            </div>
          </div>
        </section>
        {/* need resume */}
        <section className="need-resume-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-7">
                <h2 className="section-title">How Can We Help?</h2>
                <p className="mb-0">
                  Connect with our team to discuss tailored managed service programs designed to meet your workforce needs.
                </p>
              </div>
              <div className="col-lg-5 text-end">
                <Image
                  src="/images/need-resume.png"
                  className=""
                  width={360}
                  height={313}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}
