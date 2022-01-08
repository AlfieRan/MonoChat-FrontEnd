const useLocalFrontEnd: boolean = true;
const useLocalBackEnd: boolean = false;

const LocalFrontURL: string = "http://localhost:3000/";
const PublicFrontURL: string = "https://monochat.app/";
const LocalApiURL: string = "http://localhost:8000/";
const PublicApiURL: string = "https://monochat.app/api/";

// Auto Generated environment variables
const GetFrontURL = () => {
  if (useLocalFrontEnd) {
    return LocalFrontURL;
  } else {
    return PublicFrontURL;
  }
};

const GetApiURL = () => {
  if (useLocalBackEnd) {
    return LocalApiURL;
  } else {
    return PublicApiURL;
  }
};

// exporting generated variables
export const URL: string = GetFrontURL();
export const ApiURL: string = GetApiURL();
