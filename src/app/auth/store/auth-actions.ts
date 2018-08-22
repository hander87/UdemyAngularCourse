import { Action } from '@ngrx/Store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'LOGOUT';

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}
export class SetToken implements Action {
  readonly type = SET_TOKEN;
    constructor(public payload: string) {

  }
}
export type AuthActions =
Signup |
Signin |
Logout |
SetToken;

