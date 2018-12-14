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
              <div className="NewsMap">
              <li key={oneNews._id}>
                <h5>{oneNews.owner.name}</h5>
                <p>{oneNews.createdAt}</p>
                <p>{oneNews.message}</p>
                {oneNews.image && <img className="ImgNewsMap" src={oneNews.image} alt = ""/>}
                {oneNews.Link && <Link to={oneNews.link}>Click me</Link>}
              </li>
              </div>
            )
          })}
        </ul>


        
      </section>
    );
  }
}

export default NewsPage;