import React from 'react';

const Aboutme = () => {
  return (
    <section className="aboutme-section">
      <div className="info-about-me">
        <div>
          <div className="aboutme-section-flex">
            <div>
              <p className="hey-there">Hey there,</p>
              <h2 className="heading-animation">I'm SIDAK SINGH SRA</h2>
              <p className="aboutme-para">
  I am a proud graduate with a Bachelor of Science (Honours) in Computer Science (with specialization in Software Engineering) from <span className="trent-link"><a href="https://www.trentu.ca/" target="_blank" rel="noreferrer" className="underlineHoverEffect-2">Trent University, Canada</a></span>. My academic journey was marked by consistent recognition on the Dean's Honour Roll for four consecutive years, a testament to my dedication and excellence.
  <br /><br />
  With a strong foundation in <span className="bold-text">C#, Python, HTML, CSS, PHP, MySQL, ReactJS,</span> and <span className="bold-text">JavaScript</span>, I specialize in developing interactive web applications and performing data analytics. My experience includes leading projects and collaborating effectively within teams to achieve high-quality results on time.
  <br /><br />
  Explore my work to see how I leverage my skills to create innovative solutions and drive success in every project.
</p>



            </div>
            <div>
              <img src={require("../images/SidakSra.jpg")} alt="My Image" className="my-image-main-page image-animation" />
            </div>
          </div>
          <div className="buttons">
            <a href="https://drive.google.com/uc?export=download&id=1I3QvgnfoBWYzImbAdBapBDp3Pt1NNrmI">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                Download Resume
              </button>
            </a>
            <a href="https://github.com/sidaksra" target="_blank" rel="noreferrer">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                Visit GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/sidaksinghsra" target="_blank" rel="noreferrer">
              <button type="submit" name="submit" value="submit" className="button-52 appear">
                LinkedIn Profile
              </button>
            </a>
          </div>
          <p className="impact-line">Whether it's<br /><span className="software-impact-line"> Software development, problem-solving, or team collaboration,</span><br />I'm ready to make a difference in the world of technology!</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
