import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
// import todos from "./todos";
import TodoList from "./todos/TodoList";

// import HelloReducer from "./HelloRedux/helloReducer";

const ReduxExamples = () => {
  return(
    <div>
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
      <h2>Redux Examples</h2>
      {/* <HelloReducer /> */}
    </div>
  );
};

export default ReduxExamples;