import React, { useEffect, useState } from 'react'; 
import './App.css';
import nishi from "./Image.png"; 

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header>
        <div className="user">
          <img src={nishi} alt="Gudla Nishika" />
          <h3 className="name">Gudla Nishika</h3>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className='navlink'><a href="#home">HOME</a></li>
            <li className='navlink'><a href="#about">ABOUT</a></li>
            <li className='navlink'><a href="#education">EDUCATION</a></li>
            <li className='navlink'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h2>Hello!</h2> 
        <h1>I'm<span>       Nishika!</span></h1>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> <span>about</span> me </h1>
        <div className="row">
          <div className="info">
            <h3> <span> Name : </span> Gudla Nishika </h3>
            <h3> <span> Qualification : </span> B-Tech (Junior) </h3>
            <h3> <span> Address: </span>Andhra Pradesh</h3>
            <h3> <span> Strengths : </span> Time management, Working under pressure, Fast learner </h3>
            <h3> <span> Hobbies: </span> Coding, Graphic Designing, Travelling </h3>
            <h3> <span> Languages Known : </span> Telugu, Hindi, English, Spanish </h3>
            <h3> <span> Technical skills : </span> JAVA, Python, C++(basics) </h3>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading"> Educational <span>Details</span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019</span>
            <h3>CBSE (94.2%)</h3>
            <p style={{ fontSize: '20px' }}>Dr.KKR Gowtham School, Visakhapatnam</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021</span>
            <h3>SSC, Telangana (97.6%)</h3>
            <h3>MPC</h3>
            <p style={{ fontSize: '20px' }}>Little Flower Junior College, Hyderabad</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2025</span>
            <h3>B-Tech (CSE with Spl. in AI & ML)</h3>
            <h4> </h4>
            <p style={{ fontSize: '20px' }}>VIT-AP University, Amaravati</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> details </h1>
        <div className="row">
          <div className="content">
            <div className="info">
              <h3> <span> Email Id: </span><i className="fas fa-envelope"></i>gnrreddy2003@gmail.com</h3>
              <h3> <span> Contact Number: </span><i className="fas fa-phone"></i> 1234567891 </h3>
              <h3> <span> State: </span><i className="fas fa-map-marker-alt"></i> Andhra Pradesh </h3>
            </div>
          </div>
        </div>
      </section>

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={nishi} alt="" />
        </a>
      )}
    </div>
  );
}

export default App;
