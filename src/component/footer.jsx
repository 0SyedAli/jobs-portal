import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#ffffff", paddingTop: "60px", paddingBottom: "30px" }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 pe-5">
            <Link className="" href="/">
              <Image src="/images/footer-logo.png" style={{ objectFit: "contain", marginBottom:"30px"}} width={116} height={60} alt="" />
            </Link>
            <p style={{ color: "#c2c2c2", fontSize: "20px", fontFamily: "var(--font-lexend)" }}>
              Empowering professionals with reliable staffing solutions resources and employment guidance.
            </p>
          </div>
          <div className="col-md-2">
            <h5>Company</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="/about" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="/partner-talent" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Partners
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  For Candidates
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  For Employers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Job Categories</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Telecommunications
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Hotels & Tourism
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Construction
                </a>
              </li>
              <li>
                <a href="/educators" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Education
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "14px" }}>
                  Financial Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <p style={{ fontSize: "14px", color: "#e0e0e0" }}>
              Subscribe to our mailing list to receive the latest news, updates, and special offers.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <button className="btn btn-primary px-3 w-100 mt-3" style={{ fontWeight: "600", padding: "10px 20px" }}>Subscribe now</button>
          </div>
        </div>
        <div className="row" style={{ borderTop: "1px solid #333", paddingTop: "20px" }}>
          <div className="col-8">
            <small style={{ color: "#d8d8d8", fontSize: "13px" }}>
              Randstad N.V.  | <Link href="/misconduct" >misconduct reporting</Link> | <Link href="/job-scams" >avoid job scams</Link>  | <Link href="/terms-and-condition" >terms of service</Link>  | <Link href="/accessibility-statement" >accessibility statement</Link> | <Link href="/privacy-policy" >privacy policy</Link>  | <Link href="#!" >report security problem</Link>
            </small>
          </div>
          <div className="col-4">
            <small style={{ color: "#d8d8d8", fontSize: "13px" }}>Copyright © 2025 Community Wellness Project</small>
          </div>
        </div>
      </div>
    </footer >
  )
}
