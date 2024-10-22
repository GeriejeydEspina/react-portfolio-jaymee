import React from 'react';

function Navbar() {
  return (
    <section className='nav'>
        <div className="center-body">
            <div className="logo">
                <h1>Denielle.dev</h1>
            </div>
            <div className="menu">
                <ul>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Project</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Contact">Contact</a>
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Navbar;