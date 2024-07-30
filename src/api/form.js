import axios from "axios";
import { successResponse, errorResponse } from "./responseHandler";
import { getAuthConfig } from "../util/authConfig";

const baseURL = "http://localhost:4000";

async function getForms() {
  try {
    const response = await axios.get(`${baseURL}/form/`, getAuthConfig());
    console.debug(response);
    return successResponse(response);
  } catch (error) {
    console.error(error);
    if (error.response) {
      return errorResponse(error.response);
    }

    throw error;
  }
}

async function addForm(formDetails) {
  try {
    const response = await axios.post(
      `${baseURL}/form/add`,
      {
        ...formDetails,
      },
      getAuthConfig()
    );
    console.debug(response);
    return successResponse(response);
  } catch (error) {
    console.error(error);
    if (error.response) {
      return errorResponse(error.response);
    }

    throw error;
  }
}

async function updateForm(formDetails) {
  try {
    const response = await axios.post(
      `${baseURL}/form/update/${formDetails._id}`,
      {
        ...formDetails,
      },
      getAuthConfig()
    );
    console.debug(response);
    return successResponse(response);
  } catch (error) {
    console.error(error);
    if (error.response) {
      return errorResponse(error.response);
    }

    throw error;
  }
}

async function getFormResponse(formId) {
  try {
    const response = await axios.get(
      `${baseURL}/form/response/${formId}`,
      getAuthConfig()
    );
    console.debug(response);
    return successResponse(response);
  } catch (error) {
    console.error(error);
    if (error.response) {
      return errorResponse(error.response);
    }

    throw error;
  }
}

export { addForm, getForms, updateForm, getFormResponse };
