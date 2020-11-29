import { generateId } from "../utils";

const todos = [
  { title: "washing car", done: false, id: generateId() },
  { title: "go to the gas station", done: false, id: generateId() + 1 },
  { title: "take a bath", done: true, id: generateId() + 2 },
];

export default todos;
