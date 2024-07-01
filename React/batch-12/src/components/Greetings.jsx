import React from "react";

// Functional Component :-

// function Greetings(props) {
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//     </div>
//   );
// }

// export default Greetings;

// Class Component :-

class Greetings extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

export default Greetings;
