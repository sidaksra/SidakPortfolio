import React, { useEffect } from 'react';
import '../styles/style.css'; // Import your CSS file for styling

// Define a sample array of project data
const projectsData = [
  {
    id: 1,
    name: 'Capstone Project',
    imageUrl: 'profile1.jpg',
    desc: 'Developed a dynamic Data Analysis Web App for Longworth Dental Clinic. Empowered Owners, Dentists, Hygienists, and Receptionists with swift insights, amplifying decisions and fortifying data safeguards. HTML, CSS, JavaScript, PHP, MySQL, and Python',
    liveLink: 'https://loki.trentu.ca/~sidaksinghsra/4000Y/login.php',
    sourceCodeLink: 'https://github.com/sidaksra/Software-Engineering-Project.git',
  },
  {
    id: 2,
    name: 'To-Do-List',
    imageUrl: 'profile2.jpg',
    desc:'Crafted a productivity-driven To-Do List web app, featuring an intuitive task management layout. HTML, CSS, JavaScript, PHP, MySQL, and Web API',
    liveLink: 'https://loki.trentu.ca/~sidaksinghsra/To-Do-List/',
    sourceCodeLink: 'https://github.com/sidaksra/To-Do-List.git',
  },
  {
    id: 3,
    name: 'Cardly Application',
    imageUrl: 'profile3.jpg',
    desc:'Embracing both Agile and software methodologies, our team developed Cardly - an innovative C# GUI application. Cardly ensures security while generating virtual cards, enhancing online shopping experiences. C#, XAML, WPF, and MySQL', 
    sourceCodeLink: 'https://github.com/sidaksra/Cardly-Project.git',
  },
  {
    id: 4,
    name: 'Weather App',
    imageUrl: 'weather-app.jpg',
    desc:'A weather app that provides real-time weather information and map for a specified location. HTML, CSS, JavaScript (with Leaflet for maps)',
    liveLink: 'https://sidaksra.github.io/WeatherApp/',
    sourceCodeLink: 'https://github.com/sidaksra/WeatherApp.git',
  },
  {
    id: 5,
    name: 'Knock-Knock',
    imageUrl: 'profile5.jpg',
    desc:'Developed a C# terminal application using TCP/IP sockets, embodying the client-server pattern in my Software Architecture & Design Course. This project showcases my coding finesse as I seamlessly enable joke exchanges.',
    sourceCodeLink: 'https://github.com/sidaksra/Knock-Knock-Project.git',
  },
  {
    id: 6,
    name: 'Welcome Desk',
    imageUrl: 'profile6.jpg',
    desc:'Developed an automated hospital welcome desk system in C#. Executed essential design patterns including Singleton, Facade, and Iterator, optimizing appointment scheduling and streamlining directory navigation.',
    liveLink: 'https://youtu.be/BIQF2biC-sk',
    sourceCodeLink: 'https://github.com/sidaksra/Welcome-Desk/tree/f1b14767759b45d1c5e79700d43a45fb978a84ae/FinalProject',
  },
  {
    id: 7,
    name: 'Portfolio Website',
    imageUrl: 'portfolio-website.jpg',
    desc:'Explore my portfolio, a testament to my design prowess and experience in the field. Crafted using, it showcases my journey as a dedicated web developer. React, CSS, and JavaScript',
    liveLink: '#',
    sourceCodeLink: '#',
  },

];

const ProjectBox = ({ project }) => {
  return (
    <div className="project-box">
      <div className="project-image">
        <img src={require(`../images/${project.imageUrl}`)} alt={project.name} />
      </div>
      <div className="project-details">
        <h2>{project.name}</h2>
        <p class="project-description">{project.desc}</p>
        <div className="project-buttons">
          <a href={project.liveLink} target='_blank'>Live</a>
          <a href={project.sourceCodeLink} target='_blank'>Source Code</a>
        </div>
      </div>
    </div>

    
  );
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <section className="projects" id="projects">
      <div className="project-main">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Projects</h1>
        <div className="project-grid">
          {projectsData.map((project) => (
            <ProjectBox key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
