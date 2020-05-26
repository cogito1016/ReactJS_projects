import React from 'react';
// import PropTypes from "prop-types";

//React Class Component
class App extends React.Component {

  constructor(props){
    super(props);
    console.log("I'm born"); //앱이 생성되었을때
  }//cons end

  state = {
    count : 0
  };

  add = () =>{
    this.setState( current => ({ count : current.count+1}) );
  };
  minus = () =>{
    this.setState( current => ({ count : current.count-1}) );
  };

  componentDidMount(){
    console.log("Component Render") //컴포넌트가 최초 렌더링될때
  }//comp~didmnt end 

  componentDidUpdate(){
    console.log("I just updated") //컴포넌트가 업데이트된 후
  }//compdidudt end

  componentWillUnmount(){
    console.log("GoodBye.."); //컴포넌트가 죽었을때
  }//compwiumnt end

  render(){
    console.log("I am rendering") //컴포넌트가 그려졌을때
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
