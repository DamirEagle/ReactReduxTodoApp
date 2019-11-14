import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task";

class TaskLisk extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.Todos.map((item, index) => {
            return <Task item={item}></Task>;
          })}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  return {
    Todos: state.tasks.Todos
  };
}

export default connect(
  mapStateToProps,
  () => {}
)(TaskLisk);
