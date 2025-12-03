"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LuBookmarkPlus } from "react-icons/lu"
import { FiChevronRight } from "react-icons/fi";

export default function JobsListingPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedJobTypes, setSelectedJobTypes] = useState([])
    const [selectedExperience, setSelectedExperience] = useState([])
    const [selectedDatePosted, setSelectedDatePosted] = useState([])
    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")
    const [selectedTags, setSelectedTags] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter();

    const jobs = [
        {
            id: 1,
            title: "Forward Security Director",
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
            title: "Regional Creative Facilitator",
            company: "Universal Inc",
            location: "Los Angeles, USA",
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
            title: "Internal Integration Planner",
            company: "Careway",
            location: "Houston, USA",
            salary: "$75K - $110K",
            jobType: "Full Time",
            category: "Construction",
            tags: ["Construction", "Full-time", "SENIOR MARKET"],
            logo: "/images/company-logo.png",
            posted: "3 days",
            postedDays: 3,
        },
        {
            id: 4,
            title: "District Intranet Director",
            company: "Unimotors",
            location: "Phoenix, USA",
            salary: "$85K - $125K",
            jobType: "Full Time",
            category: "Commerce",
            tags: ["Commerce", "Full-time", "SENIOR MARKET"],
            logo: "/images/company-logo.png",
            posted: "1 day",
            postedDays: 1,
        },
        {
            id: 5,
            title: "Corporate Tactics Facilitator",
            company: "Urban Group",
            location: "Boston, USA",
            salary: "$70K - $105K",
            jobType: "Full Time",
            category: "Education",
            tags: ["Commerce", "Full-time", "SENIOR MARKET"],
            logo: "/images/company-logo.png",
            posted: "2 days",
            postedDays: 2,
        },
        {
            id: 6,
            title: "Forward Accounts Consultant",
            company: "Future Corp",
            location: "San Francisco, USA",
            salary: "$90K - $130K",
            jobType: "Full Time",
            category: "Financial Services",
            tags: ["Financial services", "Full-time", "SENIOR MARKET"],
            logo: "/images/company-logo.png",
            posted: "4 days",
            postedDays: 4,
        },
    ]

    const filterJobBySalary = (job) => {
        const minSal = minSalary ? parseFloat(minSalary) : 0
        const maxSal = maxSalary ? parseFloat(maxSalary) : Infinity

        // Simple salary parsing logic: expects "$Xk - $Yk" format 
        const match = job.salary.match(/\$(\d+)K - \$(\d+)K/)
        if (match) {
            const jobMin = parseFloat(match[1]) * 1000
            const jobMax = parseFloat(match[2]) * 1000

            // Check if job's range overlaps with filter range
            return Math.max(minSal, jobMin) <= Math.min(maxSal, jobMax)
        }
        return !minSalary && !maxSalary // If salary format is unknown/missing, only return true if no salary filter is applied
    }

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesLocation = !selectedLocation || job.location.includes(selectedLocation)
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category)
        const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType)
        // Note: Experience filter logic is currently disabled in the original code, keeping it 'true'
        const matchesExperience = selectedExperience.length === 0 || true

        const matchesDatePosted =
            selectedDatePosted.length === 0 ||
            selectedDatePosted.some((period) => {
                if (period === "Last 24 Hours") return job.postedDays <= 1
                if (period === "Last 7 Days") return job.postedDays <= 7
                if (period === "Last 30 Days") return job.postedDays <= 30
                return true
            })

        // NOTE: The original code did not include tags or min/max salary filter in filteredJobs. 
        // Adding a placeholder for tags. Implementing actual salary filter here.
        const matchesTags = selectedTags.length === 0 || job.tags.some(tag => selectedTags.includes(tag.toLowerCase()))

        // Simplified check, assuming no range parsing needed in main filter loop for now unless implemented
        const matchesSalary = filterJobBySalary(job);

        return (
            matchesSearch && matchesLocation && matchesCategory && matchesJobType && matchesExperience && matchesDatePosted && matchesTags && matchesSalary
        )
    })

    const itemsPerPage = 10
    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
    const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const toggleCheckbox = (value, state, setState) => {
        const normalizedValue = typeof value === 'string' ? value.toLowerCase() : value;

        if (state.includes(normalizedValue)) {
            setState(state.filter((item) => item !== normalizedValue))
        } else {
            setState([...state, normalizedValue])
        }
        setCurrentPage(1)
    }

    const allTags = ["design", "marketing", "management", "skill", "negotiation"]
    const categories = ["Commerce", "Telecommunication", "Hotels & Tourism", "Education", "Financial Services"]
    const jobTypes = ["Full Time", "Part-time", "Contract", "Freelance", "Seasonal", "Fixed Price"] // Changed 'Full-time' to 'Full Time' to match job data
    const experienceLevels = ["Fresher", "Intermediate", "Expert"]
    const datePeriods = ["All", "Last 24 Hours", "Last 7 Days", "Last 30 Days"]

    return (
        <>
            <Navbar />

            <div className="educators-wrapper jobs-wrapper">
                {/* Hero Section */}
                <section className="hero-section css_body">
                    <div className="hs_breadcrumbs">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><FiChevronRight /></li>
                            <li><a href="">Jobs</a></li>
                            <li><FiChevronRight /></li>
                            <li><a href="">Bussiness Administration</a></li>
                        </ul>
                        <div className="input-group mt-4 flex-nowrap input-group-search justify-content-center mx-auto">
                            <div className="igs_inner text-start d-flex align-items-center gap-3 px-3">
                                <div>
                                    <label htmlFor="">job title or keyword</label>
                                    <input type="text" className="form-control ps-2" placeholder="job title" style={{ width: "218px" }} />
                                </div>
                                <div>
                                    <label htmlFor="">location or zip code</label>
                                    <input type="text" className="form-control ps-2" placeholder="Location" style={{ width: "218px" }} />
                                </div>
                            </div>
                            <button className="btn btn-primary text-nowrap h-100">
                                search 531 jobs
                            </button>
                        </div>
                        <div className="form-check d-flex align-items-center justify-content-start gap-2 mt-4">
                            <input className="form-check-input mb-1" type="checkbox" value="" id="checkDefault" />
                            <label className="form-check-label" htmlFor="checkDefault">
                                Remote Jobs Only
                            </label>
                        </div>
                    </div>
                </section>

                {/* Main Content Wrapper */}
                <div className="jobs-listing-wrapper pb-0">
                    <div className="container">
                        <div className="row">
                            {/* Main Content */}
                            <div className="col-lg-12">
                                <div className="main-content-header">
                                    <p className="results-text">
                                        Showing {paginatedJobs.length} of {filteredJobs.length} results
                                    </p>
                                    <select className="sort-select">
                                        <option>Sort by latest</option>
                                        <option>Sort by salary (high)</option>
                                        <option>Sort by salary (low)</option>
                                    </select>
                                </div>

                                {/* Job Cards */}
                                <div className="job-cards-container">
                                    {paginatedJobs.map((job) => (
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
                                                    <button className="details-button" onClick={() => router.push("/jobs/1")}>
                                                        Job Details
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                                {/* Pagination */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginTop: "40px",
                                    }}
                                >
                                    <button
                                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        style={{
                                            padding: "8px 12px",
                                            borderRadius: "6px",
                                            border: "1px solid #6366f1",
                                            backgroundColor: "white",
                                            color: "#6366f1",
                                            cursor: currentPage === 1 ? "not-allowed" : "pointer",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            opacity: currentPage === 1 ? 0.5 : 1,
                                        }}
                                    >
                                        ◀ Prev
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "4px",
                                                border: currentPage === page ? "1px solid #6366f1" : "1px solid #e9ecef",
                                                backgroundColor: currentPage === page ? "#6366f1" : "white",
                                                color: currentPage === page ? "white" : "#666",
                                                cursor: "pointer",
                                                fontSize: "13px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        style={{
                                            padding: "8px 12px",
                                            borderRadius: "6px",
                                            border: "1px solid #e9ecef",
                                            backgroundColor: "white",
                                            color: "#666",
                                            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            opacity: currentPage === totalPages ? 0.5 : 1,
                                        }}
                                    >
                                        Next ▶
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Evidence Based Features */}
                    <div className="tailored-talent-section jobs-talent-section text-white mt-5" style={{ padding: "70px 0px 80px" }}>
                        <div className="container ">
                            <div className="row align-items-center justify-content-center pb-3">
                                <div className="col-lg-9 mb-4 mb-lg-0 text-center">
                                    <h2 className="section-title text-white">
                                        let similar jobs come to you
                                    </h2>
                                    <p className="mb-0  text-white">
                                        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-3 justify-content-center flex-nowrap pt-5">
                                <div className="col-10">
                                    <div className="jobs-form">
                                        <form >
                                            <div className="row gy-4 mb-4">
                                                <div className="col-md-6">
                                                    <label className="form-label">job title or keyword</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="firstName"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">new york, new york</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="lastName"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">your email address</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">select frequency</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="phone"
                                                    />
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                                            <label className="form-check-label form-label" htmlFor="checkDefault">
                                                                I consent to the use of my information for the purpose of sending me job alerts.
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary">
                                                Send Message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}