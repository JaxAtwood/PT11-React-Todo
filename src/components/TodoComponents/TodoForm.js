import React from "react";



class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {
        tasks: "",
        filtered: []
      };
    }

    changeHandler = event => {
        this.setState({ tasks: event.target.value });
      };
    
      submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.tasks);
        this.setState({ tasks: "" });
      };

      removeItem = e => {
        e.preventDefault();
        this.props.clearSelected(this.state.tasks);
    };

    render() {
        return (
            <div>
          <form className="todoForm" onSubmit={this.submitHandler}>
            <input
              required
              type="text"
              placeholder="add item here"
              tasks="tasks"
              value={this.state.tasks}
              onChange={this.changeHandler}
              name="tasks"
            />
            <button className="buttons" type="submit">Add</button>
            </form>
            <form onSubmit={this.removeItem}>
            <button  onClick={this.clearSelected} className="buttons" type="submit">Delete</button>
            </form>
            </div>
        );
      }
    }
    
    export default TodoForm;