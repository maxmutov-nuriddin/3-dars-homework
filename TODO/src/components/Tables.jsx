import { Component } from 'react'

export default class Tables extends Component {
  render() {
    return (
      <tr>
        <th>No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Category</th>
        <th>Like</th>
        <th className='text-center'>Delete</th>
      </tr>
    )
  }
}
