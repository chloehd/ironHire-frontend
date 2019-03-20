import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <section className="homepage">

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2">Parallax Template</h1>
              <div className="row center">
                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
              </div>
              <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
              </div>
            </div>
          </div>
          <div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1" /></div>
          </div>


          <div className="container">
            <div className="section">

              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                    <h5 className="center">Candidates</h5>

                    <p className="light">We work to mobilize businesses to hire refugees and integrate them into supply chains anywhere that refugees live, but we encourage businesses to focus in particular in markets where the need is greatest, including developing countries that host the largest refugee populations.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                    <h5 className="center">Recruiter</h5>

                    <p className="light">Private sector companies can play a vital role in creating jobs for refugees, whether by hiring them directly in their workforce or taking steps to integrate them into their supply chains. In so doing, companies can help refugees become self-reliant and transform refugee-hosting communities into thriving economies — while also expanding their business and elevating their brand.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                    <h5 className="center">Associations</h5>

                    <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
              <div className="container">
                <div className="row center">
                  <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                </div>
              </div>
            </div>
            <div className="parallax"><img src="background2.jpg" alt="Unsplashed background img 2" />
            </div>
          </div>

            <div className="container">
              <div className="section">

                <div className="row">
                  <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>About Us</h4>
                    <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="parallax-container valign-wrapper">
              <div className="section no-pad-bot">
                <div className="container">
                  <div className="row center">
                    <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                  </div>
                </div>
              </div>
              <div className="parallax"><img src="background3.jpg" alt="Unsplashed background img 3" /></div>
              </div>

      </section>
            );
          }
          }
                        
          export default HomePage;
