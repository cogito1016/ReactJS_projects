import React from 'react';
import axious from 'axios';
import Movie from './Movie.js';
import './App.css';
// import PropTypes from "prop-types";

//React Class Component
class App extends React.Component {
  state = {
    isLoading:true,
    movies : [] 
  };//state end

  getMovies = async () => {
    // ES6에서는 moives.data.data.movies 하는것보다 이렇게하는게 더 이쁨
    const {data : {data :{ movies }}} = await axious.get("https://yts-proxy.now.sh/list_movies.json:sort_by=rating");
    this.setState({movies:movies , isLoading:false});

  }//getMovies() end
//asdsada
  componentDidMount(){
    this.getMovies();
  }//CDM end
  
  render(){
    const {isLoading,movies} = this.state;
    return (
    <section class="container"> 
    {isLoading 
    ?(
    <div class="Loader">
      <span class="loader__text"></span>
    </div>
    ):( 
    <div class="movies">

    {movies.map( movie =>{
      console.log(movie);
    return <Movie 
    key={movie.id}
    id={movie.id} 
    year={movie.year} 
    title={movie.title} 
    summary={movie.summary}
    poster={movie.medium_cover_image} />
    })}

    </div>
    )} 
    </section>);
  }//render() end

}//App end


export default App;


