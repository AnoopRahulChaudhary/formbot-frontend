import axios from "axios";
import { successResponse, errorResponse } from "./responseHandler";

const baseURL = "http://localhost:4000";

async function registerUser(registrationDetails) {
  try {
    const response = await axios.post(`${baseURL}/user/register`, {
      ...registrationDetails,
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

async function loginUser(loginDetails) {
  try {
    const response = await axios.post(`${baseURL}/user/login`, {
      ...loginDetails,
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

export { registerUser, loginUser };
