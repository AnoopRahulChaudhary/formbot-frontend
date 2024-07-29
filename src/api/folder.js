import axios from "axios";
import { successResponse, errorResponse } from "./responseHandler";
import { getAuthConfig } from "../util/authConfig";

const baseURL = "http://localhost:4000";

async function getFolders() {
  try {
    const response = await axios.get(`${baseURL}/folder/`, getAuthConfig());
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

export { getFolders };
