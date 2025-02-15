import logo from "./logo.svg";
import "./App.css";
import Mycomponent from "./component/Mycomponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        đep traidiv
        <Mycomponent></Mycomponent>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hùng đep trai</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
