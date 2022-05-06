import { eskeysReducer, initialState } from './eskeys.reducer';

describe('Eskeys Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = eskeysReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
