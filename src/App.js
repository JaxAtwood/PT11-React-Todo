import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }
 
  toggleItem = itemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
        return item;
        }
      })
    });
  };

  componentDidMount() {
    this.addLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveLocalStorage.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveLocalStorage.bind(this)
    )
  }

  addLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({[key]: value})
        }
        catch(event) {
          this.setState({[key]: value})
        }
      }
    }
  }

  saveLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }

  addItem = tasks => {
    const newItem = {
      tasks: tasks,
      completed: false,
      id: Date.now()
    };  

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };
 
  clearSelected = () => {
    this.setState({
      tasks: 
      this.state.tasks.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="Box">
        <h1>Web Dev Topics to Study</h1>
        <TodoForm 
          addItem={this.addItem} 
          clearSelected={this.clearSelected}
          currentList={this.state.tasks}

        />
        <TodoList 
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
