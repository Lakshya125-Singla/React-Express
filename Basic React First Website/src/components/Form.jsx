// rafce
import React from "react";

function Form(){
  return (
    // Form Button
    <div id="formContainer" className="hidden">
      <div className="form-box">
        <h2>Request Callback</h2>
        <h3>
          Please complete the form <br /> given below
        </h3>
        <form>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="tel" placeholder="Phone *" required />
          <textarea placeholder="How Can We Help You?" required></textarea>

          <button type="submit">Submit</button>
          <button type="button" id="closeFormBtn">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
