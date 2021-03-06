import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
 render() {
  return (
   <div className="">
    <h1>Smurf Village</h1>
    <ul>
     {' '}
     {this.props.smurfs.map(smurf => {
      return (
       <Smurf
        name={smurf.name}
        id={smurf.id}
        age={smurf.age}
        height={smurf.height}
        key={smurf.id}
        handleDelete={this.props.handleDelete}
        handleUpdate={this.props.handleUpdate}
       />
      );
     })}
    </ul>
   </div>
  );
 }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
