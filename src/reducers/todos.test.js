import todos from './todos';

it('adds a todo', () => {
  const state = [{ id: 0, text: 'old todo', completed: true }];
  const action = { type: 'ADD_TODO', id: 1, text: 'Learn Redux' };
  const expectedState = [...state, { id: 1, text: 'Learn Redux', completed: false }];

  expect(todos(state, action)).toEqual(expectedState);
});

it('toggles a todo', () => {
  const action = { type: 'TOGGLE_TODO', id: 1 };
  const state = [
    { id: 0, text: 'my first todo', completed: false },
    { id: 1, text: 'my second todo', completed: false },
  ];
  const expectedState = [
    { id: 0, text: 'my first todo', completed: false },
    { id: 1, text: 'my second todo', completed: true },
  ];

  expect(todos(state, action)).toEqual(expectedState);
});
