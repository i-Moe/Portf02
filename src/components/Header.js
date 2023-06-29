import React from 'react';

function Header() {
    return (
        <div id="header">
            <div class="container">
                <nav>
                    <img src="imgs/raccoon_logo.png" class="logo" alt=""></img>
                        <ul id="sidemenu">
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <i class="fas fa-times" onclick="closemenu()"></i>
                        </ul>
                        <i class="fas fa-bars" onclick="openmenu()"></i>
                </nav>
                <div class="header-text">
                    <p>UI/UX designer</p>
                    <h1>Hi, I'm <span>Racoon</span>from Japan</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
