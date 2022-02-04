const useLocalFront: boolean = false;
const useLocalBack: boolean = false;

const LocalFrontURL: string = "http://localhost:3000/";
const PublicFrontURL: string = "https://monochat.app/";
const LocalApiURL: string = "http://127.0.0.1:8000/";
const PublicApiURL: string = "https://monochat.herokuapp.com/";

// Auto Generated environment variables
const GetFrontURL = () => {
  if (useLocalFront) {
    return LocalFrontURL;
  } else {
    return PublicFrontURL;
  }
};

const GetApiURL = () => {
  if (useLocalBack) {
    return LocalApiURL;
  } else {
    return PublicApiURL;
  }
};

// exporting generated variables
export const URL: string = GetFrontURL();
export const ApiURL: string = GetApiURL();
