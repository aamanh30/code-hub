import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgressState } from './progress.reducer';
import { PROGRESS_FEATURE_KEY } from './progress-key';

const progressFeatureState =
  createFeatureSelector<ProgressState>(PROGRESS_FEATURE_KEY);

export const hasSpecificActionInProgress = (action: string) =>
  createSelector(
    progressFeatureState,
    (state) => !!state.actionsInProgress[action]
  );

export const hasActionInProgress = (actions: string[]) =>
  createSelector(progressFeatureState, (state) =>
    actions.some((action) => state.actionsInProgress[action])
  );
