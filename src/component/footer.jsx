import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hybrid-footer">
      <div className="container">

        <div className="row footer-top">

          {/* BRAND */}
          <div className="col-lg-3">
            <Image src="/images/footer-logo.png" width={130} height={70} alt="People Index Hub" />
            <p className="footer-desc">
              Empowering professionals with reliable staffing solutions,
              resources and employment guidance.
            </p>
          </div>

          {/* FIND A JOB */}
          <div className="col-lg-2">
            <h6>Find a job</h6>
            <ul>
              <li><Link href="/jobs">all jobs</Link></li>
              <li><Link href="/best-jobs">best jobs</Link></li>
              <li><Link href="/salary-guide">salary guide</Link></li>
              <li><Link href="/salary-comparison-tool">salary comparison tool</Link></li>
              <li><Link href="/career-resources">career resources</Link></li>
              <li><Link href="/workplace-insight">workplace insight</Link></li>
            </ul>
          </div>

          {/* FOR TALENTS */}
          <div className="col-lg-2">
            <h6>For talents</h6>
            <ul>
              <li><Link href="/submit-your-resume">submit your resume</Link></li>
              <li><Link href="/resume-builder">resume builder</Link></li>
              <li><Link href="/careers">careers</Link></li>
              <li><Link href="/why-work-with-us">why work with us</Link></li>
              <li><Link href="/mentorship">mentorship</Link></li>
            </ul>
          </div>

          {/* FOR EMPLOYERS */}
          <div className="col-lg-2">
            <h6>For employers</h6>
            <ul>
              <li><Link href="/staffing-solutions">staffing solutions</Link></li>
              <li><Link href="/permanent-recruitment">permanent recruitment</Link></li>
              <li><Link href="/temporary-staffing">temporary staffing</Link></li>
              <li><Link href="/flexible-to-permanent-staffing">flexible to permanent</Link></li>
              <li><Link href="/high-volume-hiring-support">high volume hiring</Link></li>
              <li><Link href="/managed-service-programs">managed service programs</Link></li>
            </ul>
          </div>

          {/* JOB CATEGORIES */}
          <div className="col-lg-2">
            <h6>Job categories</h6>
            <ul>
              <li><Link href="/business-administration-jobs">business administration</Link></li>
              <li><Link href="/human-resources-jobs">human resources</Link></li>
              <li><Link href="/engineering-design-jobs">engineering & design</Link></li>
              <li><Link href="/customer-experience-jobs">customer experience</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="col-lg-1">
            <h6>About</h6>
            <ul>
              <li><Link href="/about">about us</Link></li>
              <li><Link href="/educators">educators</Link></li>
              <li><Link href="/partner-talent">partners</Link></li>
              <li><Link href="/find-employees">find employees</Link></li>
              <li><Link href="/blogs">blogs</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-links">
            <Link href="/contact">contact</Link>
            <Link href="/contact-people-index">contact people index</Link>
            <Link href="/privacy-policy">privacy policy</Link>
            <Link href="/terms-and-condition">terms & conditions</Link>
            <Link href="/accessibility-statement">accessibility</Link>
            <Link href="/misconduct">misconduct reporting</Link>
            <Link href="/job-scams">job scams</Link>
          </div>

          <p>© 2025 People Index Hub. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
