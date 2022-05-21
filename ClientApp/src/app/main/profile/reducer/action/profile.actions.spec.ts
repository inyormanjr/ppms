import * as fromProfile from './profile.actions';

describe('yProfiles', () => {
  it('should return an action', () => {
    expect(fromProfile.yProfiles().type).toBe('[Profile] Y Profiles');
  });
});
