import React from 'react';

function Food({name}){
  return <h1>I like {name}</h1>
}

const foodILike = ["Kimchi","Ramyun","Samgiopsal","chukumi"];

function App() {
  return (
    <div className="App"> 
    <h1>Hello</h1>
    {foodILike.map(dish => {
      return <Food name = {dish}/>
    })}
    </div>
  );
}

export default App;
