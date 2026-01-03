"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Educators() {
  return (
    <>
      <Navbar />

      <div className="educators-wrapper">
        {/* Hero Section */}
        <section className="hero-section home-hero-section member-hero-section">
          <div className="css_body">
            <div className="text-center">
              <h2 className="">Find Employees With Relevant Talent Search</h2>
              <p>
                Search our talent database to identify qualified professionals
                who align with your business needs. Our intelligent search tools
                help you connect with the right candidates faster and more
                efficiently.
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
              </div>
              <button className="btn btn-primary h-100">Check Salary</button>
            </div>
          </div>
        </section>

        <section className="cs_secion2">
          <div className="container">
            <div className="row mb-5">
              <div className="col-5">
                <h2 className="section-title mb-0">how does it work?</h2>
              </div>
              <div className="col-7">
                <p className="mb-0">
                  With our salary and talent insight tools you can explore
                  average pay ranges for any position compare market data and
                  discover qualified candidates all in one place. This powerful
                  combination helps you make informed hiring decisions with
                  clarity and confidence.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="cs2_card active">
                  <Image
                    src="/images/edit-pencil.png"
                    width={50}
                    height={50}
                    alt=""
                    className="mb-4"
                  />
                  <h4 className="mb-3">
                    Enter Your Job Location And Salary Details
                  </h4>
                  <p className="mb-0">
                    Start by providing key role information including job title,
                    preferred location, and salary range. This helps refine
                    results and ensures accurate matching.
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
                    Access real time market insights to understand competitive
                    salary benchmarks based on role and location.
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
                  <h4 className="mb-3">Review Qualified Talent Matches</h4>
                  <p className="mb-0">
                    Receive a curated list of candidates who meet your criteria,
                    allowing you to focus on the most relevant profiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Based Features */}
        <div
          className="tailored-talent-section evidence-section our-professionals tailored-slider-section text-white"
          style={{ padding: "100px 0px 110px" }}
        >
          <div className="container ">
            <div className="row align-items-center justify-content-center pb-3">
              <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                <h2 className="section-title text-white">
                  Smart Hiring Starts With Our Free Resume Search
                </h2>
                <p className="mb-0">
                  Whether you are seeking immediate staffing support or planning
                  long term workforce growth, our free resume search empowers
                  you to make confident hiring decisions. We combine data driven
                  insights with human expertise to help you build strong,
                  reliable teams.
                </p>
                {/* <p  className="mb-0">Our free resume search allows you to explore talent profiles review experience and shortlist potential candidates instantly. With access to updated information across industries you can simplify your hiring process and focus on selecting the right people for your team. Whether you are building a new department expanding operations or filling urgent vacancies our resume search gives you a reliable starting point for effective recruitment.</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Based Approach */}
        <div className="evidence-approach-section">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5 text-center">
                <Image
                  src="/images/fe_img1.png"
                  className="w-100 h-auto object-fit-cover"
                  style={{ borderRadius: "12px" }}
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h2 className="section-title">Get Talent Sent To Your Inbox</h2>
                <p className="mb-0">
                  Stay ahead of hiring demands by receiving talent
                  recommendations directly to your inbox. Our alert system keeps
                  you informed about new candidate profiles that match your
                  hiring preferences, so you never miss an opportunity to secure
                  top talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
