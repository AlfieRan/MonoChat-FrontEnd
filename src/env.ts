const useLocalFront: boolean = true;
const useLocalBack: boolean = true;

const LocalFrontURL: string = "http://localhost.com:3000/";
const PublicFrontURL: string = "https://monochat.app/";
const LocalApiURL: string = "http://localhost.com:8000/";
const PublicApiURL: string = "https://api.monochat.app/";

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
