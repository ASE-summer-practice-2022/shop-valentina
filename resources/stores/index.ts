import { createContext } from "react";

import TodoStore from "./TodoStore";
import UserStore from "./UserStore";

const RootContext = createContext({
  todoStore: new TodoStore(),
  userStore: new UserStore(),
});

export default RootContext;
