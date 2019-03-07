import React from "react";
import ReactDOM from "react-dom";
import QuestionHolder from "./components/QuestionsHolder.jsx";
import axios from "axios";
import { createStore } from "redux";
// import RootReducer from "./store/rootReducer.js";
import Reducer from "./store/reducers/changeInput";
import { Provider } from "react-redux";
import * as actions from "./store/actions";

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const dispatcher = e => {
  console.log("Event is: ", e);
  const unsubscribe = store.subscribe(() => {
    // console.log("Logging state!: ", store.getState());
  });

  switch (e.target.type) {
    case "range":
      store.dispatch(actions.editRange(e.target.name, e.target.value));
      unsubscribe();

      break;
    case "radio":
      store.dispatch(actions.editMulti(e.target.name, e.target.value));
      unsubscribe();

      break;
    default:
      unsubscribe();
      break;
  }
  console.log("Dispatcher Called");
};

const sendData = () => {
  axios.post("/postSurveyData", store.getState());
};

const render = () => {
  return (
    <div>
      <h2>Take your Survey!</h2>
      <QuestionHolder store={store} dispatcher={dispatcher} />
      <button
        className="btn waves-effect waves-light"
        id="submitButton"
        type="submit"
        name="action"
        onClick={sendData}
      >
        Submit
        {/* <i className="material-icons right">send</i> */}
      </button>
    </div>
  );
};
ReactDOM.render(
  <Provider store={store}>{render()}</Provider>,
  document.getElementById("app")
);
