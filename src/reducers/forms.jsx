import { ADD_FLOW_ELEMENT } from "../actions/forms";
import {
  addFlowElementValue,
  addNewFlowElement,
} from "../util/formReducerUtil";

//Todo : uncomment it later
// const forms = {};

// Todo - delete it later as its tmeporary solution
const forms = {
  1: {
    name: "",
    flow: [],
    theme: "light",
  },
};

const reducer = (state = forms, action) => {
  switch (action.type) {
    case "ADD_NEW_FORM":
      return {
        ...state,
        [action.payload.formId]: action.payload.form,
      };
    case "UPDATE_FORM_NAME":
      const formWithOldName = state[action.payload.formId];
      const newFormName = action.payload.newFormName;
      return {
        ...state,
        [action.payload.formId]: {
          ...formWithOldName,
          name: newFormName,
        },
      };

    case ADD_FLOW_ELEMENT:
      const formAfterAddFlowElement = addNewFlowElement(state, action.payload);
      return {
        ...state,
        [action.payload.formId]: formAfterAddFlowElement,
      };
    case "DELETE_FLOW_ELEMENT":
      const formAfterFlowElementDelete = addNewFlowElement(
        state,
        action.payload
      );
      return {
        ...state,
        [action.payload.formId]: formAfterFlowElementDelete,
      };

    case "UPDATE_FLOW_ELEMENT_VALUE":
      const formAfterFlowElementValueUpdate = addFlowElementValue(
        state,
        action.payload
      );

      return {
        ...state,
        [action.payload.formId]: formAfterFlowElementValueUpdate,
      };

    case "UPDATE_FORM_THEME":
      return {
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formName],
          theme: action.payload.theme,
        },
      };

    default:
      return state;
  }
};

export default reducer;
