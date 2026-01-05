"use client";


import Image from "next/image";

export default function Educators() {
  return (
    <>
      

      <div className="educators-wrapper">
        {/* Hero Section */}
        <section className="hero-section home-hero-section member-hero-section">
          <h1>salary comparison tool</h1>
        </section>
        <section className="check-salary-secion">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="css_body">
                  <div className="text-center">
                    <h2 className="">check and compare your salary</h2>
                    <p>
                      Our salary comparison tool allows you to compare your
                      salary with current market averages based on job title and
                      location. This helps you make informed career decisions
                      with confidence.
                    </p>
                  </div>
                  <div className="input-group mt-5 input-group-search justify-content-center mx-auto">
                    <div className="igs_inner d-flex align-items-center gap-3 px-3">
                      <div>
                        <label htmlFor="">search for</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Job Title or Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="">where? (optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                        />
                      </div>
                      <div>
                        <label htmlFor="">annual gross salary (optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Annual Gross Salary"
                        />
                      </div>
                    </div>
                    <button className="btn btn-primary h-100">
                      Check Salary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cs_secion2">
          <div className="container">
            <div className="row mb-5">
              <div className="col-5">
                <h2 className="section-title mb-0">How It Works</h2>
              </div>
              <div className="col-7">
                <p className="mb-0">
                  Enter your job title, location, and salary details to
                  instantly receive up to date salary insights. Our system
                  analyzes real market data to show how your compensation
                  compares.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="cs2_card">
                  <Image
                    src="/images/edit-pencil.png"
                    width={50}
                    height={50}
                    alt=""
                    className="mb-4"
                  />
                  <h4 className="mb-3">
                    Enter Your Job, Location And Salary Details
                  </h4>
                  <p className="mb-0">
                    Provide your role, location, and earnings to access accurate
                    insights tailored to your career path.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="cs2_card">
                  <Image
                    src="/images/time-icon.png"
                    width={50}
                    height={50}
                    alt=""
                    className="mb-4"
                  />
                  <h4 className="mb-3">Get Up To Date Salary Results</h4>
                  <p className="mb-0">
                    View current market salary ranges and understand how your
                    compensation aligns with verified industry trends.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="cs2_card">
                  <Image
                    src="/images/doc-edit.png"
                    width={50}
                    height={50}
                    alt=""
                    className="mb-4"
                  />
                  <h4 className="mb-3">
                    Enter Your Job, Location And Salary Details
                  </h4>
                  <p className="mb-0">
                    Submit your information to receive personalized comparisons
                    that help guide your next career decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="container">
            <h2 className="mb-4">Why Use Our Salary Comparison Tool?</h2>
            {/* <p className="subtitle">
                            At vix lobortis premium incissor and local at denerum aliquat.
                        </p> */}

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "Accurate Salary Benchmarking",
                  a: "Yes, you can upload your CV directly to your People Index Hub profile. It’s secure, accessible anytime, and helps us match you with roles that fit your experience. Our system supports multiple file formats and ensures your resume is stored safely for future applications.",
                },
                {
                  q: "Tailored To Your Industry And Location",
                  a: "Recruitment timelines vary depending on the role and employer needs. Some positions move quickly, while others require several stages. We’ll keep you updated throughout the process.",
                },
                {
                  q: "Easy-To-Use Interface",
                  a: "The process may include application review, skills assessments, interviews, and background verification depending on the employer.",
                },
                {
                  q: "Free And Accessible",
                  a: "Yes. We support early-career candidates through job placements, internships, apprenticeships, and entry-level professional roles.",
                },
                {
                  q: "Regularly Updated Data",
                  a: "Absolutely. Enable job alerts to receive personalized updates on new openings that match your profile.",
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

        {/* Evidence Based Features */}
        <div
          className="tailored-talent-section evidence-section our-professionals tailored-slider-section text-white"
          style={{ padding: "100px 0px 110px" }}
        >
          <div className="container ">
            <div className="row align-items-center justify-content-center pb-3">
              <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                <h2 className="section-title">Career Growth Resources</h2>
                <p className="mb-0">
                  Explore interview tips, resume guidance, and job search
                  strategies designed to help you advance your career.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-3 flex-nowrap pt-5">
              <div className="col-sm-4">
                <div className="tss_card active">
                  <Image
                    src="/images/tss-img.png"
                    width={430}
                    height={217}
                    alt=""
                  />
                  <h4>interview tips</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="tss_card ">
                  <Image
                    src="/images/tss-img2.png"
                    width={430}
                    height={217}
                    alt=""
                  />
                  <h4>Resume Tips</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="tss_card ">
                  <Image
                    src="/images/tss-img3.png"
                    width={430}
                    height={217}
                    alt=""
                  />
                  <h4>Job Hunting</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Based Approach */}
        <div className="evidence-approach-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 text-center">
                <Image
                  src="/images/tss3-img.png"
                  className="w-100 h-auto object-fit-cover"
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <h2 className="section-title">learn more about job profiles</h2>
                <p className="mb-2">
                  Gain insight into roles, responsibilities, and salary
                  expectations across industries to plan your next move.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* need resume */}
        <section className="need-resume-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-7">
                <h2 className="section-title">need help with your resume?</h2>
                <p className="mb-0">
                  Our experts are ready to help you create a resume that highlights your strengths and attracts employers.
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
