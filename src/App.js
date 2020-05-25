import React from 'react';
// import PropTypes from "prop-types";

//React Class Component
class App extends React.Component {

  state = {
    count : 0
  };

  add = () =>{
    
  };
  minus = () =>{
    
  };

  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  };

}//App end


export default App;
