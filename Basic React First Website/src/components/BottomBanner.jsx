import React, { useState } from 'react';

function BottomBanner() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
    setFormVisible(false);
  };

  return (
    <>
    <section class="benefits">
      <section className="bottom-banner">
        <h2>
          Switch to Microsoft Business Central Today!<br />
          Your Gateway to Immeasurable Success.
        </h2>
        <p>
          Simplify, automate, and succeed by leveraging the limitless capabilities of Business Central.
        </p>
        <div className="cta-button2">
          <button className="Switch-Now" onClick={toggleForm}>
            {isFormVisible ? 'Close Form' : 'Switch Now!'}
          </button>

          {isFormVisible && (
            <div id="formContainer">
              <div className="form-box">
                <h2>Request Callback</h2>
                <h3>Please complete the form <br />given below</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name *" required />
                  <input type="email" placeholder="Email *" required />
                  <input type="tel" placeholder="Phone *" required />
                  <textarea placeholder="How Can We Help You?" required></textarea>

                  <button type="submit">Submit</button>
                  <button type="button" onClick={toggleForm}>Close</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="business-central-info">
        <h2>What Makes Business Central ERP Stand Out?</h2>
        <p>
          The modern features, unlimited AI capabilities, pure cloud-based deployment, and cost-effective per-user
          subscription licensing make this solution unique and powerful for SMBs.
        </p>
      </section>

      <section className="features">
        <div className="feature">
          <h3>AI Powered Assistance</h3>
          <p>
            Business Central comes embedded with Microsoft Copilot to help you eliminate recurring or manual
            tasks and avail automation.
          </p>
        </div>
        <div className="feature">
          <h3>Unified and Modern Approach</h3>
          <p>
            Business Central ERP offers centralized data to offer data accessibility 24×7 with an attractive
            user interface and easy navigation.
          </p>
        </div>
        <div className="feature">
          <h3>Integration Capabilities</h3>
          <p>
            Utilize one-click Business Central Extension technology to integrate solutions of Microsoft Dynamics
            365 ecosystem without any hassle.
          </p>
        </div>
        <div className="feature">
          <h3>Cloud-enabled Technology</h3>
          <p>
            Cloud technology is cost-effective, low in maintenance, and enables businesses to automatically
            receive updates for free.
          </p>
        </div>
      </section>
    </section>
    </>
  );
}

export default BottomBanner;
