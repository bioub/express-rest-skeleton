const todos = [
  {
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 2,
    title: 'Introduire Express',
    completed: true,
  }
];

export function nextId() {
  const maxId = todos.reduce((acc, c) => c.id > acc ? c.id : acc, 0);
  return maxId + 1;
}

export async function find() {
  return todos;
}

export async function findById(id) {
  id = Number(id);
  const todo = todos.find((c) => c.id === id);

  if (!todo) {
    return null;
  }

  return todo;
}

export async function create(todo) {
  todo.id = nextId();

  todos.push(todo);

  return todo;
}

export async function findByIdAndDelete(id) {
  id = Number(id);
  const todo = todos.find((c) => c.id === id);

  if (!todo) {
    return null;
  }

  const index = todos.indexOf(todo);
  todos.splice(index, 1);

  return todo;
}

export async function findByIdAndReplace(id, newTodo) {
  id = Number(id);
  const todo = todos.find((c) => c.id === id);
  newTodo.id = id;

  if (!todo) {
    return null;
  }

  const index = todos.indexOf(todo);
  todos[index] = newTodo;

  return todo;
}

export async function findByIdAndUpdate(id, newTodo) {
  id = Number(id);
  const todo = todos.find((c) => c.id === id);

  if (!todo) {
    return null;
  }

  for (const [key, value] of Object.entries(newTodo)) {
    todo[key] = value;
  }

  return todo;
}
