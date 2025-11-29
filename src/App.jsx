import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { jobsData } from './jobsData';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';

// --- Components ---

function Navbar() {
  return (
    <>
      <div className="header">
        <h1>TOP ONLINE FORM</h1>
        <p>www.TopOnlineForm.com</p>
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/">Latest Jobs</Link>
        <Link to="/">Results</Link>
        <Link to="/">Admit Card</Link>
      </div>
      <div className="marquee-container">
        <marquee>Bombay High Court Stenographer 2025 Apply Online | UP Police Admit Card 2025 Out</marquee>
      </div>
    </>
  );
}

function Home() {
  const results = jobsData.filter(job => job.category === "Result");
  const admitCards = jobsData.filter(job => job.category === "Admit Card");
  const latestJobs = jobsData.filter(job => job.category === "Latest Jobs");

  const JobBox = ({ title, jobs }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}>{job.title}</Link>
          </li>
        ))}
        <li><Link to="/">More {title}...</Link></li>
      </ul>
    </div>
  );

  return (
    <div className="main-grid">
      <SEO 
        title="Sarkari Result 2025, Sarkari Naukri, Online Form" 
        description="TopOnlineForm provides latest Sarkari Result, Sarkari Naukri 2025, Admit Card, Answer Key and Online Forms for all government exams."
        keywords="Sarkari Result, Sarkari Naukri, Govt Jobs, Online Form, Admit Card 2025"
        url="https://toponlineform.com/"
      />
      <JobBox title="Result" jobs={results} />
      <JobBox title="Admit Card" jobs={admitCards} />
      <JobBox title="Latest Jobs" jobs={latestJobs} />
    </div>
  );
}

function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id == id);

  if (!job) return <h2 style={{textAlign:'center', marginTop: '20px'}}>Job Not Found</h2>;

  // SEO Keywords banana (Title se keywords nikalna)
  const keywords = `${job.title}, Apply Online, Notification PDF, Exam Date, Fees, Eligibility, Syllabus`;

  return (
    <div className="job-container">
      {/* Dynamic SEO for Every Job */}
      <SEO 
        title={job.title} 
        description={job.shortInfo}
        keywords={keywords}
        url={`https://toponlineform.com/job/${job.id}`}
      />

      <h1 className="job-title">{job.title}</h1>
      {/* Post Date Alag Line mein */}
      <p style={{textAlign: 'center', fontWeight: 'bold', color: '#ab1e1e', marginBottom: '10px'}}>
        Post Date: {job.postDate}
      </p>

      {/* Short Info Alag Line mein (Justified) */}
      <p style={{textAlign: 'justify', marginBottom: '20px'}}>
        <strong>Short Information : </strong> {job.shortInfo}
      </p>

      {job.importantDates.length > 0 && (
        <table>
          <tbody>
            <tr>
              <th className="green-header" width="50%">Important Dates</th>
              <th className="green-header" width="50%">Application Fee</th>
            </tr>
            <tr>
              <td><ul>{job.importantDates.map((d, i) => <li key={i}><strong>{d.label}:</strong> {d.value}</li>)}</ul></td>
              <td><ul>{job.applicationFee.map((f, i) => <li key={i}><strong>{f.category}:</strong> {f.amount}</li>)}</ul></td>
            </tr>
          </tbody>
        </table>
      )}

      {job.ageLimit && (
        <>
          <div className="section-header">Age Limit</div>
          <p style={{textAlign: 'center', border: '1px solid #000', padding: '10px'}}>{job.ageLimit}</p>
        </>
      )}

      {job.vacancyDetails.length > 0 && (
        <>
          <div className="section-header">Vacancy Details</div>
          <table>
            <thead>
              <tr style={{background: '#f2f2f2'}}>
                <th>Post Name</th>
                <th>Total Post</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {job.vacancyDetails.map((item, index) => (
                <tr key={index}><td>{item.postName}</td><td>{item.totalPost}</td><td>{item.eligibility}</td></tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <div className="section-header">Important Links</div>
      <table className="important-links">
        <tbody>
          <tr><td><strong>Apply Online</strong></td><td align="center"><a href={job.links.applyOnline} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
          <tr><td><strong>Download Notification</strong></td><td align="center"><a href={job.links.notification} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
          <tr><td><strong>Official Website</strong></td><td align="center"><a href={job.links.officialWebsite} className="click-here" target="_blank" rel="noreferrer">Click Here</a></td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Footer() {
  return (
    <div style={{background: '#000', color: 'white', padding: '20px', textAlign: 'center', marginTop: '20px'}}>
      <div style={{marginBottom: '10px'}}>
        <Link to="/about" style={{color: 'white', margin: '0 10px'}}>About Us</Link> | 
        <Link to="/contact" style={{color: 'white', margin: '0 10px'}}>Contact Us</Link> | 
        <Link to="/privacy" style={{color: 'white', margin: '0 10px'}}>Privacy Policy</Link>
      </div>
      <p>Copyright © 2025 TopOnlineForm.com. All Rights Reserved.</p>
      <p style={{fontSize: '12px', color: '#ccc'}}>Disclaimer: This is not an official government website.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
