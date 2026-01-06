import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";


export default function Home() {
  return (
    <>
      
      {/* Hero Section */}
      <div className="hero-section home-hero-section text-white text-center">
        <div className="container">
          <h1 className="hero-title">Find Your Dream Job Today!</h1>
          <p className="hero-subtitle">
            Connecting Talent with Opportunity. Your Gateway to Career Success
          </p>

          {/* Search Bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-xl-9 col-xxl-8">
              <div className="input-group input-group-search">
                <input type="text" className="form-control" placeholder="Job Title or Company" />
                <select className="form-select search-select">
                  <option>Select Location</option>
                </select>
                <select className="form-select search-select">
                  <option>Select Category</option>
                </select>
                <button className="btn btn-primary h-100">
                  <span>
                    <IoSearchSharp />
                  </span>
                  Search Job
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="row justify-content-center" style={{ marginTop: "70px" }}>
            <div className="col-8">
              <div className="row justify-content-center">
                <div className="col-md-4 col-xl-3">
                  <div className="stat-card">
                    <div className="stat-icon stat-icon-1 mb-0">
                      <Image src="/images/o_bag.png" width={25} height={25} alt="" />
                    </div>
                    <div className="text-start">
                      <h6 >23,850</h6>
                      <p >Jobs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xl-3">
                  <div className="stat-card">
                    <div className="stat-icon stat-icon-2">
                      <Image src="/images/o_users.png" width={25} height={25} alt="" />
                    </div>
                    <div className="text-start">
                      <h6>10,250</h6>
                      <p>Resumes</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xl-3">
                  <div className="stat-card">
                    <div className="stat-icon stat-icon-3">
                      <Image src="/images/o_building.png" width={25} height={25} alt="" />
                    </div>
                    <div className="text-start">
                      <h6>18,400</h6>
                      <p>Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tailored Talent Section */}
      <div className="tailored-talent-section text-white">
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">
                Tailored Talent Acquisition for an Exceptional Experience
              </h2>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="mb-0">
                At People Index Hub we provide strategic recruitment solutions that help organizations discover the right people with confidence and clarity. Our team combines industry knowledge with advanced talent insights to deliver staffing support that drives improvement, inspiration, and excellence. Whether you operate in education, corporate environments, hospitality, technology, construction, or any other field, our goal is to enhance your hiring process through trusted and effective recruitment services.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 flex-nowrap">
            <div className="col-sm-3">
              <div className="category-card">
                <div className="category-icon">
                  <Image src="/images/bag2.png" width={40} height={40} alt="" />
                </div>
                <h6 className="category-title">Commerce</h6>
                <small className="category-small-text">View Job</small>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <div className="category-icon">
                  <Image src="/images/dish2.png" width={40} height={40} alt="" />
                </div>
                <h6 className="category-title">Construction</h6>
                <small className="category-small-text">View Job</small>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <div className="category-icon">
                  <Image src="/images/bottle2.png" width={40} height={40} alt="" />
                </div>
                <h6 className="category-title">Hotels & Tourism</h6>
                <small className="category-small-text">View Job</small>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <div className="category-icon">
                  <Image src="/images/cap2.png" width={40} height={40} alt="" />
                </div>
                <h6 className="category-title">Education</h6>
                <small className="category-small-text">View Job</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence Based Approach */}
      <div className="evidence-approach-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <Image src="/images/sec2.jpg" className="eas_img" width={400} height={400} alt="" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                Evidence Based Approach to Recruitment
              </h2>
              <p className="mb-5">
                By using data informed hiring practices, organizations can make stronger and more informed decisions. This method improves long term outcomes, enhances leadership teams, and helps employers select candidates who bring meaningful value to their mission.
              </p>
              <Link href="/jobs" className="btn btn-primary me-4">Search Job</Link>
              <Link href="#" className="text-decoration-underline" style={{ color: "#202544", fontWeight: "500" }}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dark CTA Section */}
      <section>
        <div className="container">
          <div className="dark-cta-section home-dark-cta-section text-white">
            <div className="row align-items-center">
              <div className="col-5">
                <h2 className="section-title">
                  Discover Our <br />Exceptional Business <br />Solutions
                </h2>
                <p className="mb-4">
                  Explore staffing services that increase efficiency, attract top talent, and strengthen the overall recruitment journey within your organization.
                </p>
                <Link href="/jobs" className="btn btn-theme4">Search Job</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Based Features */}
      <div className="tailored-talent-section evidence-section home-es text-white" style={{ padding: "100px 0px 110px" }}>
        <div className="container ">
          <div className="row align-items-center justify-content-center pb-3">
            <div className="col-lg-9 mb-4 mb-lg-0 text-center es_heading">
              <h2 className="section-title">
                Evidence Based Approach to Recruitment
              </h2>
              <p className="mb-0">
                Using this approach helps organizations make informed and effective hiring decisions. It leads to better outcomes, more confident leadership teams, and a stronger understanding of what qualities create long lasting success.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 flex-nowrap pt-5">
            <div className="col-sm-3">
              <div className="category-card">
                <h6 className="category-title">Data-Driven Decision Making</h6>
                <p>We use performance reviews, historical data, and predictive evaluations to recognize candidates who have the skills and mindset to thrive. This approach supports smart hiring decisions based on objective insights.</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <h6 className="category-title">Comprehensive Evaluation</h6>
                <p>Through interviews, assessments, skill reviews, and situational testing, we gain a clear understanding of each candidates strengths, experience, and potential.</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <h6 className="category-title">Balanced Data & Intuition</h6>
                <p>While data provides valuable insight, experience and intuition also play an important role in identifying cultural fit and leadership qualities. Our hiring framework blends both to support more successful outcomes.</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="category-card">
                <h6 className="category-title">Diverse Candidate Pool</h6>
                <p>We work to ensure the recruitment process remains inclusive and fair by promoting diversity and encouraging applications from underrepresented groups.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title-small">Discover More Insights</h2>
            <a href="/blogs" className="view-all-link text-decoration-underline">
              View all
            </a>
          </div>
          <div className="row g-4">
            {[
              {
                img: "/images/blog1.jpg",
                title: "Thirty March Two Thousand Twenty Four",
                para: "Revitalizing Workplace Morale Innovative Tactics For Boosting Employee Engagement in Two Thousand Twenty Four",
                label: "news"
              },
              {
                img: "/images/blog2.jpg",
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
                    {date && <small className="blog-date">{post.date}</small>}
                    <h6 className="blog-title">{post.title}</h6>
                    <p className="blog-para">{post.para}</p>
                    <a href="/blogs" className="read-more-link">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </>
  );
}