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

 // const {candidateArray} = this.props;

    return (
      <section className="associations">
        {!this.props.currentUser && 
        <div>
            <p>You are an association that is working with refugees. You help them to be integrated in their new place and helping them to find
              a job is one of your aim. You can join the community of IronHire to be in contact with other associations that are following 
              the same way. 
            </p>
            <Login onUserChange={this.props.onUserChange}/>
        </div>
        }
        {this.props.currentUser && 
        <div>
        {/* {candidateArray.map(oneVerif => { */}
            {/* return (
                <div key={oneVerif._id} className="Verifications">
              <ul>
              <a href="/association"><button>Validate the resume</button></a>
             
              </ul> */}
                 
                      <AddNews updateNewsArray={(oneNews) => this.updateNewsArray(oneNews)} />
                      <NewsPage newsArray={this.state.newsArray} />
              {/* </div>
            );
          })   */}
        </div>
        }
      </section>
      )
      }

}




export default Associations;