import { Component } from 'react'
import { Form, InputGroup } from "react-bootstrap";
import { categories } from "../data/data.js";

export default class TodoFilter extends Component {
  render() {
    const { handleSearch, search, handleCategory, category } = this.props;
    return (
      <InputGroup className="my-3">
        <Form.Control
          // ref={this.searchInputRef}
          value={search}
          onChange={handleSearch}
          placeholder="Search todo..."
        />
        <InputGroup.Text >
          <Form.Select
            value={category}
            onChange={handleCategory}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    )
  }
}
