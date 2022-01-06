const LocalFrontURL: string = "http://localhost:3000/";
const PublicFrontURL: string = "https://monochat.app/";
const LocalApiURL: string = "http://localhost:8000/";
const PublicApiURL: string = "https://monochat.app/api/";

// config setup, change this as needed, should auto generate the rest of the environment variables
let DeveloperMode: boolean = true;

// Auto Generated environment variables
const GetFrontURL = () => {
  if (DeveloperMode) {
    return LocalFrontURL;
  } else {
    return PublicFrontURL;
  }
};

const GetApiURL = () => {
  if (DeveloperMode) {
    return LocalApiURL;
  } else {
    return PublicApiURL;
  }
};

// exporting generated variables
export const URL: string = GetFrontURL();
export const ApiURL: string = GetApiURL();
