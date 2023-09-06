import { Component } from 'react';
import { Container, Tab, Table, Tabs } from 'react-bootstrap';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoFilter from './components/TodoFilter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tables from './components/Tables';

export class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    todo: {
      FirstName: '',
      LastName: '',
      Phone: '',
      Category: 'Family',
    },
    search: '',
    category: 'all',
  };

  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  render() {
    let { todos, search, category, todo } = this.state;


    todos.sort((a, b) => {
      const nameA = a.Phone;
      const nameB = b.Phone;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;

      return 0;
    });


    todos = todos.filter((todo) => todo.FirstName.toLowerCase().includes(search) || todo.LastName.toLowerCase().includes(search));

    if (category !== "all") {
      todos = todos.filter((todo) => todo.Category === category);
      console.log(todos);
    }

    const doneTodos = todos.filter((todo) => todo.done);
    const undoneTodos = todos.filter((todo) => !todo.done);

    const handleTodo = (e) => {
      let newTodo = { ...todo, [e.target.id]: e.target.value };
      this.setState({ todo: newTodo });
    };

    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
      console.log(e.target.value);
    };

    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    const submit = (e) => {
      e.preventDefault();
      let newTodos = [...todos, { ...todo, done: false, id: Date.now() }];
      console.log(todo);
      this.setState({
        todos: newTodos,
        todo: {
          FirstName: '',
          LastName: '',
          Phone: '',
          Category: 'family',
        },
      });
    };

    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
          console.log(todo.id);
        }
        return todo;
      });
      this.setState({ todos: newTodos });
    };

    const deleteTodo = (id) => {
      const { todos } = this.state;
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      this.setState({ todos: updatedTodos });
    };


    return (
      <>
        <Container>
          <TodoForm todo={todo} submit={submit} handleTodo={handleTodo} />
          <hr className="my-5" />
          <TodoFilter
            handleCategory={handleCategory}
            category={category}
            search={search}
            handleSearch={handleSearch} />
          <hr className="my-5" />
          <Tabs defaultActiveKey="all" variant="pills" className="my-3" justify>
            <Tab eventKey="all" title="All">
              <Table striped bordered hover>
                <thead>
                  <Tables />
                </thead>
                <tbody>
                  {todos.map((todo, i) => (
                    <TodoItem garbage={deleteTodo} doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="undone" title="💔">
              <Table striped bordered hover>
                <thead>
                  <Tables />
                </thead>
                <tbody>
                  {undoneTodos.map((todo, i) => (
                    <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="done" title="❤️">
              <Table striped bordered hover>
                <thead>
                  <Tables />
                </thead>
                <tbody>
                  {doneTodos.map((todo, i) => (
                    <TodoItem doneTodo={doneTodo} key={i} no={i + 1} {...todo} />
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Container>
      </>
    );
  }
}

export default App;