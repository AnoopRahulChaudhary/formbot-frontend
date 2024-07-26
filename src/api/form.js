import axios from "axios";
import { successResponse, errorResponse } from "./responseHandler";

const baseURL = "http://localhost:4000";

async function addForm(formDetails) {
  try {
    const response = await axios.post(`${baseURL}/form/add`, {
      ...formDetails,
    });
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

export { addForm };
