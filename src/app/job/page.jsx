"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function JobDetailPage({ params }) {
  const [messageText, setMessageText] = useState("")

  // Sample job data
  const job = {
    id: params.id,
    title: "Corporate Solutions Executive",
    company: "Nexus Group",
    logo: "/placeholder.jpg",
    location: "New York, USA",
    salary: "$80,000 - $120,000",
    jobType: "Full Time",
    experience: "5-7 Years",
    posted: "2 weeks ago",
    category: "Management",
    description:
      "Nous sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets.",
    responsibilities: [
      "Lorem seed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Nos sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Lorem seed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Nos sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Lorem seed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
    ],
    requiredSkills: [
      "Lorem seed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Nos sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Lorem seed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
      "Nos sed purus purus. Sed sed lorem labore illum labore nullam labore illum labore malesuada lorem ets",
    ],
    tags: ["Management", "Leadership", "Data entry", "Strategy", "Teamwork"],
  }

  const relatedJobs = [
    { id: 1, title: "Internal Creative Coordinator", company: "Unary Group", location: "New York, USA" },
    { id: 2, title: "District Intranet Director", company: "Unimotors", location: "New York, USA" },
    { id: 3, title: "Corporate Tactics Facilitator", company: "Careway", location: "Boston, USA" },
  ]

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Job Header */}
            <div className="mb-4">
              <div className="d-flex align-items-start gap-3 mb-4">
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
                  <p style={{ color: "#666", marginBottom: "0" }}>{job.company}</p>
                </div>
              </div>

              {/* Job Meta */}
              <div className="d-flex gap-3 flex-wrap" style={{ color: "#666", fontSize: "14px" }}>
                <span>📍 {job.location}</span>
                <span>💼 {job.jobType}</span>
                <span>⏱️ {job.posted}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p style={{ color: "#666", lineHeight: "1.6" }}>{job.description}</p>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-4">
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Key Responsibilities</h3>
              <ul style={{ paddingLeft: "20px" }}>
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{ marginBottom: "12px", color: "#666", lineHeight: "1.6" }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Skills */}
            <div className="mb-4">
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Required Skills</h3>
              <ul style={{ paddingLeft: "20px" }}>
                {job.requiredSkills.map((skill, idx) => (
                  <li key={idx} style={{ marginBottom: "12px", color: "#666", lineHeight: "1.6" }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-4">
              <div className="d-flex gap-2 flex-wrap">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: "#e8ecff",
                      color: "#6c63ff",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mb-4" style={{ borderTop: "1px solid #dee2e6", paddingTop: "20px" }}>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Share Job</p>
              <div className="d-flex gap-2">
                <button className="btn btn-light btn-sm">📘 Facebook</button>
                <button className="btn btn-light btn-sm">𝕏 Twitter</button>
                <button className="btn btn-light btn-sm">🔗 LinkedIn</button>
              </div>
            </div>

            {/* Related Jobs */}
            <div className="mt-5">
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Related Jobs</h3>
              <div className="d-flex flex-column gap-3">
                {relatedJobs.map((job) => (
                  <div
                    key={job.id}
                    style={{
                      padding: "20px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold", marginBottom: "5px" }}>{job.title}</h6>
                      <p style={{ color: "#666", fontSize: "14px", marginBottom: "5px" }}>{job.company}</p>
                      <p style={{ color: "#999", fontSize: "12px" }}>📍 {job.location}</p>
                    </div>
                    <button className="btn btn-primary btn-sm">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Apply Button */}
            <button
              className="btn btn-primary w-100 mb-4"
              style={{ padding: "10px", fontSize: "16px", fontWeight: "bold" }}
            >
              Apply Job
            </button>

            {/* Job Overview */}
            <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Job Overview</h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <small style={{ color: "#999" }}>Job Type</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{job.jobType}</p>
                </div>
                <div>
                  <small style={{ color: "#999" }}>Salary</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{job.salary}</p>
                </div>
                <div>
                  <small style={{ color: "#999" }}>Experience</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{job.experience}</p>
                </div>
                <div>
                  <small style={{ color: "#999" }}>Experience Level</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>Intermediate</p>
                </div>
                <div>
                  <small style={{ color: "#999" }}>Category</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{job.category}</p>
                </div>
                <div>
                  <small style={{ color: "#999" }}>Location</small>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{job.location}</p>
                </div>
              </div>
            </div>

            {/* Send Message */}
            <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Send Us Message</h5>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Your Message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    style={{ backgroundColor: "white" }}
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

      <Footer />
    </>
  )
}
