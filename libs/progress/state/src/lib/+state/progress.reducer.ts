import { Action, createReducer, on } from '@ngrx/store';
import { startProgress, stopProgress } from './progress.actions';
import { PROGRESS_FEATURE_KEY } from './progress-key';

export type ProgressState = {
  actionsInProgress: Record<string, number>;
};

export type ProgressPartialState = {
  [PROGRESS_FEATURE_KEY]: ProgressState;
};
export const initialProgressState: ProgressState = {
  actionsInProgress: {},
};

export const reducer = createReducer(
  initialProgressState,
  on(
    startProgress,
    (state, { triggerAction }): ProgressState => ({
      ...state,
      actionsInProgress: {
        ...state.actionsInProgress,
        [triggerAction]: (state.actionsInProgress[triggerAction] ?? 0) + 1,
      },
    })
  ),
  on(
    stopProgress,
    (state, { triggerAction }): ProgressState => ({
      ...state,
      actionsInProgress: {
        ...state.actionsInProgress,
        [triggerAction]: state.actionsInProgress[triggerAction]
          ? state.actionsInProgress[triggerAction] - 1
          : 0,
      },
    })
  )
);

export const progressReducer = (
  state: ProgressState | undefined,
  action: Action
) => reducer(state, action);
