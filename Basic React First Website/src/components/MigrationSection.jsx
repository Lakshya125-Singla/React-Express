import React from 'react'

function MigrationSection() {
  return (
    <>
    <section class="benefits">
        <section className="migration-section">
            <div className="card-text light-blue">
                <h2>Dynamics NAV to BC Upgrade</h2>
                <p>Struggling with data silos, downtime, and system complexities? Go for a Dynamics NAV to BC upgrade to
                    simplify processes, avail AI-enabled automation, and limitless scalability.</p>
                <button className="red-button" id="openFormBtn">Find Out More</button>
                <div id="formContainer" className="hidden">
                    <div className="form-box">
                        <h2>Request Callback</h2>
                        <h3>Please complete the form <br/>given below</h3>
                        <form>
                            <input type="text" placeholder="Name *" required />
                            <input type="email" placeholder="Email *" required />
                            <input type="tel" placeholder="Phone *" required />
                            <textarea placeholder="How Can We Help You?" required></textarea>

                            <button type="submit">Submit</button>
                            <button type="button" id="closeFormBtn">Close</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="card-text white">
                <h2>Dynamics GP to BC Migration</h2>
                <p>Dealing with limited support and customization intricacies? Opt for Dynamics GP to BC migration to
                    eliminate complexities, centralize data, and customize your system as per requirements.</p>
                <button className="red-button" id="openFormBtn">Find Out More</button>
                <div id="formContainer" className="hidden">
                    <div className="form-box">
                        <h2>Request Callback</h2>
                        <h3>Please complete the form <br/>given below</h3>
                        <form>
                            <input type="text" placeholde="Name *" required />
                            <input type="email" placeholder="Email *" required />
                            <input type="tel" placeholder="Phone *" required />
                            <textarea placeholder="How Can We Help You?" required></textarea>

                            <button type="submit">Submit</button>
                            <button type="button" id="closeFormBtn">Close</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>


        <div className="container5">
            <div className="pricing-header">Dynamics 365 Business Central Pricing:<br/>Find the Best Plan</div>
            <div className="pricing-subtext">Take a look at Dynamics 365 Business Central Pricing and choose the perfect
                plan among Team Member, Essential, and Premium Licensing options.</div>

            <div className="pricing-cards">
                <div className="card5">
                    <div className="card5-header">Dynamics 365 Business Central Essentials</div>
                    <div className="price">$95(CAD)</div>
                    <p>per user/month</p>
                    <ul className="features5">
                        <li>&#10003; Financial Management</li>
                        <li>&#10003; Inventory Management</li>
                        <li>&#10003; Order Management</li>
                        <li>&#10003; Purchase Order Management</li>
                        <li>&#10003; Project Management</li>
                        <li>&#10003; Additional Management</li>
                    </ul>
                </div>

                <div className="card5">
                    <div className="card5-header">Dynamics 365 Business Central Premium</div>
                    <div className="price">$135.70(CAD)</div>
                    <p>per user/month</p>
                    <ul className="features5">
                        <li>&#10003; Financial Management</li>
                        <li>&#10003; Inventory Management</li>
                        <li>&#10003; Sales Order Management</li>
                        <li>&#10003; Purchase Order Management</li>
                        <li>&#10003; Project Management</li>
                        <li>&#10003; Additional Capabilities</li>
                        <li>&#10003; Service Management</li>
                        <li>&#10003; Manufacturing</li>
                        <li>&#10003; Additional Capabilities</li>
                    </ul>
                </div>

                <div className="card5">
                    <div className="card5-header">Dynamics 365 Business Central Team Members</div>
                    <div className="price">$10.90(CAD)</div>
                    <p>per user/month</p>
                    <ul className="features5">
                        <li>&#10003; Read and Approve</li>
                        <li>&#10003; Employee Self Serve</li>
                        <li>&#10003; Run All Reports</li>
                    </ul>
                </div>
            </div>
        </div>

        <button className="red-button2" id="openFormBtn">Get Started Now</button>
        <div id="formContainer" className="hidden">
            <div className="form-box">
                <h2>Request Callback</h2>
                <h3>Please complete the form <br/>given below</h3>
                <form>
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                    <input type="tel" placeholder="Phone *" required />
                    <textarea placeholder="How Can We Help You?" required></textarea>

                    <button type="submit">Submit</button>
                    <button type="button" id="closeFormBtn">Close</button>
                </form>

            </div>
        </div>

    </section>
    </>
  )
}

export default MigrationSection
