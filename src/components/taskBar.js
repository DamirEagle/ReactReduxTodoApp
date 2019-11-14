import React from "react";
import { connect } from "react-redux";
import { addTaskAC, deleteTaskAC } from "../actions";
import { bindActionCreators } from "redux";
class taskbar extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={e => {
          this.submitTodo(e);
        }}
      >
        <input
          id="addTodoInput"
          onChange={e => this.updateInput(e)}
          type="text"
          ref="task"
          className="form-control mr-sm-2"
          placeholder="Enter some input"
          value={this.state.todo}
        />
        <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
          Add to do
        </button>
      </form>
    );
  }
  submitTodo(e) {
    e.preventDefault();
    if (this.state.todo) {
      this.props.addTask(this.state.todo);
      document.getElementById("addTodoInput").value = "";
      this.setState({ todo: "" });
    } else alert("It is empty");
  }
  updateInput = e => {
    this.setState({ todo: e.target.value });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: todo => {
      dispatch(addTaskAC(todo));
    },
    deleteTask: () => {
      dispatch(deleteTaskAC());
    }
  };
};

export default connect(() => {}, mapDispatchToProps)(taskbar);
