import React from 'react'

function Header() {
  return (
    <>
    <div className="top-bar">
        <span>📧 infodynamicssquares.com</span>
        <span>📞 +91-5859595685</span>
        <span>💬 15ABjmv4496SSun541</span>
    </div>
    <header>
      
        <div className="logo">DYNAMICS <span className="highlight">SQUARE</span></div>
        <nav>
            <ul>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        <div className="contact-button" onclick="alert('Call has been done.')"><span>+1 289 807 0740</span></div>
    </header>

    
    </>
  )
}

export default Header
