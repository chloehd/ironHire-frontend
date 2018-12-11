import React, { Component } from 'react';
import NewsPage from "./NewsPage.js";
import AddNews from "./AddNews.js";

class Associations extends Component {

  render() {
    return (
      <section className="associations">
        <nav>
          <a href="#0">All Associations</a>
          <a href="#0">Events</a>
          <a href="#0">Your Profile</a>
        </nav>

        <AddNews/>
        <NewsPage/>

      </section>
    )
  }
}

export default Associations;