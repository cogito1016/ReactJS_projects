import React from 'react';
import PropTypes from "prop-types";

function Food({name}){
  return <h1>I like {name}</h1>
}

Food.PropTypes = {
  name:PropTypes.string.isRequired,
};

const foodILike = [
  {
    "id":1,
    "name":"Kimchi"},
  {
    "id":2,
    "name":"Ramyun"},
  {
    "id":3,
    "name":"Samgiopsal"},
  {
    "id":4,
    "name":"chukumi"}];


function renderFood(dish){
  return <Food key={dish.id} name={dish.name} />
}//renderFood() end

function App() {
  return (
    <div className="App"> 
    <h1>Hello</h1>
    {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
