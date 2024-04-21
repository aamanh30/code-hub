import { createReducer, on, Action } from '@ngrx/store';

import { signIn, signInSuccess, signUp, signUpSuccess } from './auth.actions';
import { AUTH_FEATURE_KEY } from './auth-key';

export type AuthState = {
  user: unknown;
};

export type AuthPartialState = {
  readonly [AUTH_FEATURE_KEY]: AuthState;
};

export const initialAuthState: AuthState = {
  user: undefined,
};

const reducer = createReducer(
  initialAuthState,
  on(signUp, signIn, (): AuthState => initialAuthState),
  on(
    signUpSuccess,
    signInSuccess,
    (state, { user }): AuthState => ({ ...state, user })
  )
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
