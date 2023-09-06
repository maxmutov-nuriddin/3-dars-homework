import { Component } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { categories } from "../data/data.js";

class TodoForm extends Component {
  render() {
    const { submit, todo, handleTodo } = this.props;

    return (
      <Form  onSubmit={submit}>
        <Row className="gap-3">
          <Form.Group controlId="FirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              value={todo.FirstName}
              onChange={handleTodo}
              required
              type="text"
              placeholder="First name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              value={todo.LastName}
              onChange={handleTodo}
              required
              type="text"
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              value={todo.Phone}
              onChange={handleTodo}
              required
              type="number"
              placeholder="Phone"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={todo.Category}
              onChange={handleTodo}
              className="mt-3"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Button className="mt-3" type="submit">
          Submit form
        </Button>
      </Form>
    );
  }
}

export default TodoForm;