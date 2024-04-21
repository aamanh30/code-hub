import { PROGRESS_FEATURE_KEY } from './progress-key';
import { ProgressPartialState, initialProgressState } from './progress.reducer';
import {
  hasActionInProgress,
  hasSpecificActionInProgress,
} from './progress.selectors';

describe('Progress Selectors', () => {
  let state: ProgressPartialState;

  beforeEach(() => {
    state = {
      [PROGRESS_FEATURE_KEY]: {
        ...initialProgressState,
        actionsInProgress: {
          '[TEST] another test action': 0,
          '[TEST] other test action': 2,
          '[TEST] test action': 1,
        },
      },
    };
  });

  describe('hasSpecificActionInProgress', () => {
    it('should return true when the action is in progress', () => {
      expect(
        hasSpecificActionInProgress('[TEST] other test action').projector(
          state[PROGRESS_FEATURE_KEY]
        )
      ).toEqual(true);
      expect(
        hasSpecificActionInProgress('[TEST] test action').projector(
          state[PROGRESS_FEATURE_KEY]
        )
      ).toEqual(true);
    });

    it('should return false when the action is not in progress', () => {
      expect(
        hasSpecificActionInProgress('[TEST] another test action').projector(
          state[PROGRESS_FEATURE_KEY]
        )
      ).toEqual(false);
      expect(
        hasSpecificActionInProgress('[TEST] some action').projector(
          state[PROGRESS_FEATURE_KEY]
        )
      ).toEqual(false);
    });
  });

  describe('hasActionInProgress', () => {
    it('should return true when the any of the action is in progress', () => {
      expect(
        hasActionInProgress([
          '[TEST] other test action',
          '[TEST] test action',
        ]).projector(state[PROGRESS_FEATURE_KEY])
      ).toEqual(true);
      expect(
        hasActionInProgress([
          '[TEST] test action',
          '[TEST] another test action',
        ]).projector(state[PROGRESS_FEATURE_KEY])
      ).toEqual(true);
    });

    it('should return false when none of the actions are in progress', () => {
      expect(
        hasActionInProgress([
          '[TEST] another test action',
          '[TEST] some test action',
        ]).projector(state[PROGRESS_FEATURE_KEY])
      ).toEqual(false);
    });
  });
});
