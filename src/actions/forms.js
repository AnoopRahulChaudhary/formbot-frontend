const ADD_FLOW_ELEMENT = "ADD_FLOW_ELEMENT";
const UPDATE_FLOW_ELEMENT_VALUE = "UPDATE_FLOW_ELEMENT_VALUE";
const DELETE_FLOW_ELEMENT = "DELETE_FLOW_ELEMENT";
const UPDATE_FORM_THEME = "UPDATE_FORM_THEME";
const UPDATE_FORM_NAME = "UPDATE_FORM_NAME";

function updateFormName(formId, newFormName) {
  const payload = {
    formId,
    newFormName,
  };

  return {
    type: "UPDATE_FORM_NAME",
    payload,
  };
}

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

function updateFormTheme(payload) {
  return {
    type: UPDATE_FORM_THEME,
    payload,
  };
}

export {
  ADD_FLOW_ELEMENT,
  UPDATE_FLOW_ELEMENT_VALUE,
  DELETE_FLOW_ELEMENT,
  UPDATE_FORM_THEME,
  UPDATE_FORM_NAME,
  addFlowElement,
  updateFlowElementValue,
  deleteFlowElement,
  updateFormTheme,
  updateFormName,
};
