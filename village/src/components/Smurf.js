import React, { Component } from 'react';

class Smurf extends Component {
 constructor() {
  super();
  this.state = {};
 }
 handleDelete = e => {
  e.preventDefault();
  this.props.handleDelete(this.props.id);
 };
 render() {
  return (
   <div className="Smurf">
    <h3>{this.props.name}</h3>
    <strong>{this.props.height} tall</strong>
    <p>{this.props.age} smurf years old</p>
    <button onClick={this.handleDelete}>Delete</button>
   </div>
  );
 }
}

Smurf.defaultProps = {
 name: '',
 height: '',
 age: '',
};

export default Smurf;
