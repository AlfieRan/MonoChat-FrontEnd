import mode from "./mode";

const LocalFrontURL: string = "http://localhost:3000/";
const PublicFrontURL: string = "https://monochat.app/";
const LocalApiURL: string = "http://localhost:8000/";
const PublicApiURL: string = "https://monochat.app/api/";

// Auto Generated environment variables
const GetFrontURL = () => {
  if (mode) {
    return LocalFrontURL;
  } else {
    return PublicFrontURL;
  }
};

const GetApiURL = () => {
  if (mode) {
    return LocalApiURL;
  } else {
    return PublicApiURL;
  }
};

// exporting generated variables
export const URL: string = GetFrontURL();
export const ApiURL: string = GetApiURL();
