import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, concatMap } from 'rxjs';
import { ProgressType } from '@code-hub/progress/state';
import {
  signIn,
  signInError,
  signInSuccess,
  signUp,
  signUpError,
  signUpSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  #actions$ = inject(Actions);

  signUp$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(signUp),
      concatMap(() =>
        of(
          signUpSuccess({
            user: {},
            progressType: ProgressType.stop,
            triggerAction: signUp.type,
          })
        )
      ),
      catchError((error: Error) =>
        of(
          signUpError({
            error,
            progressType: ProgressType.stop,
            triggerAction: signUp.type,
          })
        )
      )
    )
  );

  signIn$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(signIn),
      concatMap(() =>
        of(
          signInSuccess({
            user: {},
            progressType: ProgressType.stop,
            triggerAction: signIn.type,
          })
        )
      ),
      catchError((error: Error) =>
        of(
          signInError({
            error,
            progressType: ProgressType.stop,
            triggerAction: signIn.type,
          })
        )
      )
    )
  );
}
