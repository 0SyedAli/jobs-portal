"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Link from "next/link"
import { LuBookmarkPlus } from "react-icons/lu"

export default function JobDetailPage() {
  const [messageText, setMessageText] = useState("")
  const { id } = useParams();
  // Sample job data
  const job = {
    id: id,
    title: "Corporate Solutions Executive",
    company: "Nexus Group",
    logo: "/images/company-logo.png",
    location: "New York, USA",
    salary: "$80,000 - $120,000",
    jobTitle: "Corporate Solutions Executive",
    jobType: "Full Time",
    experience: "5-7 Years",
    posted: "2 weeks ago",
    category: "Management",
    description:
      "Nous sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets.",
    responsibilities: [
      "Develop and manage corporate client relationships",
      "Identify business needs and propose effective solutions",
      "Collaborate with internal teams to deliver client objectives",
      "Monitor performance metrics and optimize engagement strategies",
      "Support long term client growth initiatives",
    ],
    requiredSkills: [
      "Strong communication and negotiation skills",
      "Strategic thinking and problem solving ability",
      "Experience in corporate sales or account management",
      "Ability to work cross functionally with diverse teams",
      "Strong analytical and reporting skills",
    ],
    tags: ["Management", "Leadership", "Data entry", "Strategy", "Teamwork"],
  }

  const relatedJobs = [
    {
      id: 1,
      title: "Internal Creative Coordinator",
      company: "Nexus Group",
      location: "New York, USA",
      salary: "$80K - $120K",
      jobType: "Full Time",
      category: "Telecommunication",
      tags: ["Hotels & Tourism", "Full-time", "SENIOR MARKET"],
      logo: "/images/company-logo.png",
      posted: "2 weeks",
      postedDays: 14,
    },
    {
      id: 2,
      title: "District Intranet Director",
      company: "Universal Inc",
      location: "New York, USA",
      salary: "$70K - $100K",
      jobType: "Full Time",
      category: "Commerce",
      tags: ["Media", "Full-time", "SENIOR MARKET"],
      logo: "/images/company-logo.png",
      posted: "1 week",
      postedDays: 7,
    },
    {
      id: 3,
      title: "Corporate Tactics Facilitator ",
      company: "Careway",
      location: "New York, USA",
      salary: "$75K - $110K",
      jobType: "Full Time",
      category: "Construction",
      tags: ["Construction", "Full-time", "SENIOR MARKET"],
      logo: "/images/company-logo.png",
      posted: "3 days",
      postedDays: 3,
    },
  ]

  return (
    <>
      
      <div className="educators-wrapper jobs-wrapper ">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Job Details</h1>
        </section>
        <div className="jobs-listing-wrapper">
          <div className="container mt-5 mb-5">
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-9">
                {/* Job Header */}
                <div className="mb-4">
                  <p className="job-posted-time">{job.posted}</p>
                  <div className="d-flex align-items-start gap-3 mb-5">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "5px" }}>{job.title}</h1>
                      <p className="mb-0">{job.company}</p>
                    </div>
                  </div>
                  {/* Job Meta */}
                  <div className="job-details-footer">
                    <div className="job-meta-list">
                      <span className="job-meta-item">
                        <Image src="/images/o_bag.png" className="job-meta-icon" width={22} height={22} alt="Location icon" />
                        {job.location}
                      </span>
                      <span className="job-meta-item">
                        <Image src="/images/clock.png" className="job-meta-icon" width={22} height={22} alt="Job Type icon" />
                        {job.jobType}
                      </span>
                      <span className="job-meta-item">
                        <Image src="/images/location.png" className="job-meta-icon" width={22} height={22} alt="Salary icon" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-3">
                <div className="d-flex flex-column justify-content-between h-100 align-items-end">
                  <span className="fs-4" style={{ color: "#6C757D" }}>
                    <LuBookmarkPlus />
                  </span>
                  {/* Apply Button */}
                  <button
                    className="btn btn-primary w-100 mb-4"
                    style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}
                  >
                    Apply Job
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-lg-9">
                {/* Description */}
                <div className="mb-4">
                  <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Job Description</h3>
                  <p>We are seeking a Corporate Solutions Executive to drive strategic business solutions for our clients. This role requires strong commercial acumen, relationship management skills, and the ability to align client objectives with tailored solutions that deliver measurable outcomes.</p>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-4">
                  <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Key Responsibilities</h3>
                  <ul style={{ paddingLeft: "20px" }}>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: "12px", color: "#000", lineHeight: "1.6" }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Skills */}
                <div className="mb-4">
                  <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Professional Skills</h3>
                  <ul style={{ paddingLeft: "20px" }}>
                    {job.requiredSkills.map((skill, idx) => (
                      <li key={idx} style={{ marginBottom: "12px", color: "#000", lineHeight: "1.6" }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Tags:</h3>
                  <div className="d-flex gap-2 flex-wrap">
                    {job.tags.map((tag, idx) => (
                      // <span
                      //   key={idx}
                      //   style={{
                      //     backgroundColor: "#e8ecff",
                      //     color: "#6c63ff",
                      //     padding: "6px 12px",
                      //     borderRadius: "20px",
                      //     fontSize: "13px",
                      //   }}
                      // >
                      //   {tag}
                      // </span>
                      <p className="job-posted-time" key={idx}>{tag}</p>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mb-4 d-flex align-items-center gap-4" style={{ borderTop: "1px solid #dee2e6", paddingTop: "20px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0" }}>Share Job:</h3>
                  <div className="d-flex gap-3">
                    <Link href="/" className="fs-5"><FaFacebook /></Link>
                    <Link href="/" className="fs-5"><BsTwitterX /></Link>
                    <Link href="/" className="fs-5"><GrLinkedin /></Link>
                  </div>
                </div>

                {/* Related Jobs */}
                <div className="mt-5">
                  <h3 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "20px" }}>Related Jobs</h3>
                  <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
                  <div className="d-flex flex-column gap-3">
                    {relatedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="job-card">
                        <div className="job-card-content">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="job-posted-time mb-0">{job.posted} ago</p>
                            <span className="fs-4" style={{ color: "#6C757D" }}>
                              <LuBookmarkPlus />
                            </span>
                          </div>
                          <div className="job-header-info">
                            <img
                              src={job.logo || "/images/company-logo.png"}
                              alt={job.company}
                              className="company-logo"
                            />
                            <div className="job-title-group">
                              <h6 className="job-title">{job.title}</h6>
                              <p className="company-name">{job.company}</p>
                            </div>
                          </div>
                          <div className="job-details-footer">
                            <div className="job-meta-list">
                              <span className="job-meta-item">
                                <Image src="/images/o_bag.png" className="job-meta-icon" width={22} height={22} alt="Location icon" />
                                {job.location}
                              </span>
                              <span className="job-meta-item">
                                <Image src="/images/clock.png" className="job-meta-icon" width={22} height={22} alt="Job Type icon" />
                                {job.jobType}
                              </span>
                              <span className="job-meta-item">
                                <Image src="/images/location.png" className="job-meta-icon" width={22} height={22} alt="Salary icon" />
                                {job.salary}
                              </span>
                            </div>
                            <button className="details-button" >
                              Job Details
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-3">

                {/* Job Overview */}
                <div style={{ backgroundColor: "#F0F0F0", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
                  <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Job Overview</h5>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Job Title</small>
                      <p style={{ color: "#999" }}>{job.jobTitle}</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Job Type</small>
                      <p style={{ color: "#999" }}>{job.jobType}</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Salary</small>
                      <p style={{ color: "#999" }}>{job.salary}</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Experience</small>
                      <p style={{ color: "#999" }}>{job.experience}</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Experience Level</small>
                      <p style={{ color: "#999" }}>Intermediate</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Category</small>
                      <p style={{ color: "#999" }}>{job.category}</p>
                    </div>
                    <div>
                      <small style={{ fontWeight: "bold", margin: 0, fontSize: "16px" }}>Location</small>
                      <p style={{ color: "#999" }}>{job.location}</p>
                    </div>
                  </div>
                </div>

                {/* Send Message */}
                <div style={{ backgroundColor: "#F0F0F0", padding: "20px", borderRadius: "8px" }}>
                  <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Send Us Message</h5>
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        style={{ backgroundColor: "white", borderColor: "#FFF" }}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        style={{ backgroundColor: "white", borderColor: "#FFF" }}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Phone Number"
                        style={{ backgroundColor: "white", borderColor: "#FFF" }}
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Your Message"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        style={{ backgroundColor: "white", borderColor: "#FFF" }}
                      ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}
