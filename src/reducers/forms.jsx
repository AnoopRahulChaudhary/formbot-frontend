import {
  ADD_FLOW_ELEMENT,
  ADD_NEW_FORM,
  DELETE_FLOW_ELEMENT,
  UPDATE_FLOW_ELEMENT_VALUE,
  UPDATE_FORM_NAME,
  UPDATE_FORM_THEME,
} from "../actions/forms";
import {
  updateFlowElementValue,
  addNewFlowElement,
  deleteFlowElement,
} from "../util/formReducerUtil";

const forms = {};

// Todo - delete it later as its tmeporary solution
// const forms = {
//   1: {
//     name: "",
//     flow: [],
//     theme: { name: "light", color: "#ffffff" },
//     refFolderId: ""
//   },
// };

const reducer = (state = forms, action) => {
  switch (action.type) {
    case ADD_NEW_FORM:
      return {
        ...state,
        [action.payload.formId]: action.payload.form,
      };
    case "ADD_FORMS":
      return {
        ...state,
        ...action.payload.forms,
      };
    case UPDATE_FORM_NAME:
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
    case DELETE_FLOW_ELEMENT:
      const formAfterFlowElementDelete = deleteFlowElement(
        state,
        action.payload
      );
      return {
        ...state,
        [action.payload.formId]: formAfterFlowElementDelete,
      };

    case UPDATE_FLOW_ELEMENT_VALUE:
      const formAfterFlowElementValueUpdate = updateFlowElementValue(
        state,
        action.payload
      );

      return {
        ...state,
        [action.payload.formId]: formAfterFlowElementValueUpdate,
      };

    case UPDATE_FORM_THEME:
      return {
        ...state,
        [action.payload.formId]: {
          ...state[action.payload.formId],
          theme: action.payload.theme,
        },
      };

    default:
      return state;
  }
};

export default reducer;
