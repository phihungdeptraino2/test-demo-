import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "hung",
    age: 20,
  };
  render() {
    return <div>This í my {this.state.name} component</div>;
  }
}

export default Mycomponent;
