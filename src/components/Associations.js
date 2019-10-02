import React, { Component } from "react";
import NewsPage from "./NewsPage.js";
import AddNews from "./AddNews.js";
import axios from "axios";
import Login from "./Login";

class Associations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArray: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/association", {
        withCredentials: true
      })
      .then(response => {
        console.log("News List", response.data);
        this.setState({ newsArray: response.data });
      })
      .catch(err => {
        console.log("News List ERROR", err);
        alert("Sorry! Something went wrong. NewsP30");
      });
  }

  updateNewsArray(oneNews) {
    const newsArrayCopy = [...this.state.newsArray];
    newsArrayCopy.unshift(oneNews);
    this.setState({ newsArray: newsArrayCopy });
  }

  render() {
    return (
      <section className="associations">
        {!this.props.currentUser && (
          <div className="container row">
            <div className="text">
              <p>
                You are an association working for refugees. You help them to be
                integrated in their new place and to find a job. You can join
                the community of Intégration to be in contact with other
                associations and to share with them all good practises.
              </p>
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
                alt="Hands"
              />
            </div>
            <Login onUserChange={this.props.onUserChange} />
          </div>
        )}
        {this.props.currentUser && (
          <div>
            {/* {candidateArray.map(oneVerif => { */}
            {/* return (
                <div key={oneVerif._id} className="Verifications">
              <ul>
              <a href="/association"><button>Validate the resume</button></a>
             
              </ul> */}

            <AddNews
              updateNewsArray={oneNews => this.updateNewsArray(oneNews)}
            />
            <NewsPage newsArray={this.state.newsArray} />
            {/* </div>
            );
          })   */}
          </div>
        )}
      </section>
    );
  }
}

export default Associations;
