import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTaskAC, deleteTaskAC } from "../../src/actions.js";

class Task extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.todo}</td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              this.props.deleteTask(this.props.item.taskId);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteTask: taskId => {
      dispatch(deleteTaskAC(taskId));
    }
  };
};
export default connect(() => {}, mapDispatchToProps)(Task);
