import { Action } from '@ngrx/store';

import { startProgress, stopProgress } from './progress.actions';
import { initialProgressState, progressReducer } from './progress.reducer';

describe('Progress Reducer', () => {
  describe('startProgress', () => {
    it('should add the type to action in progress', () => {
      const action = startProgress({
        triggerAction: '[TEST] test action type',
      });
      const { actionsInProgress } = progressReducer(
        initialProgressState,
        action
      );

      expect(actionsInProgress).toStrictEqual({
        [action.triggerAction]: 1,
      });
    });

    it('should increment the number for type to action in progress', () => {
      const action = startProgress({
        triggerAction: '[TEST] test action type',
      });
      const { actionsInProgress } = progressReducer(
        {
          ...initialProgressState,
          actionsInProgress: {
            [action.triggerAction]: 1,
          },
        },
        action
      );

      expect(actionsInProgress).toStrictEqual({
        [action.triggerAction]: 2,
      });
    });
  });

  describe('stopProgress', () => {
    it('should set the action in progress value to 0 if the action is not in progress', () => {
      const action = stopProgress({
        triggerAction: '[TEST] test action type',
      });
      const { actionsInProgress } = progressReducer(
        initialProgressState,
        action
      );

      expect(actionsInProgress).toStrictEqual({
        [action.triggerAction]: 0,
      });
    });

    it('should decrement the number for type to action in progress', () => {
      const action = stopProgress({
        triggerAction: '[TEST] test action type',
      });
      const { actionsInProgress } = progressReducer(
        {
          ...initialProgressState,
          actionsInProgress: {
            [action.triggerAction]: 1,
          },
        },
        action
      );

      expect(actionsInProgress).toStrictEqual({
        [action.triggerAction]: 0,
      });
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      expect(progressReducer(initialProgressState, <Action>{})).toBe(
        initialProgressState
      );
    });
  });
});
