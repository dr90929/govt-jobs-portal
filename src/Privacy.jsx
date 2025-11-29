import React from 'react';

function Privacy() {
  return (
    <div className="job-container">
      <h1 className="job-title">Privacy Policy & Disclaimer</h1>
      <div className="simple-box" style={{padding: '20px', lineHeight: '1.6'}}>
        
        <h3 style={{color: 'red'}}>Disclaimer (Very Important)</h3>
        <p><strong>TopOnlineForm.com</strong> is NOT an official website of the Government of India or any State Government. We are a private information portal that collects data from various official sources and news outlets to help job seekers.</p>
        
        <p>While we try our best to provide accurate information, errors may occur. We request all our users to <strong>always verify the details from the official website</strong> before applying for any job.</p>

        <h3>Information We Collect</h3>
        <p>We do not collect any personal information like Aadhar Card or Bank Details directly. We only provide links to official forms.</p>

        <h3>Cookies</h3>
        <p>We use third-party advertising companies (like Google AdSense) to serve ads when you visit our website. These companies may use cookies to serve ads based on your interest.</p>

        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, you can contact us via the Contact Us page.</p>
      </div>
    </div>
  );
}

export default Privacy;
