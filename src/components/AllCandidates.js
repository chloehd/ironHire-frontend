// import React, { Component } from 'react';
// import axios from "axios";


// class AllCandidates extends Component {
//   constructor(props) {
//     super(props);
  
//   this.state = { 
//     specs: [],
//   };
//   }

//   componentDidMount() {
//     const { params } = this.props.match;
//     axios.get(
//       process.env.REACT_APP_SERVER_URL + "/api/candidate/all",
//       { withCredentials: true },
//     )
//       .then(response => {
//         console.log("All Candidates data", response.data);
//         this.setState(response.data)
//       })
//       .catch(err => {
//         console.log("all candidate ERROR", err);
//         alert("Sorry! Candidates not loading");
//       });
//     }

//   render() {
//     const {  } = this.state;

//     return (
//       <section className="AllCandidatesSection">
//         <h2>All Candidates</h2>

//         <ul>
//           {candidateArray.map(oneCandidate => {
//             return (
//               <div className="AllCandidatesDiv">
//                 <li>{oneCandidate.first_name}</li>
                      
//               <li >
//               <h3>
//               <Link to={getCandidateUrl(oneCandidate)}>
//               {oneCandidate.firstName} {oneCandidate.last_name}
//               </Link>
//               </h3>
//               </li>
//               <img src={oneCandidate.candidatePic} alt="" />
//               <li>{oneCandidate.email}</li>
//               <li>{oneCandidate.telephoneNumber}</li>
//               <li>{oneCandidate.employmentStatus}</li>
//               <li>{oneCandidate.skills}</li>
//               <li>{oneCandidate.experience}</li>
//               <li>{oneCandidate.languages}</li>
//               <li>{oneCandidate.education}</li>

//               </div>
//             );
//           })}
//         </ul>
//       </section>

//     );
//   }
// export default AllCandidates;
