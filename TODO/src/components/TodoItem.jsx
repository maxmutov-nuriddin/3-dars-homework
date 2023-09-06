import { Component } from 'react'


export default class TodoItem extends Component {
  render() {
    const { id, FirstName, LastName, Phone, Category, done, no, doneTodo, garbage } = this.props;

    return (
      <>
        <tr>
          <td>{no}</td>
          <td>{FirstName}</td>
          <td>{LastName}</td>
          <td>{Phone}</td>
          <td>{Category}</td>
          <td><button className="border border-0" onClick={() => doneTodo(id)}>{done ? '❤️' : '💔'}</button></td>
          <td className=' text-center'><button onClick={() => garbage(id)} className='border rounded-2 px-3 py-1 bg-danger text-light'>delete</button></td>
        </tr>
      </>
    )
  }
}
