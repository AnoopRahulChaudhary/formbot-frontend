const ADD_FLOW_ELEMENT = "ADD_FLOW_ELEMENT";
const UPDATE_FLOW_ELEMENT_VALUE = "UPDATE_FLOW_ELEMENT_VALUE";

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

export {
  ADD_FLOW_ELEMENT,
  UPDATE_FLOW_ELEMENT_VALUE,
  addFlowElement,
  updateFlowElementValue,
};
