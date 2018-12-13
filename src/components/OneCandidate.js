

// i will return to this !! -hw



// import React, { Component } from "react";
// import axios from "axios";

// class OneCandidate extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       specs: []
//     };
//   }


// componentDidMount() { 
//   const { params } = this.props.match;
//   axios.get (process.env.REACT_APP_SERVER_URL + "/api/recruiter/allcandidates", {
//     withCredentials: true
//   })
// .then(response => {
//   console.log("candidate deets", response.data);
//   this.setState(response.data);
// })
// .catch(err => {
//   console.log("candidate deets error", err);
//   alert("Oops! Something went wrong.")
// });
// }

//   render() {
//     const {
//       candidate_pic,
//       first_name,
//       last_name,
//       email,
//       telephone_number,
//       employment_status,
//       skills,
//       experience,
//       languages,
//       education
//     } = this.state;
//     return (
//       <section className="oneCandidate">
//         <h3>
//           {first_name} {last_name}
//         </h3>
//         <ul>
//           <img src={candidate_pic} alt="" />
//           <p>{email}</p>
//           <p>{telephone_number}</p>
//           <p>{employment_status}</p>
//           <p>{skills}</p>
//           <p>{experience}</p>
//           <p>{languages}</p>
//           <p>{education}</p>
//           {/* {telephone_number && <p>Telephone Number: {telephone_number}</p>}
//           {experience.map((oneExp, index) => {
//             return <p key={index}>{oneExp[0]}</p>
//           })}
//           {languages.map((oneLanguage, index) => {
//             return <p key={index}>{oneLanguage}</p>
//           })}
//           {education.map((oneEdu, index) => {
//             return <p key={index}>{oneEdu[0]}</p>
//           })} */}
//         </ul>
//       </section>
//     );
//   }
// }

// export default OneCandidate;
