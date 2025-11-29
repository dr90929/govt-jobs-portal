import React from 'react';

function About() {
  return (
    <div className="job-container">
      <h1 className="job-title">About Us</h1>
      <div className="simple-box" style={{padding: '20px', lineHeight: '1.6'}}>
        <p>Welcome to <strong>TopOnlineForm.com</strong>, your number one source for all Government Jobs, Sarkari Results, Admit Cards, and Admission Forms.</p>
        
        <p>We are dedicated to providing you the very best of latest job updates, with a focus on dependability, speed, and accuracy.</p>
        
        <h3>Our Mission</h3>
        <p>Our mission is to help students and job seekers by providing them with timely updates about:</p>
        <ul>
          <li>Latest Government Jobs (Sarkari Naukri)</li>
          <li>Admit Cards & Hall Tickets</li>
          <li>Exam Results</li>
          <li>Answer Keys</li>
          <li>Syllabus & Admission Forms</li>
        </ul>

        <p>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        
        <p><strong>Sincerely,</strong><br/>The TopOnlineForm Team</p>
      </div>
    </div>
  );
}

export default About;
