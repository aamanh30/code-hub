import { StartProgress } from './start-progress';

export type StopProgress = StartProgress & {
  error?: Partial<Error>;
};
