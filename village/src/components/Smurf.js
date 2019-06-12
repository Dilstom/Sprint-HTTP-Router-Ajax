import React, { Component } from 'react';
import {
 Col,
 Button,
 Form,
 FormGroup,
 Label,
 Input,
 Card,
 CardTitle,
 CardText,
} from 'reactstrap';

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
      <Form onSubmit={this.updateSmurf}>
       <FormGroup row>
        <Label for="name" sm={2}>
         Name
        </Label>
        <Col sm={10}>
         <Input
          onChange={this.handleInputChange}
          placeholder="name"
          value={this.state.name}
          name="name"
          id="name"
         />
        </Col>
       </FormGroup>
       <FormGroup row>
        <Label for="height" sm={2}>
         Height
        </Label>
        <Col sm={10}>
         <Input
          onChange={this.handleInputChange}
          placeholder="height"
          value={this.state.height}
          name="height"
          id="height"
         />
        </Col>
       </FormGroup>
       <FormGroup row>
        <Label for="age" sm={2}>
         Age
        </Label>
        <Col sm={10}>
         <Input
          onChange={this.handleInputChange}
          placeholder="age"
          value={this.state.age}
          name="age"
          id="age"
         />
        </Col>
       </FormGroup>
       <button type="submit" onClick={this.handleUpdate}>
        Update
       </button>
       <button type="submit" onClick={this.handleCancel}>
        Cancel
       </button>
      </Form>
     </div>
    ) : (
     <div className="Smurf">
      <Col>
       <Card body>
        <CardTitle>{this.props.name}</CardTitle>
        <CardText>{this.props.height}</CardText>
        <CardText>{this.props.age}</CardText>
        <div className="displayFlex">
         <Button onClick={this.updateFlag}>Update</Button>
         <Button onClick={this.handleDelete}>Delete</Button>
        </div>
       </Card>
      </Col>
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
