import React, { Component } from 'react';

class Smurf extends Component {
 constructor() {
  super();
  this.state = {
   name: '',
   age: '',
   height: '',
   updateForm: false,
  };
 }
 componentDidMount() {
  this.setState({
   name: this.props.name,
   age: this.props.age,
   height: this.props.height,
  });
 }

 handleDelete = e => {
  e.preventDefault();
  this.props.handleDelete(this.props.id);
 };

 handleUpdate = e => {
  e.preventDefault();
  const newObj = {
   name: this.state.name,
   age: this.state.age,
   height: this.state.height,
  };
  this.props.handleUpdate(newObj, this.props.id);
  this.setState({ updateForm: false });
 };

 updateFlag = e => {
  e.preventDefault();
  this.setState({ updateForm: true });
  //    this.props.handleDelete(this.props.id);
 };

 handleCancel = e => {
  e.preventDefault();
  this.setState({ updateForm: false });
 };

 handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
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
      <button onClick={this.updateFlag}>Update</button>
     </div>
    )}
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
