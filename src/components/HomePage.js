import React, { Component } from 'react';

class HomePage extends Component {
  render() { 
    return ( 
      <section className="homepage">
        <h2>ironHire</h2>



        <div className="about">
        <p>this is where ABOUT the website goes</p>
        </div>

        <div className="home-candidate">
        <p>this is where about the CANDIDATES goes</p>
        </div>

        <div className="home-recruiter">
        <p>this is where about the RECRUITERS goes</p>
        </div>

        <div className="home-associations">
        <p>this is where about the ASSOCIATIONS goes</p>
        </div>


      </section>


     );
  }
}
 
export default HomePage;
