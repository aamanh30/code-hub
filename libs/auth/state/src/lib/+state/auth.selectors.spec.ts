import { AUTH_FEATURE_KEY } from './auth-key';
import { AuthPartialState, initialAuthState } from './auth.reducer';
import { user as userSelector } from './auth.selectors';

describe('Auth Selectors', () => {
  const user = {};
  let state: AuthPartialState;
  const emptyState = {
    [AUTH_FEATURE_KEY]: initialAuthState,
  };

  beforeEach(() => {
    state = {
      [AUTH_FEATURE_KEY]: {
        user,
      },
    };
  });

  describe('user', () => {
    it('should return user details', () => {
      expect(userSelector(state)).toBe(user);
    });

    it('should return undefined', () => {
      expect(userSelector(emptyState)).toBeUndefined();
    });
  });
});
