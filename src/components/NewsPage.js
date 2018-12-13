import React, { Component } from "react";
import { Link } from "react-router-dom";


class NewsPage extends Component {

  render() {
    const { newsArray } = this.props;
    return (
      <section className="NewsList">

        <ul>
          {newsArray.map(oneNews => {
            return (
              <li key={oneNews._id}>
                <h4>{oneNews.owner.name}</h4>
                <p>{oneNews.createdAt}</p>
                <p>{oneNews.message}</p>
                {oneNews.image && <img src={oneNews.image} alt = ""/>}
                {oneNews.Link && <Link to={oneNews.link}>Click me</Link>}
              </li>
            )
          })}
        </ul>


        
      </section>
    );
  }
}

export default NewsPage;