import { ProgressType } from './progress-type';
import { StopProgress } from './stop-progress';

export type StartProgressDecorators = {
  progressType: ProgressType;
};

export type StopProgressDecorators = {
  progressType: ProgressType;
} & StopProgress;
