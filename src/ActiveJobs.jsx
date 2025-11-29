import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from './jobsData';
import SEO from './SEO';

function ActiveJobs() {
  // Helper: Date string (DD/MM/YYYY) ko asli Date object mein badalna
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const parts = dateStr.split('/'); // 15/12/2025 -> ["15", "12", "2025"]
    // Month 0-indexed hota hai JS mein, isliye -1 kiya
    return new Date(parts[2], parts[1] - 1, parts[0]); 
  };

  // Helper: Job me se "Last Date" nikalna
  const getLastDateString = (job) => {
    if (!job.importantDates) return null;
    const lastDateObj = job.importantDates.find(d => d.label.toLowerCase().includes("last date"));
    return lastDateObj ? lastDateObj.value : null;
  };

  // --- MAGIC LOGIC ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Aaj ka time 00:00 kar diya comparison ke liye

  const activeJobsList = jobsData
    .filter(job => {
      // 1. Sirf Latest Jobs honi chahiye
      if (job.category !== "Latest Jobs") return false;

      // 2. Last Date check karo
      const lastDateStr = getLastDateString(job);
      if (!lastDateStr) return true; // Agar date nahi mili toh dikha do (Safe side)

      const lastDate = parseDate(lastDateStr);
      // Agar Last Date aaj ya aane wale kal ki hai, toh dikhao. Agar beet gayi toh hata do.
      return lastDate >= today;
    })
    .sort((a, b) => {
      // 3. Sorting: Jiski date paas hai wo upar
      const dateA = parseDate(getLastDateString(a));
      const dateB = parseDate(getLastDateString(b));
      return dateA - dateB;
    });

  return (
    <div className="job-container">
      <SEO
        title="Active Govt Jobs 2025 - Ongoing Application Forms | TopOnlineForm"
        description="List of all currently active government jobs. Check last dates and apply online for ongoing recruitment."
        keywords="active jobs, ongoing forms, last date govt jobs, apply online now"
        url="https://toponlineform.com/active-jobs"
      />

      <div className="section-header" style={{ backgroundColor: '#007bff', fontSize: '20px', marginBottom: '10px' }}>
        Active Govt Jobs (Live Forms)
      </div>
      
      <p style={{ padding: '0 10px 15px', fontSize: '14px', color: '#555' }}>
        Currently active government jobs are listed below according to their Last Date. Expired jobs are automatically removed.
      </p>

      <table className="data-table" style={{ border: '1px solid #ccc' }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            <th style={{ width: '25%', textAlign: 'center', background: '#eee' }}>Last Date</th>
            <th style={{ textAlign: 'left', background: '#eee' }}>Post Details</th>
          </tr>
        </thead>
        <tbody>
          {activeJobsList.length > 0 ? (
            activeJobsList.map(job => (
              <tr key={job.id} style={{borderBottom: '1px solid #ddd'}}>
                <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#ab1e1e', padding: '12px' }}>
                  {getLastDateString(job)}
                </td>
                <td style={{padding: '12px'}}>
                  <Link to={`/${job.slug}`} style={{ textDecoration: 'none', color: 'blue', fontWeight: '500', fontSize: '15px' }}>
  {job.title}
</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{textAlign: 'center', padding: '20px'}}>No Active Jobs Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ActiveJobs;
