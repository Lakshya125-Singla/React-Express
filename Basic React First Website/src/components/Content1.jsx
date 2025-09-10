import React, { useState } from "react";

function Content1() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="content">
        <h2>
          Dynamics 365 Business Central - <br /> Your Partner in Growth
        </h2>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjezVH8Q424kNT4gwW0OxWFqBgD6QmWDkYXg&s"
          alt="Business Central Infographic"
          style={{ float: "left", width: "450px", height: "400px" }}
        />

        <article>
          <br />
          <br />
          <p>
            Dynamics 365 Business Central, formerly known as{" "}
            <span className="highlight">Dynamics NAV</span>, is a comprehensive
            cloud ERP solution embedded with modern technologies of AI and BI to
            streamline the diverse processes of SMBs.
          </p>
          <br />
          <p>
            Microsoft Business Central is a powerful solution that comes with
            advanced capabilities and business-centric functionalities to deal
            with different complexities. It connects, manages, and streamlines
            different departments that include{" "}
            <b>finance, sales, supply chain operations, and HR.</b>
          </p>
          <br />
          <p>
            D365 BC leverages the power of AI enabled Copilot assistance to
            enhance productivity, get real-time insights to make data-driven
            decisions, and simplify processes to enhance overall efficiency with
            improved visibility.
          </p>
        </article>
      </section>

      <br />
      <br />

      <section className="cta-section">
        <h2>Want to eliminate data silos and boost business productivity?</h2>

        <p>
          Accept innovation and embrace cloud computing with a cost-effective
          Business Central implementation. Break silos and boost profit margins
          with a FREE Business Central trial.
        </p>

        <button className="cta-button9" onClick={() => setShowForm(true)}>
          Unlock Growth. Start Your Trial Today
        </button>

        {showForm && (
          <div id="formContainer" className="form-container">
            <div className="form-box">
              <h2>Request Callback</h2>
              <h3>
                Please complete the form <br /> given below
              </h3>
              <form>
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required />
                <input type="tel" placeholder="Phone *" required />
                <textarea
                  placeholder="How Can We Help You?"
                  required
                ></textarea>

                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Content1;
