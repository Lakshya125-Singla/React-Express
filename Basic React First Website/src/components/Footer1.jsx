import React from 'react'

function Footer1() {
  return (
    <>
        <footer>
        <div className="footer-container">
            <div className="footer-info"><br/><br/>
                <img src="https://www.dynamicssquare.com.au/includes/images/Logo-DS-new-logo-02.webp"
                    alt="Dynamics Square" />
                <br/><br/><br/>
                    <p>+91 66515 11115</p>
                    <p> budeg@dynamicssquare.com</p>
                    <p> vdywv,l74894,lcjei,ccwwss, Faridabad</p>
            </div>
            <div className="footer-services">
                <h3>Services</h3>
                <ul>
                    <a href="#">Website Designing</a><br/>
                    <a href="#">Digital Marketing</a><br/>
                    <a href="#">E-commerce SEO</a><br/>
                    <a href="#">Graphic Design</a><br/>
                    <a href="#">Frontend Development</a><br/>
                    <a href="#">Backend Development</a><br/>
                    <a href="#">Mobile App Development</a>
                </ul>
            </div>

            <div className="footer-links">
                <h3>Links</h3>
                <ul>
                    <a href="#">About Us</a><br/>
                    <a href="#">Blogs</a><br/>
                    <a href="#">Contact Us</a><br/>
                    <a href="#">Case Studies</a><br/>
                    <a href="#">Portfolio</a><br/>
                    <a href="#">Areas We Serve</a>
                </ul>
            </div>

            <div className="footer-contact">
                <h3>Let's Discuss Now</h3>
                <form>
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                    <input type="tel" placeholder="Phone *" required />
                    <textarea placeholder="Please describe your requirements" required></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund & Cancellation Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
    </footer>
    </>
  )
}

export default Footer1
