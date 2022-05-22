import {
  activityViewReducer,
  initialActivityViewState,
} from './activity.reducer';

describe('Activity Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = activityViewReducer(initialActivityViewState, action);

      expect(result).toBe(initialActivityViewState);
    });
  });
});
