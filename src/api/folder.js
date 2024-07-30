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

async function addFolder(name) {
  try {
    const response = await axios.post(
      `${baseURL}/folder/add`,
      { name },
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

async function deleteFolder(folderId) {
  try {
    const response = await axios.delete(
      `${baseURL}/folder/delete/${folderId}`,
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

export { getFolders, addFolder, deleteFolder };
