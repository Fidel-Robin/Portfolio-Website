import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
        <img src="blurry-gradient-haikei (4).svg" alt="Blurry gradient background" class="hero-bg" />
        <div className="hero-wrapper">
            <div className="hero-text">
                <p>Hello!</p>
                <h3>I'm Robin</h3>       
                <h1>Web Developer with Business Mindset</h1> 
                <h4>I build responsive websites, POS systems, and practical business solutions using React, Laravel, JavaScript, and MySQL.</h4>
                
                <div className="hero-btns">
                    <button className="vp-btn"><a href="#projects">View Projects</a></button>
                    <button className="dr-btn"><a href="public/Ishmael_Robin_Fidel_CV_JWD.pdf" download>Download Resume</a></button>
                </div>
            </div>
            <div className="hero-image">
                <img src="public/hero-img.png   " alt="" />
            </div>
        </div>
    </section>
  );
}

export default Hero;