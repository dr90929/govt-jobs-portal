import React, { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { jobsData } from './jobsData';
import About from './About';
import Contact from './Contact';
import Privacy from './Privacy';
import SEO from './SEO';
import CategoryPage from './CategoryPage';
import ActiveJobs from './ActiveJobs';

// --- Navbar Component (Ab ye sirf Header aur Menu dikhayega) ---
function Navbar() {
  return (
    <>
      <div className="header">
        <h1>TOP ONLINE FORM</h1>
        <p>www.TopOnlineForm.com</p>
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/active-jobs">Active Jobs</Link>
        <Link to="/latest-jobs">Latest Jobs</Link>
        <Link to="/results">Results</Link>
        <Link to="/admit-card">Admit Card</Link>
        <Link to="/answer-key">Answer Key</Link>
        <Link to="/syllabus">Syllabus</Link>
      </div>

      <div className="clean-note">
        <p>✨ Welcome to TopOnlineForm.com — India's Most Trusted & Clean Job Portal. No Ads, Just Information. ✨</p>
      </div>
    </>
  );
}

// --- Home Component (Search aur Buttons yahan shift ho gaye) ---
function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchTerm.trim()) {
      alert("Search functionality coming soon for: " + searchTerm); 
    }
  };

  // Row 1 Data
  const latestJobs = jobsData.filter(job => job.category === "Latest Jobs").slice(0, 20);
  const admitCards = jobsData.filter(job => job.category === "Admit Card").slice(0, 20);
  const results = jobsData.filter(job => job.category === "Result").slice(0, 20);

  // Row 2 Data
  const answerKeys = jobsData.filter(job => job.category === "Answer Key").slice(0, 7);
  const syllabus = jobsData.filter(job => job.category === "Syllabus").slice(0, 7);
  const previousPapers = jobsData.filter(job => job.category === "Previous Paper").slice(0, 7);

  const JobBox = ({ title, jobs, linkTo }) => (
    <div className="box-column">
      <div className="box-header">{title}</div>
      <ul className="box-list">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <li key={job.id}>
              <Link to={`/${job.slug}`}>{job.title}</Link>
            </li>
          ))
        ) : (
          <li style={{textAlign: 'center', padding: '10px', color: '#666', fontSize:'13px'}}>Coming Soon...</li>
        )}
        <li style={{textAlign:'right'}}><Link to={linkTo} style={{fontWeight:'bold', fontSize:'13px'}}>View More...</Link></li>
      </ul>
    </div>
  );

  return (
    <div>
      <SEO 
        title="Sarkari Result 2025, Sarkari Naukri, Online Form" 
        description="TopOnlineForm provides latest Sarkari Result, Sarkari Naukri 2025, Admit Card, Answer Key and Online Forms."
        keywords="Sarkari Result, Sarkari Naukri, Govt Jobs, Online Form, Admit Card 2025"
        url="https://toponlineform.com/"
      />

      {/* --- NEW ACTION ROW (Social Buttons + Search) --- */}
      <div className="home-action-row">
        <div className="social-group">
          <a href="https://whatsapp.com" target="_blank" className="social-btn whatsapp">
             Follow WhatsApp Channel
          </a>
          <a href="https://telegram.org" target="_blank" className="social-btn telegram">
             Join Telegram Channel
          </a>
        </div>
        
        <div className="home-search-container">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="main-grid">
        {/* ROW 1 */}
        <JobBox title="Latest Jobs" jobs={latestJobs} linkTo="/latest-jobs" />
        <JobBox title="Admit Card" jobs={admitCards} linkTo="/admit-card" />
        <JobBox title="Result" jobs={results} linkTo="/results" />

        {/* ROW 2 */}
        <JobBox title="Answer Key" jobs={answerKeys} linkTo="/answer-key" />
        <JobBox title="Syllabus" jobs={syllabus} linkTo="/syllabus" />
        <JobBox title="Previous Paper" jobs={previousPapers} linkTo="/previous-papers" />
      </div>
    </div>
  );
}

// --- Job Details Component (No Change Here) ---
function JobDetails() {
  const { slug } = useParams();
  const job = jobsData.find((j) => j.slug === slug);

  if (!job) return <h2 style={{textAlign:'center', marginTop: '20px'}}>Job Not Found</h2>;

  const keywords = `${job.title}, Apply Online, Notification PDF, Exam Date, Fees, Eligibility, Syllabus`;

  return (
    <div className="job-container">
      <SEO title={job.title} description={job.shortInfo} keywords={keywords} url={`https://toponlineform.com/${job.slug}`} />

      <h1 className="job-title">{job.title}</h1>
      
      <p style={{textAlign: 'justify', marginBottom: '10px'}}>
        <strong>Post Date : </strong> {job.postDate}
      </p>

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
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<JobDetails />} />
        
        <Route path="/active-jobs" element={<ActiveJobs />} />
        <Route path="/latest-jobs" element={<CategoryPage category="Latest Jobs" title="All Latest Jobs" />} />
        <Route path="/results" element={<CategoryPage category="Result" title="All Results" />} />
        <Route path="/admit-card" element={<CategoryPage category="Admit Card" title="All Admit Cards" />} />
        <Route path="/answer-key" element={<CategoryPage category="Answer Key" title="All Answer Keys" />} />
        <Route path="/syllabus" element={<CategoryPage category="Syllabus" title="Syllabus & Exam Pattern" />} />
        <Route path="/previous-papers" element={<CategoryPage category="Previous Paper" title="Previous Year Papers" />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
