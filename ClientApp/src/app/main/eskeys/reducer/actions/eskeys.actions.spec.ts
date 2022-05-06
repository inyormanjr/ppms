import * as fromEskeys from './eskeys.actions';

describe('loadEskeyss', () => {
  it('should return an action', () => {
    expect(fromEskeys.loadEskeyReceivables().type).toBe('[Eskeys] Load Eskeyss');
  });
});
