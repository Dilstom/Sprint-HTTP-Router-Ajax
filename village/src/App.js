import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
 constructor(props) {
  super(props);
  this.state = {
   smurfs: [],
  };
 }
 // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

 handlePost = newObj => {
  axios
   .post('http://localhost:3333/smurfs', newObj)
   .then(res => {
    this.setState({ smurfs: res.data });
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleDelete = id => {
  axios
   .delete(`http://localhost:3333/smurfs/${id}`)
   .then(res => {
    // console.log(res);
    this.setState({ smurfs: res.data });
   })
   .catch(err => {
    console.log(err);
   });
 };

 handleUpdate = (smurf, id) => {
  axios
   .put(`http://localhost:3333/smurfs/${id}`, smurf)
   .then(res => {
    this.setState({ smurfs: res.data, updateForm: false });
   })
   .catch(err => {
    console.log(err);
   });
 };

 componentDidMount() {
  axios
   .get('http://localhost:3333/smurfs')
   .then(res => {
    console.log(res);
    this.setState({ smurfs: res.data });
   })
   .catch(err => {
    console.log(err);
   });
 }
 // Notice what your map function is looping over and returning inside of Smurfs.
 // You'll need to make sure you have the right properties on state and pass them down to props.
 render() {
  return (
   <div className="App">
    <NavBar />
    <Route
     exact
     path="/"
     render={props => (
      <Smurfs
       smurfs={this.state.smurfs}
       handleDelete={this.handleDelete}
       handleUpdate={this.handleUpdate}
       updateForm={this.state.updateForm}
      />
     )}
    />
    <Route
     path="/smurf-form"
     render={props => <SmurfForm handlePost={this.handlePost} {...props} />}
    />
   </div>
  );
 }
}

export default App;
