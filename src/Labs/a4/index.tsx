import React from "react";
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter"
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent"
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import { useSelector } from "react-redux";
import { LabState } from "../store";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return(
    <>
      <h1>Assignment 4</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      
      <ReduxExamples/>
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter/>
      <EventObject/>
      <PassingFunctions theFunction={sayHello} />
      <ClickEvent />
      <PassingDataOnEvent />

    </>
  );
};
export default Assignment4;