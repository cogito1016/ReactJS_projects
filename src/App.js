import React from 'react';
// import PropTypes from "prop-types";

//React Class Component
class App extends React.Component {
  state = {
    isLoading:true,
    movie : [] 
  };//state end

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false});
    },6000);
  }//CDM end
  
  render(){
    const {isLoading} = this.state;
    return <div> {isLoading ? "Loading":"We are Ready"} </div>;
  }//render() end

}//App end


export default App;
