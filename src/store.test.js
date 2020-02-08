import store from './store'

it('contains todos', () => {
  expect(store.getState().todos).toBeDefined();
});
