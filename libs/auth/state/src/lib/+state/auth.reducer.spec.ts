import { Action } from '@ngrx/store';
import { ProgressType } from '@code-hub/progress/state';

import { signIn, signInSuccess, signUp, signUpSuccess } from './auth.actions';
import { initialAuthState, authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('signUp', () => {
    it('should reset the state to initial state', () => {
      const { user } = authReducer(
        { ...initialAuthState, user: {} },
        signUp({ form: {}, progressType: ProgressType.start })
      );

      expect(user).toBeUndefined();
    });
  });

  describe('signUpSuccess', () => {
    it('should set the user in the state', () => {
      const { user } = authReducer(
        initialAuthState,
        signUpSuccess({
          user: {},
          progressType: ProgressType.stop,
          triggerAction: signUp.type,
        })
      );

      expect(user).toStrictEqual({});
    });
  });

  describe('signIn', () => {
    it('should reset the state to initial state', () => {
      const { user } = authReducer(
        { ...initialAuthState, user: {} },
        signIn({ form: {}, progressType: ProgressType.start })
      );

      expect(user).toBeUndefined();
    });
  });

  describe('signInSuccess', () => {
    it('should set the user in the state', () => {
      const { user } = authReducer(
        initialAuthState,
        signInSuccess({
          user: {},
          progressType: ProgressType.stop,
          triggerAction: signIn.type,
        })
      );

      expect(user).toStrictEqual({});
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      expect(authReducer(initialAuthState, <Action>{})).toBe(initialAuthState);
    });
  });
});
