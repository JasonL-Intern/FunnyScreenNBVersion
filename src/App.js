import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListComponent from './ItemListComponent';

function App() {
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid" style = {{marginTop: "100px"}}>
        <div className="container">
          <h1 className="display-4">Funny Screen</h1>
          <p className="lead">A list of pages to be looped.</p>
          <ItemListComponent></ItemListComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
