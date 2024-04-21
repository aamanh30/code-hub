import { createActionGroup, props } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './auth-key';
import {
  StartProgressDecorators,
  StopProgressDecorators,
} from '@code-hub/progress/state';

export const {
  signIn,
  signInSuccess,
  signInError,
  signUp,
  signUpSuccess,
  signUpError,
} = createActionGroup({
  source: AUTH_FEATURE_KEY,
  events: {
    signUp: props<{ form: unknown } & StartProgressDecorators>(),
    signUpSuccess: props<{ user: unknown } & StopProgressDecorators>(),
    signUpError: props<StopProgressDecorators>(),
    signIn: props<{ form: unknown } & StartProgressDecorators>(),
    signInSuccess: props<{ user: unknown } & StopProgressDecorators>(),
    signInError: props<StopProgressDecorators>(),
  },
});
