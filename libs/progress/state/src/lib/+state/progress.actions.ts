import { createActionGroup, props } from '@ngrx/store';
import { StartProgress } from '../models/start-progress';
import { StopProgress } from '../models/stop-progress';
import { PROGRESS_FEATURE_KEY } from './progress-key';

export const { startProgress, stopProgress } = createActionGroup({
  source: PROGRESS_FEATURE_KEY,
  events: {
    startProgress: props<StartProgress>(),
    stopProgress: props<StopProgress>(),
  },
});
