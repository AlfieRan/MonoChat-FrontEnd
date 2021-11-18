interface api_data {
  type: number;
  // types are as follows:
  // 0 = account signup
  // 1 = account login
  // 2 = account search
  // 3 = account info request
  // 4 = message request

  // type = 0, account signup
  FirstName?: string;
  SurName?: string;
  username?: string;
  password?: string;
  email?: string;
  //

  // type = 1, account login

  //

  // account search stuff
  search_term?: string;
  //
}

function Account_Search(search: string) {
  let data: api_data = {
    type: 2,
    search_term: search,
  };
  SendRequest(data);
}

function Account_SignUp(
  FirstName: string,
  SurName: string,
  password: string,
  confirmPassword: string,
  email: string
) {
  let returnCode: number = 0;
  /* return code stuff is as follows:
    0 = no error
    1 = password doesn't match confirm password
    */

  if (password === confirmPassword) {
    let data: api_data = {
      type: 0,
      FirstName: FirstName,
      SurName: SurName,
      email: email,
      password: password,
    };
    SendRequest(data);
  } else {
    returnCode = 1;
  }

  return returnCode;
}

function SendRequest(data: api_data) {}
