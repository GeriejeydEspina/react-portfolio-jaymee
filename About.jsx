import React from 'react';

function About() {
  return (
    <section className="#About">
        <div className="about-content">
            <div className="about-left">
                <img src="jayme.jfif" alt="Denielle" width={'350px'}/>
            </div>
            <div className="about-right">
                    <h2>About Me</h2>
                <p>
                    "Crafting digital experiences that inspire and engage. <br /> 
                    As a dedicated information technology student with a passion for <br />
                    web development, I'm committed to creating innovative and user-friendly <br />
                    websites. My skills include HTML, CSS, JavaScript, React, Node.js, <br />
                    and I'm always eager to learn and explore new technologies.<br /> <br />
                    Let's build something amazing together!"
                </p>               
            </div>
        </div>
    </section>
  );
}

export default About;