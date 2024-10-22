import React from 'react';

function Home() {
  return (
    <section className="#Home">
        <div className="home-content">
            <div className="left">   
                <h3>Welcome to My Portfolio</h3>
                    <h1>I'm Denielle Derecho Jayme,</h1>
                <p>
                    Intermediate Front-end Developer,
                    Information Technology Student of <br />
                    Western Institute of Technology
                </p>
                <button className="contact-button">
                    <a href="#Contact">Contact Me</a>
                </button>
            </div>
            <div className="right">
                <img src="hanna.jfif" alt="Denielle" width='400px'/>
            </div>            
        </div>
    </section>
  );
}

export default Home;