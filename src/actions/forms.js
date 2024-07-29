const ADD_NEW_FORM = "ADD_NEW_FORM";
const ADD_EXISTING_FORMS = "ADD_EXISTING_FORMS";
const ADD_FLOW_ELEMENT = "ADD_FLOW_ELEMENT";
const UPDATE_FLOW_ELEMENT_VALUE = "UPDATE_FLOW_ELEMENT_VALUE";
const DELETE_FLOW_ELEMENT = "DELETE_FLOW_ELEMENT";
const UPDATE_FORM_THEME = "UPDATE_FORM_THEME";
const UPDATE_FORM_NAME = "UPDATE_FORM_NAME";

function addNewForm(formId, selectedFolderId) {
  const form = {
    name: "",
    flow: [],
    theme: { name: "light", color: "#ffffff" },
  };
  if (selectedFolderId) {
    form.refFolderId = selectedFolderId;
  }

  const payload = {
    formId,
    form,
  };

  return {
    type: ADD_NEW_FORM,
    payload,
  };
}

function addExisitngForms(existingForms) {
  const forms = {};
  let formKey = 1;
  for (const form of existingForms) {
    forms[formKey] = form;
    formKey++;
  }

  return {
    type: ADD_EXISTING_FORMS,
    payload: {
      forms,
    },
  };
}

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
  ADD_EXISTING_FORMS,
  UPDATE_FLOW_ELEMENT_VALUE,
  DELETE_FLOW_ELEMENT,
  UPDATE_FORM_THEME,
  UPDATE_FORM_NAME,
  ADD_NEW_FORM,
  addFlowElement,
  updateFlowElementValue,
  deleteFlowElement,
  updateFormTheme,
  updateFormName,
  addNewForm,
  addExisitngForms,
};
