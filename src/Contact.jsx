import React from 'react';

function Contact() {
  return (
    <div className="job-container">
      <h1 className="job-title">Contact Us</h1>
      <div className="simple-box" style={{padding: '20px', textAlign: 'center'}}>
        <p>If you have any queries regarding the website, advertisements, or any other issue, please feel free to contact us.</p>
        
        <div style={{margin: '30px 0', border: '1px dashed #000', padding: '20px', background: '#f9f9f9'}}>
          <h3>📧 Email Us At:</h3>
          <p style={{fontSize: '20px', fontWeight: 'bold', color: 'blue'}}>
            support@toponlineform.com
          </p>
          <p>(We usually reply within 24 hours)</p>
        </div>

        <p><strong>Office Location:</strong><br/>New Delhi, India</p>
      </div>
    </div>
  );
}

export default Contact;
