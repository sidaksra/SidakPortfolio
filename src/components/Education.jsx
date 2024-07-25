import React from 'react';

const Education = () => {
  return (
    <section className="education-section" id="Education">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Education & Achievement</h1>
      <div className="education-container">
        <div className="education-column">
          <div className="education-card">
            <h2 className="column-title">Education</h2>
            <div className="education-timeline">
              <div className="education-item">
                <div className="timeline-badge">O</div>
                <div className="education-content">
                  <h3 className="school-name">Trent University, Canada</h3>
                  <p className="education-period">Jan 2020 - Sep 2023</p>
                  <p className="program-name">Bachelor of Science in Computer Science with Specialization in Software Engineering</p>
                  <p className="grades">GPA: 3.87/4.0</p>
                </div>
              </div>
              <div className="education-item">
                <div className="timeline-badge">•</div>
                <div className="education-content">
                  <h3 className="school-name">Wisdom World School</h3>
                  <p className="education-period">2018 - 2019</p>
                  <p className="program-name">Grade: 12th (Non-Medical) - CBSE</p>
                  <p className="grades">82%</p>
                </div>
              </div>
              <div className="education-item">
                <div className="timeline-badge">•</div>
                <div className="education-content">
                  <h3 className="school-name">Wisdom World School</h3>
                  <p className="education-period">2016 - 2017</p>
                  <p className="program-name">Grade: 10th - CBSE</p>
                  <p className="grades">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="achievements-column">
          <div className="achievements-card">
            <h2 className="column-title">Achievements</h2>
            <div className="achievements-timeline">
              <div className="achievements-item">
                <div className="timeline-badge">O</div>
                <div className="achievements-content">
                  <h3 className="achievement-heading">Trent University</h3>
                  <ul className="achievement-list">
                    <li>4x Dean's Honour Roll</li>
                    <li>President's Honour Roll</li>
                    <li>$1,500 In-Course Scholarship</li>
                  </ul>
                </div>
              </div>
              <div className="achievements-item">
                <div className="timeline-badge">O</div>
                <div className="achievements-content">
                  <h3 className="achievement-heading">Extra-Curricular Activities and Awards</h3>
                  <ul className="achievement-list">
                    <li>- Won various Dance Competitions</li>
                    <li>- Participated in State Level Gymnastics Competition</li>
                    <li>- Won Silver Medal in the Trent University Cricket Tournament 2022</li>
                    <li>- Won Walmart Badge of being respectful to others</li>
                    <li>- Trent University Proctor 2023, successfully contributed to campus life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
