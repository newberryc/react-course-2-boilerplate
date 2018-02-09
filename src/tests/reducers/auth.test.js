import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const action = { type: '@@INIT' };
  const state = authReducer(undefined, action);
  expect(state).toEqual({});
});

test('should set state with uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'xyzzy'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear state for logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'xyzzy' }, action);
  expect(state).toEqual({});
});
