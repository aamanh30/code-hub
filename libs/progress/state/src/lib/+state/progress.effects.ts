import { Injectable, inject } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { filter, map } from 'rxjs';
import { startProgress, stopProgress } from './progress.actions';
import { ProgressType } from '../models/progress-type';

@Injectable()
export class ProgressEffects {
  #actions$ = inject(Actions);

  startProgress$ = createEffect(() =>
    this.#actions$.pipe(
      filter(({ progressType }) => progressType === ProgressType.start),
      map(({ type: triggerAction }) => startProgress({ triggerAction }))
    )
  );

  stopProgress$ = createEffect(() =>
    this.#actions$.pipe(
      filter(({ progressType }) => progressType === ProgressType.stop),
      map(({ triggerAction, error }) => stopProgress({ triggerAction, error }))
    )
  );
}
