import React from "react";
import Header from "./components/header.js";
import "./App.css";
import Taskbar from "./components/taskBar.js";
import TaskList from "./components/taskLisk.js";

function App() {
  return (
    <div className="container-fluid ">
      <Header />
      <Taskbar />
      <TaskList />
    </div>
  );
}

export default App;
