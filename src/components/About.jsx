import "./About.css";

function About() {
  return (
    <>
        <section className="strapline" id="about">
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Laravel</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Laravel</li>
            </ul>
        </section>
        <section className="about">
            <img src="blurry-gradient-haikei (6).svg" alt="Blurry gradient background" class="hero-bg" />

            <div className="about-image">
                <img src="/about-img.png" alt="" />
            </div>
            <div className="about-text">
                <h3>About Me</h3>
                {/* <p className="about-description">I'm a passionate web developer with a keen 
                    eye for design and a strong foundation in 
                    business principles. I specialize in creating
                    responsive websites and practical business solutions
                    using modern technologies.</p> */}
                    <p className="about-description">
                         I'm an Information Technology graduate passionate 
                         about building practical digital solutions. Beyond 
                         coding, I enjoy leading teams, solving problems, and 
                         collaborating with others. My experience in web development,
                          project leadership, and business management has shaped me 
                          into a developer who values both technical excellence and 
                          effective leadership.
                    </p>
                {/* <p>A graduate of BS Information Technology with experience in frontend and backend development, project leadership, and real business operations.</p> */}

                <div className="about-numbers">
                    <div className="number">
                        <h4>5+</h4>
                        <p>Projects</p>
                    </div>
                    <div className="number">
                        <h4>1</h4>
                        <p>Internship</p>
                    </div>
                    <div className="number">
                        <h4>1</h4>
                        <p>Business</p>
                    </div>
                    {/* <div className="number">
                        <h4>2</h4>
                        <p>Competition Awards</p>
                    </div> */}
                    <div className="number">
                        <h4>2026</h4>
                        <p>Graduate</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default About;