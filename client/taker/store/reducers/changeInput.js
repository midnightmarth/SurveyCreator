const changeInput = (state = [], action) => {
  let newState = [...state];
  console.log("newState when state is coppied", newState);
  let questionLocation;
  if (newState.length > 0) {
    for (let i in newState) {
      if (newState[i].question == action.question) {
        questionLocation = i;
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
    case "EDIT_ORDER":
      console.log("editing Order Question!");
      if (questionLocation) {
        let index = newState[questionLocation].answer.findIndex(i => {
          console.log(i.name, action.answerName);
          return i.name == action.answerName;
        });
        console.log(index);
        if (index !== -1) {
          newState[questionLocation].answer[index].answer = action.answer;
        } else {
          newState[questionLocation].answer.push({
            name: action.answerName,
            answer: action.answer
          });
        }
      } else {
        newState.push({
          question: action.question,
          answer: [{ name: action.answerName, answer: action.answer }]
        });
      }
      return newState;
    default:
      return newState;
  }
};
export default changeInput;
