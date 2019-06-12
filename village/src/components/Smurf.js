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
   <div>
    {this.state.updateForm ? (
     <div className="updateForm">
      <form onSubmit={this.updateSmurf}>
       <input
        onChange={this.handleInputChange}
        placeholder="name"
        value={this.state.name}
        name="name"
       />
       <input
        onChange={this.handleInputChange}
        placeholder="age"
        value={this.state.age}
        name="age"
       />
       <input
        onChange={this.handleInputChange}
        placeholder="height"
        value={this.state.height}
        name="height"
       />
       <button type="submit" onClick={this.handleUpdate}>
        Update
       </button>
       <button type="submit" onClick={this.handleCancel}>
        Cancel
       </button>
      </form>
     </div>
    ) : (
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
