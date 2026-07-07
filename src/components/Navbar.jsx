import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2 className="logo">RF</h2>
      <div className="nav-btns">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>

    </nav>
  );
}

export default Navbar;