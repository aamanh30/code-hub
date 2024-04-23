import { createActionGroup, props } from '@ngrx/store';
import { PROGRESS_FEATURE_KEY } from './progress-key';
import { StartProgress, StopProgress } from '@code-hub/shared/state';

export const { startProgress, stopProgress } = createActionGroup({
  source: PROGRESS_FEATURE_KEY,
  events: {
    startProgress: props<StartProgress>(),
    stopProgress: props<StopProgress>(),
  },
});
