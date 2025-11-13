"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function JobsListingPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedJobType, setSelectedJobType] = useState("")
    const [selectedExperience, setSelectedExperience] = useState("")
    const [selectedSalary, setSelectedSalary] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const jobs = [
        {
            id: 1,
            title: "Forward Security Director",
            company: "Nexus Group",
            location: "Boston, USA",
            salary: "$80K - $120K",
            jobType: "Full Time",
            category: "Security",
            tags: ["Remote", "Full-time"],
            logo: "/placeholder.jpg",
            posted: "2 weeks ago",
        },
        {
            id: 2,
            title: "Regional Creative Facilitator",
            company: "Universal Inc",
            location: "Los Angeles, USA",
            salary: "$70K - $100K",
            jobType: "Full Time",
            category: "Creative",
            tags: ["On-site", "Full-time"],
            logo: "/placeholder.jpg",
            posted: "1 week ago",
        },
        {
            id: 3,
            title: "Internal Integration Planner",
            company: "Careway",
            location: "Houston, USA",
            salary: "$75K - $110K",
            jobType: "Contract",
            category: "Planning",
            tags: ["Remote", "Contract"],
            logo: "/placeholder.jpg",
            posted: "3 days ago",
        },
        {
            id: 4,
            title: "District Intranet Director",
            company: "Unimotors",
            location: "Phoenix, USA",
            salary: "$85K - $125K",
            jobType: "Full Time",
            category: "Management",
            tags: ["On-site", "Full-time"],
            logo: "/placeholder.jpg",
            posted: "1 day ago",
        },
        {
            id: 5,
            title: "Corporate Tactics Facilitator",
            company: "Urban Group",
            location: "Boston, USA",
            salary: "$70K - $105K",
            jobType: "Full Time",
            category: "Strategy",
            tags: ["Remote", "Full-time"],
            logo: "/placeholder.jpg",
            posted: "2 days ago",
        },
        {
            id: 6,
            title: "Forward Accounts Consultant",
            company: "Future Corp",
            location: "San Francisco, USA",
            salary: "$90K - $130K",
            jobType: "Full Time",
            category: "Finance",
            tags: ["Remote", "Full-time"],
            logo: "/placeholder.jpg",
            posted: "4 days ago",
        },
    ]

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesLocation = !selectedLocation || job.location.includes(selectedLocation)
        const matchesCategory = !selectedCategory || job.category === selectedCategory
        const matchesJobType = !selectedJobType || job.jobType === selectedJobType
        return matchesSearch && matchesLocation && matchesCategory && matchesJobType
    })

    const itemsPerPage = 6
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
    const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    return (
        <>
            <Navbar />

            <div className="container mt-5 mb-5">
                <div className="row">
                    {/* Sidebar Filters */}
                    <div className="col-lg-3 mb-4">
                        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
                            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>Search by Job Title</h5>
                            <input
                                type="text"
                                className="form-control mb-4"
                                placeholder="Search job title..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setCurrentPage(1)
                                }}
                                style={{ backgroundColor: "white" }}
                            />

                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Location</h5>
                            <select
                                className="form-select mb-4"
                                value={selectedLocation}
                                onChange={(e) => {
                                    setSelectedLocation(e.target.value)
                                    setCurrentPage(1)
                                }}
                                style={{ backgroundColor: "white" }}
                            >
                                <option value="">All Locations</option>
                                <option value="Boston">Boston</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Houston">Houston</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="San Francisco">San Francisco</option>
                            </select>

                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Category</h5>
                            <select
                                className="form-select mb-4"
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value)
                                    setCurrentPage(1)
                                }}
                                style={{ backgroundColor: "white" }}
                            >
                                <option value="">All Categories</option>
                                <option value="Security">Security</option>
                                <option value="Creative">Creative</option>
                                <option value="Planning">Planning</option>
                                <option value="Management">Management</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Finance">Finance</option>
                            </select>

                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Job Type</h5>
                            <select
                                className="form-select mb-4"
                                value={selectedJobType}
                                onChange={(e) => {
                                    setSelectedJobType(e.target.value)
                                    setCurrentPage(1)
                                }}
                                style={{ backgroundColor: "white" }}
                            >
                                <option value="">All Types</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>

                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Experience Level</h5>
                            <select
                                className="form-select mb-4"
                                value={selectedExperience}
                                onChange={(e) => setSelectedExperience(e.target.value)}
                                style={{ backgroundColor: "white" }}
                            >
                                <option value="">All Levels</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Mid Level">Mid Level</option>
                                <option value="Senior">Senior</option>
                            </select>

                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Salary Range</h5>
                            <select
                                className="form-select"
                                value={selectedSalary}
                                onChange={(e) => setSelectedSalary(e.target.value)}
                                style={{ backgroundColor: "white" }}
                            >
                                <option value="">All Ranges</option>
                                <option value="0-50k">$0 - $50K</option>
                                <option value="50-100k">$50K - $100K</option>
                                <option value="100-150k">$100K - $150K</option>
                                <option value="150k+">$150K+</option>
                            </select>
                        </div>
                    </div>

                    {/* Jobs List */}
                    <div className="col-lg-9">
                        <div className="mb-4 d-flex justify-content-between align-items-center">
                            <p style={{ color: "#666" }}>
                                Showing {(currentPage - 1) * itemsPerPage + 1} of {filteredJobs.length} results
                            </p>
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                >
                                    ← Prev
                                </button>
                                <span style={{ padding: "5px 10px" }}>{currentPage}</span>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next →
                                </button>
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            {paginatedJobs.map((job) => (
                                <div
                                    key={job.id}
                                    style={{
                                        padding: "20px",
                                        backgroundColor: "white",
                                        borderRadius: "8px",
                                        border: "1px solid #dee2e6",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                                            <img
                                                src={job.logo || "/placeholder.svg"}
                                                alt={job.company}
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "4px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <div>
                                                <h6 style={{ fontWeight: "bold", marginBottom: "0" }}>{job.title}</h6>
                                                <small style={{ color: "#666" }}>{job.company}</small>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "20px",
                                                flexWrap: "wrap",
                                                marginBottom: "10px",
                                                fontSize: "13px",
                                                color: "#666",
                                            }}
                                        >
                                            <span>📍 {job.location}</span>
                                            <span>💼 {job.jobType}</span>
                                            <span>💰 {job.salary}</span>
                                        </div>
                                        <div className="d-flex gap-2 flex-wrap">
                                            {job.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        backgroundColor: "#e8ecff",
                                                        color: "#6c63ff",
                                                        padding: "4px 8px",
                                                        borderRadius: "4px",
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-sm ms-3">Apply Now</button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-4 d-flex justify-content-center align-items-center gap-2">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                            >
                                ← Previous
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`btn btn-sm ${currentPage === page ? "btn-primary" : "btn-outline-secondary"}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
