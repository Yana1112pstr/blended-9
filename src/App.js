// import React from "react";

// class App extends React.Component {
//   state = {
//     name: "",
//     age: "",
//   };

//   setForm = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   showMessage = () => {
//     const { name, age } = this.state;
//     alert(`${name}:${age}`);
//     this.setState({ name: "", age: "" });
//   };

//   render() {
//     const { name, age } = this.state;
//     return (
//       <div className="App">
//         <form>
//           <label>
//             Name
//             <input
//               type="text"
//               value={name}
//               name="name"
//               onChange={this.setForm}
//             />
//           </label>
//           <label>
//             Age
//             <input type="text" value={age} name="age" onChange={this.setForm} />
//           </label>
//           <button type="button" onClick={this.showMessage}>
//             show message
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

import { Component, createRef } from "react";

class App extends Component {
  nameRef = createRef();
  ageRef = createRef();

  showMessage = () => {
    console.log(this.nameRef.current.value);
    alert(`${this.nameRef.current.value} : ${this.ageRef.current.value}`);
  };

  render() {
    return (
      <form>
        <label>
          Name
          <input ref={this.nameRef} />
        </label>
        <label>
          Age
          <input ref={this.ageRef} />
        </label>
        <button type="button" onClick={this.showMessage}>
          show message
        </button>
      </form>
    );
  }
}

export default App;

// import React, { useRef } from "react";

// function App() {
//   const nameRef = useRef(null);
//   const ageRef = useRef(null);

//   const showMessage = () => {
//     alert(`${nameRef.current.value} : ${ageRef.current.value}`);
//   };
//   return (
//     <form>
//       <label>
//         Name
//         <input ref={nameRef} />
//       </label>
//       <label>
//         age
//         <input ref={ageRef} />
//       </label>
//       <button onClick={showMessage}>Show message</button>
//     </form>
//   );
// }

// export default App;
