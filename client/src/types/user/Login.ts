export type ILoginResponse = ILoginSuccess | ILoginError;

export interface ILoginSuccess {
  name: string;
  email: string;
  roles: string[];
  token: string;
}

export interface ILoginError {
  message: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
