import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";


class NewsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsArray: [],
    }
  }

  componentDidMount() {
    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/asso/news",
      { withCredentials: true } 
      )
      .then(response => {
        console.log("News List", response.data);
        this.setState({ newsArray: response.data });
      })
      .catch(err => {
        console.log("News List ERROR", err);
        alert("Sorry! Something went wrong. NewsP30");
      });
  }

  render() {
    const { newsArray } = this.state;
    return (
      <section className="NewsList">

        <ul>
          {newsArray.map(oneNews => {
            return (
              <li key={oneNews._id}>
                <h4>{oneNews.owner}</h4>
                <p>{oneNews.postingTime}</p>
                <img src={oneNews.image} alt = ""/>

              </li>
            )
          })}
        </ul>


         <ul>
              <li>
                <h4>Happy Admins</h4>
                <p>11 décembre 2018</p>
                <p>Welcome to you!</p>
                <img src="https://www.askideas.com/media/13/Welcome-Picture.jpg" alt = ""/>

              </li>
        </ul>

      </section>
    );
  }
}

export default NewsPage;