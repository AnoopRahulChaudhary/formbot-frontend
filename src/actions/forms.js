const ADD_FLOW_ELEMENT = "ADD_FLOW_ELEMENT";

function addFlowElement(payload) {
  return {
    type: ADD_FLOW_ELEMENT,
    payload,
  };
}

export { ADD_FLOW_ELEMENT, addFlowElement };
