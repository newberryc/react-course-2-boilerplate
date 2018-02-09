import { login, logout } from '../../actions/auth';

test('should setup logon action object', () => {
  const uid = 'xyzzy';
  const action = login(uid);
  expect(action).toEqual({
      type: 'LOGIN',
      uid
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
      type: 'LOGOUT'
  });
});
