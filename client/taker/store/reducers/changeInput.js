const changeInput = (state = [], action) => {
  let newState = [...state];
  console.log("newState when state is coppied", newState);
  let questionLocation;
  if (newState.length > 0) {
    for (let i in newState) {
      if (newState[i].question == action.question) {
        questionLocation = i;
        break;
      }
    }
    console.log("didnt find question in state");
  }

  switch (action.type) {
    case "EDIT_RANGE":
      if (questionLocation) {
        newState[questionLocation].answer = action.answer;
      } else {
        newState.push({
          question: action.question,
          answer: action.answer
        });
      }
      console.log("Pushed new info to state: ", newState);
      return newState;
    case "EDIT_MULTI":
      console.log("editing Multi Question!");
      if (questionLocation) {
        newState[questionLocation].answer = action.answer;
      } else {
        newState.push({
          question: action.question,
          answer: action.answer
        });
      }
      return newState;
    // case "EDIT_ORDER":
    //   console.log("editing Order Question!");
    //   return Object.assign(
    //     {},
    //     state,
    //     (initState[action.question] = action.array)
    //   );
    default:
      return newState;
  }
};
export default changeInput;
