import { makeAutoObservable } from "mobx";

export interface ITodo {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date
  description: string;
  status: boolean;
  toggle?: () => void;
}

class Todo implements ITodo {
  id: number;

  name: string;

  startDate: Date;

  endDate: Date;

  description: string;

  status: boolean;

  constructor(obj: ITodo) {
    makeAutoObservable(this);

    this.id = obj.id;
    this.name = obj.name;
    this.startDate = obj.startDate;
    this.endDate = obj.endDate;
    this.description = obj.description;
    this.status = !!obj.status;
  }

  toggle() {
    this.status = !this.status;
  }
}

export default Todo;
