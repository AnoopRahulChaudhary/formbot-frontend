const ADD_FLOW_ELEMENT = "ADD_FLOW_ELEMENT";
const UPDATE_FLOW_ELEMENT_VALUE = "UPDATE_FLOW_ELEMENT_VALUE";
const DELETE_FLOW_ELEMENT = "DELETE_FLOW_ELEMENT";

function addFlowElement(payload) {
  return {
    type: ADD_FLOW_ELEMENT,
    payload,
  };
}

function updateFlowElementValue(payload) {
  return {
    type: UPDATE_FLOW_ELEMENT_VALUE,
    payload,
  };
}

function deleteFlowElement(payload) {
  return {
    type: DELETE_FLOW_ELEMENT,
    payload,
  };
}

export {
  ADD_FLOW_ELEMENT,
  UPDATE_FLOW_ELEMENT_VALUE,
  DELETE_FLOW_ELEMENT,
  addFlowElement,
  updateFlowElementValue,
  deleteFlowElement,
};
