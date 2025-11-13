import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section text-white text-center">
        <div className="container">
          <h1 className="hero-title">Find Your Dream Job Today!</h1>
          <p className="hero-subtitle">
            Connecting Talent with Opportunity. Your Gateway to Career Success
          </p>

          {/* Search Bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Job Title or Company" />
                <select className="form-select search-select">
                  <option>Select Location</option>
                </select>
                <select className="form-select search-select">
                  <option>Select Category</option>
                </select>
                <button className="btn btn-primary">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                <div className="col-md-3">
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
                The Community Wellness Project is a specialized professional and educational staffing and recruitment
                firm dedicated to meeting business' unique needs.
              </p>
              <p>
                Our experienced team leverages industry expertise and a deep understanding of staffing dynamics to
                connect the right talent with the right organization.
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
              <Image src="/images/unnamed.png" width={400} height={400} alt="" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                Evidence Based Approach to Recruitment
              </h2>
              <p className="mb-5">
                By adopting an evidence-based approach, organizations can make more informed and effective hiring
                decisions, ultimately leading to better business outcomes and stronger leadership teams.
              </p>
              <button className="btn btn-primary me-4">Search Job</button>
              <Link href="" className="text-decoration-underline" style={{ color: "#5E6AD2", fontWeight: "500" }}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dark CTA Section */}
      <section>
        <div className="container">
          <div className="dark-cta-section text-white">
            <div className="row align-items-center">
              <div className="col-6">
                <h2 className="section-title">
                  Discover Our <br />Exceptional Business <br />Solutions
                </h2>
                <p className="mb-4">
                  Solutions that enhance efficiency, attract top talent, and improve the overall recruitment process.
                </p>
                <button className="btn btn-primary px-3">Search Job</button>
              </div>
              <div className="col-6 text-center">
                <Image src="/images/unnamed2.png" width={320} height={320} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Based Features */}
      <div className="tailored-talent-section evidence-section text-white" style={{ padding: "100px 0px 110px" }}>
        <div className="container ">
          <div className="row align-items-center justify-content-center pb-3">
            <div className="col-lg-9 mb-4 mb-lg-0 text-center">
              <h2 className="section-title">
                Evidence Based Approach to Recruitment
              </h2>
              <p className="mb-0">
                By adopting an evidence-based approach, organizations can make more informed and effective hiring decisions, ultimately leading to better business outcomes and stronger leadership teams.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 flex-nowrap pt-5">
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

      {/* Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="section-title-small">discover more insights</h2>
            <a href="#" className="view-all-link text-decoration-underline">
              View all
            </a>
          </div>
          <div className="row g-4">
            {[
              {
                img: "/images/blog2.jpg",
                date: "30 March 2024",
                title: "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
                label: "news"
              },
              {
                img: "/images/blog1.jpg",
                date: "30 March 2024",
                title: "How To Avoid The Top Six Most Common Job Interview Mistakes",
                label: "blog"
              },
            ].map((post, idx) => (
              <div key={idx} className="col-md-6">
                <div className="blog_card">
                  <div className="b_label">{post.label}</div>
                  <Image src={post.img} width={500} height={500} alt="" />
                  <div className="b_content">
                    <small className="blog-date">{post.date}</small>
                    <h6 className="blog-title">{post.title}</h6>
                    <a href="#" className="read-more-link">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <Footer />
    </>
  );
}