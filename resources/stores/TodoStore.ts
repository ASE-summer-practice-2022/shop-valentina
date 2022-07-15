import { makeAutoObservable } from "mobx";

import { http } from "../configs";
import autoSave from "../helpers/autoSave";
import { ITodo, Todo } from "../models";

class TodoStore {
  todos: Todo[];

  currentId: number;

  get currentTodo() {
    return this.todos.find((todo) => todo.id === this.currentId);
  }

  constructor() {
    makeAutoObservable(this);
    this.currentId = -1;
    this.todos = [];
    autoSave(this, "todos");
    this.todos = this.todos.map((todo: ITodo) => new Todo(todo));
  }

  getTodos = async () => {
    const todos = await http.get("/api/todos");
    this.todos = todos.data.map((todo: ITodo) => new Todo(todo));
  };

  addTodo = async (todo: ITodo) => {
    const response = await http.post("/api/todos", todo);
    this.todos.push(new Todo(response.data as ITodo));
  };

  deleteTodo = async (id: number) => {
    await http.delete(`/api/todos/${id}`);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  updateTodo = async (todo: ITodo) => {
    const response = await http.put(`/api/todos/${todo.id}`, todo);
    const todoId = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[todoId] = new Todo(response.data as ITodo);
  };

  toggleCompleted = async (id: number) => {
    const todoId = this.todos.findIndex((todo) => todo.id === id);
    const todo = this.todos[todoId];
    todo.toggle();
    await http.put(`/api/todos/${todo.id}`, todo);
  };

  clearTodos = async () => {
    this.todos = [];
    await http.delete("/api/todos");
  };

  setCurrentId = (id: number) => {
    this.currentId = id;
  };
}

export default TodoStore;
