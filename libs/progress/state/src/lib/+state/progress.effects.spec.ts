import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Action,
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { EMPTY, Observable } from 'rxjs';
import { hot } from 'jasmine-marbles';

import { startProgress, stopProgress } from './progress.actions';
import { ProgressEffects } from './progress.effects';
import { ProgressType } from '../models/progress-type';

describe('ProgressEffects', () => {
  const testActions = createActionGroup({
    source: 'TEST',
    events: {
      empty: emptyProps(),
      start: props<{ progressType: ProgressType }>(),
      stop: props<{
        progressType: ProgressType;
        triggerAction: string;
        error?: Partial<Error>;
      }>(),
    },
  });
  let actions$: Observable<Action>;
  let effects: ProgressEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgressEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProgressEffects);
  });

  describe('startProgress$', () => {
    it('should dispatch the start progress action when the progress type is start', () => {
      actions$ = hot('-a|', {
        a: testActions.start({ progressType: ProgressType.start }),
      });

      expect(effects.startProgress$).toBeObservable(
        hot('-a|', {
          a: startProgress({ triggerAction: testActions.start.type }),
        })
      );
    });

    // it('should dispatch the not start progress action when the progress type is falsy', () => {
    //   actions$ = hot('-a|', {
    //     a: testActions.empty(),
    //   });

    //   expect(effects.startProgress$).toBeObservable(hot('-a|', { a: EMPTY }));
    // });
  });

  describe('stopProgress$', () => {
    it('should dispatch the stop progress action when the progress type is stop', () => {
      actions$ = hot('-a|', {
        a: testActions.stop({
          progressType: ProgressType.stop,
          triggerAction: testActions.start.type,
        }),
      });

      expect(effects.stopProgress$).toBeObservable(
        hot('-a|', {
          a: stopProgress({
            triggerAction: testActions.start.type,
            error: undefined,
          }),
        })
      );
    });

    // it('should dispatch the not stop progress action when the progress type is falsy', () => {
    //   actions$ = hot('-a|', {
    //     a: testActions.empty(),
    //   });

    //   expect(effects.stopProgress$).toBeObservable(hot('-a|', { a: EMPTY }));
    // });
  });
});
