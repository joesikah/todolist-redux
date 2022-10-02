import React from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/todo_item/TodoItem";
//import useSelector to grab the data that is returned by redux
import { useSelector } from "react-redux";
import {selectTodoList} from './features/TodoSlice';


function App() {

  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(data => (
              //todo component
              <TodoItem 
                name={data.item}
                done={data.done}
                id={data._id}
              />
            ))
          }
        </div>

        <Input />
      </div>

      {/* Done */}
    </div>
  );
}

export default App;
