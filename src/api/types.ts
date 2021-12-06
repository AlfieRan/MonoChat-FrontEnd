export interface UserInfo {
  recieved: boolean;
  name: string;
  id: string;
}

interface ServiceInit {
  status: "init";
}
interface ServiceLoading {
  status: "loading";
}
interface ServiceLoaded<T> {
  status: "loaded";
  payload: T;
}
interface ServiceError {
  status: "error";
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
