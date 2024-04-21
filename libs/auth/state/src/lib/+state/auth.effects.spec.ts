import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { ProgressType } from '@code-hub/progress/state';

import { signIn, signInSuccess, signUp, signUpSuccess } from './auth.actions';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions: Observable<Action>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AuthEffects);
  });

  describe('signUp$', () => {
    it('should dispatch sign up success action', () => {
      actions = hot('-a|', {
        a: signUp({
          form: {},
          progressType: ProgressType.start,
        }),
      });

      expect(effects.signUp$).toBeObservable(
        hot('-a|', {
          a: signUpSuccess({
            user: {},
            progressType: ProgressType.stop,
            triggerAction: signUp.type,
          }),
        })
      );
    });
  });

  describe('signIn$', () => {
    it('should dispatch sign in success action', () => {
      actions = hot('-a|', {
        a: signIn({
          form: {},
          progressType: ProgressType.start,
        }),
      });

      expect(effects.signIn$).toBeObservable(
        hot('-a|', {
          a: signInSuccess({
            user: {},
            progressType: ProgressType.stop,
            triggerAction: signIn.type,
          }),
        })
      );
    });
  });
});
