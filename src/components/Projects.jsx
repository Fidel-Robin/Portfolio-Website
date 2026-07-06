import "./Projects.css";

function Projects() {
  return (
    <>
    {/* <img src="wave-haikei.svg" alt="Blurry gradient background" className="projects-bg" /> */}
    {/* <img src="stacked-waves-haikei (4).svg" alt="Blurry gradient background" className="projects-bg" /> */}
    {/* <img src="stacked-waves-haikei (5).svg" alt="Blurry gradient background" className="projects-bg" /> */}
    <img src="layered-waves-haikei 4.svg" alt="Blurry gradient background" className="projects-bg" />
    {/* <img src="layered-steps-haikei 2.svg" alt="Blurry gradient background" className="projects-bg" /> */}
    {/* <img src="layered-steps-haikei (3).svg" alt="Blurry gradient background" className="projects-bg" /> */}
    

    

    <section className="projects">
      
      <h2>My Projects</h2>
      <div className="cards-container">
        <div className="card">
          <img src="public/PCCI.svg" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>Philippine Chamber of Commerce and Industry CRM</h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>

        <div className="card">
          <img src="public/little-lions.svg" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>Little Lions SPED School Management System</h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>

        <div className="card">
          <img src="public/anatolearn.svg" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>AnatoLearn Capstone Project</h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>

        <div className="card">
          <img src="public/kapeibarra.svg" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>Kape Ibarra POS w/ Inventory</h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>

        <div className="card">
          <img src="public/kf-pastries.png" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>Kuya Fidel's Pastries Landing Page</h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>

        <div className="card">
          <img src="public/arrescue.svg" alt="Kuya Fidel's Pastries" />
          <div className="card-text-content">
            <h3>AR Rescue </h3>
            <p>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;