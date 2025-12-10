import TodoForm from "../components/TodoForm";
import ListTodo from "../components/ListTodo";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Ma TodoList</h1>
      <TodoForm />
      <ListTodo filter="all" />
    </div>
  );
}
