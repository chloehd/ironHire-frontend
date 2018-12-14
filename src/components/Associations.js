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
            <Login onUserChange={userDoc => this.props.onUserChange(userDoc)}/>
        }
        {this.props.currentUser && 
        <div>
      
          <p>There is {{recipeVerifNumber}} recipe(s) to accept</p>
          {{#each recipeArray}} 
          <h4>{{this.title}}</h4>
          <ul>
          <li>Image: {{this.image}}</li>
          <li>Level: {{this.level}}</li>
          <li>Duration: {{this.duration}}</li>
          <li> Ingredients: {{this.ingredients}}</li> 
          <a href="/admin/{{this._id}}/recipes"><button>Validate the recipe</button></a>
          </ul>
          {{/each}}



        <AddNews updateNewsArray={(oneNews) => this.updateNewsArray(oneNews)} />
        <NewsPage newsArray={this.state.newsArray} />
        </div>
      }

      </section>
    )

  }
}

export default Associations;