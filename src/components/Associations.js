import React, { Component } from 'react';
import NewsPage from "./NewsPage.js";
import AddNews from "./AddNews.js";
import axios from "axios";
import Login from "./Login";


class Associations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsArray: [],
    }
  }

  componentDidMount() {
    axios.get(
      process.env.REACT_APP_SERVER_URL + "/api/association",
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

  updateNewsArray(oneNews) {
    const newsArrayCopy = [...this.state.newsArray];
    newsArrayCopy.unshift(oneNews);
    this.setState({ newsArray: newsArrayCopy });
  }


  render() {



    return (
      <section className="associations">
        {!this.props.currentUser && 
        <div>
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Sign Up</h4>
           </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
          
          <button data-target="modal1" class="btn modal-trigger">Modal</button>

        </div>
        </div>

        }

        <AddNews updateNewsArray={(oneNews) => this.updateNewsArray(oneNews)} />
        <NewsPage newsArray={this.state.newsArray} />

      </section>
    )

  }
}

export default Associations;