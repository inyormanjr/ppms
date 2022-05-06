import * as fromDashboard from './dashboard.actions';

describe('yDashboards', () => {
  it('should return an action', () => {
    expect(fromDashboard.yDashboards().type).toBe('[Dashboard] Y Dashboards');
  });
});
