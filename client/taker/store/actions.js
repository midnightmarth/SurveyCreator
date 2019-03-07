export const EDIT_RANGE = "EDIT_RANGE";
export const EDIT_ORDER = "EDIT_ORDER";
export const EDIT_MULTI = "EDIT_MULTI";
export const ADD_QUESTION = "ADD_QUESTION";
// export const EDIT_BOOL = "EDIT_BOOL";

export function editRange(question, answer) {
  return { type: EDIT_RANGE, answer, question };
}
// export function editBool(question, bool) {
//   return { type: EDIT_BOOL, bool, question };
// }
export function editMulti(question, answer) {
  return { type: EDIT_MULTI, answer, question };
}
export function editOrder(question, answer, answerName) {
  return { type: EDIT_ORDER, answer, question, answerName };
}
export function addQuestion(question) {
  return { type: ADD_QUESTION, question };
}
