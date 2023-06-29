import React from 'react';

function Contact() {
    return (
        <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fas fa-paper-plane"></i>contact@example.com</p>
                    <p><i class="fas fa-phone-square-alt"></i>0123456789</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <a href="imgs/raccoon.jpg" download class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required></input>
                        <input type="email" name="Email" placeholder="Your Email" required></input>
                        <textarea name="Message" id="" cols="" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © Kevin. Made with <i class="fas fa-heart"></i> by Easy Tutorials</p>
        </div>
    </div>
    );
    }
    export default Contact;