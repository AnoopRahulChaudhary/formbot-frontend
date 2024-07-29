import { TOKEN } from "../constants/localStorageKey";

function getAuthConfig() {
  const token = localStorage.getItem(TOKEN);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

export { getAuthConfig };
