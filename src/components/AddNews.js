import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddNews extends Component {
  constructor(props){
    super(props);

    this.state = {
      message: "",
      image: "",
      link: "",
      isSubmitSuccessful: false,
    };
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post(
      process.env.REACT_APP_SERVER_URL + "/api/asso/news", 
      {
        message: this.state.message,
        image: this.state.image,
        link: this.state.link,
      },
      { withCredentials: true } 
      )
      .then(response => {
        console.log("Add News", response.data);
        this.props.updateNewsArray(response.data);
      })
      .catch(err => {
        console.log("Add News ERROR", err);
        alert("Sorry! Something went wrong. AddNews48")
      });
  }


  render() { 

    return ( 
      <section className="AddNews">
        <h2>Share information</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          
          <label>
            Message: 
            <input value={this.state.message}
                  onChange={event => this.genericSync(event)}
                  type="text" name="message" placeholder="Today, we've met... "/>
          </label>

          <label>
            Image: 
            <input value={this.state.image}
                  onChange={event => this.genericSync(event)}
                  type="url" name="image" placeholder="www.image.com/img.jpg"/>
          </label>

          <label>
            Link: 
            <input value={this.state.link}
                  onChange={event => this.genericSync(event)}
                  type="url" name="link" placeholder="www.example.com"/>
          </label>

          <button>Add News</button>
        </form>
      </section>
     );
  }
}
 
export default AddNews;