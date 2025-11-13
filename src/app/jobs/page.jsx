"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LuBookmarkPlus } from "react-icons/lu"

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
                <section className="hero-section">
                    <h1>Jobs</h1>
                </section>

                {/* Main Content Wrapper */}
                <div className="jobs-listing-wrapper pb-0">
                    <div className="container">
                        <div className="row">
                            {/* Sidebar Filters */}
                            <div className="col-lg-3 mb-4">
                                <div className="sidebar-filter-card">
                                    {/* Search by Job Title */}
                                    <h6 className="filter-title filter-title-mb-12">Search by Job Title</h6>
                                    <div className="search-input-group">
                                        <input
                                            type="text"
                                            className="form-control search-input"
                                            placeholder="Job title or company"
                                            value={searchTerm}
                                            onChange={(e) => {
                                                setSearchTerm(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                        />
                                        <span className="search-icon">🔍</span>
                                    </div>

                                    {/* Location */}
                                    <h6 className="filter-title filter-title-mb-12">Location</h6>
                                    <select
                                        className="form-select location-select"
                                        value={selectedLocation}
                                        onChange={(e) => {
                                            setSelectedLocation(e.target.value)
                                            setCurrentPage(1)
                                        }}
                                    >
                                        <option value="">Choose a city</option>
                                        <option value="New York">New York</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="Houston">Houston</option>
                                        <option value="Phoenix">Phoenix</option>
                                        <option value="Boston">Boston</option>
                                        <option value="San Francisco">San Francisco</option>
                                    </select>

                                    {/* Category */}
                                    <h6 className="filter-title filter-title-mb-12">Category</h6>
                                    <div className="checkbox-list-container">
                                        {categories.map((cat) => (
                                            <div key={cat} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`cat-${cat}`}
                                                    checked={selectedCategories.includes(cat)}
                                                    onChange={() => toggleCheckbox(cat, selectedCategories, setSelectedCategories)}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`cat-${cat}`}
                                                >
                                                    {cat}
                                                </label>
                                                <span className="checkbox-count">10</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Job Type */}
                                    <h6 className="filter-title filter-title-mb-12">Job Type</h6>
                                    <div className="checkbox-list-container">
                                        {jobTypes.map((type) => (
                                            <div key={type} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`type-${type}`}
                                                    checked={selectedJobTypes.includes(type)}
                                                    onChange={() => toggleCheckbox(type, selectedJobTypes, setSelectedJobTypes)}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`type-${type}`}
                                                >
                                                    {type}
                                                </label>
                                                <span className="checkbox-count">10</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Experience Level */}
                                    <h6 className="filter-title filter-title-mb-12">Experience Level</h6>
                                    <div className="checkbox-list-container">
                                        {experienceLevels.map((exp) => (
                                            <div key={exp} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`exp-${exp}`}
                                                    checked={selectedExperience.includes(exp.toLowerCase())}
                                                    onChange={() => toggleCheckbox(exp, selectedExperience, setSelectedExperience)}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`exp-${exp}`}
                                                >
                                                    {exp}
                                                </label>
                                                <span className="checkbox-count">10</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Date Posted */}
                                    <h6 className="filter-title filter-title-mb-12">Date Posted</h6>
                                    <div className="checkbox-list-container">
                                        {datePeriods.map((period) => (
                                            <div key={period} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`date-${period}`}
                                                    checked={
                                                        period === "All" ? selectedDatePosted.length === 0 : selectedDatePosted.includes(period)
                                                    }
                                                    onChange={() => {
                                                        if (period === "All") {
                                                            setSelectedDatePosted([])
                                                        } else {
                                                            toggleCheckbox(period, selectedDatePosted, setSelectedDatePosted)
                                                        }
                                                    }}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`date-${period}`}
                                                >
                                                    {period}
                                                </label>
                                                <span className="checkbox-count">10</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Salary Range */}
                                    <h6 className="filter-title filter-title-mb-12">Salary</h6>
                                    <div className="salary-input-group">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            value={minSalary}
                                            onChange={(e) => {
                                                setMinSalary(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                            className="salary-input col-6"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            value={maxSalary}
                                            onChange={(e) => {
                                                setMaxSalary(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                            className="salary-input col-6"
                                        />
                                    </div>
                                    <button
                                        className="filter-button"
                                        onClick={() => setCurrentPage(1)} // Re-run filter on click (though state change already triggers it)
                                    >
                                        Filter
                                    </button>

                                    {/* Tags */}
                                    <h6 className="filter-title filter-title-mb-12">Tags</h6>
                                    <div className="tag-container">
                                        {allTags.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => toggleCheckbox(tag.toLowerCase(), selectedTags, setSelectedTags)}
                                                className={`tag-button ${selectedTags.includes(tag.toLowerCase()) ? "active" : "inactive"}`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="col-lg-9">
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
                                        Top Company
                                    </h2>
                                    <p className="mb-0  text-white">
                                        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-3 flex-nowrap pt-5">
                                <div className="col-sm-3">
                                    <div className="category-card gap-3" style={{ paddingTop: "27px", paddingBottom: "27px" }}>
                                        <div className="category-icon">
                                            <Image src="/images/insta-bg.png" width={60} height={60} alt="" />
                                            <h6 className="category-title mt-2">Instagram</h6>
                                        </div>
                                        <p className="text-black">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>

                                        <small className="category-small-text">8 open jobs</small>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="category-card gap-3" style={{ paddingTop: "27px", paddingBottom: "27px" }}>
                                        <div className="category-icon">
                                            <Image src="/images/tesla-bg.png" width={60} height={60} alt="" />
                                            <h6 className="category-title mt-2">Tesla</h6>
                                        </div>
                                        <p className="text-black">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>

                                        <small className="category-small-text">18 open jobs</small>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="category-card gap-3" style={{ paddingTop: "27px", paddingBottom: "27px" }}>
                                        <div className="category-icon">
                                            <Image src="/images/macd-bg.png" width={60} height={60} alt="" />
                                            <h6 className="category-title mt-2">Macdonald</h6>
                                        </div>
                                        <p className="text-black">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>
                                        <small className="category-small-text">3 open jobs</small>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="category-card gap-3" style={{ paddingTop: "27px", paddingBottom: "27px" }}>
                                        <div className="category-icon">
                                            <Image src="/images/apple-bg.png" width={60} height={60} alt="" />
                                            <h6 className="category-title mt-2">Apple</h6>
                                        </div>
                                        <p className="text-black">Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat</p>
                                        <small className="category-small-text">12 open jobs</small>
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