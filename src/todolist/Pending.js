import ListTodo from "../components/ListTodo";

export default function Pending() {
  return (
    <div className="container">
      <h1>Tâches à faire ⏳</h1>
      <ListTodo filter="pending" />
    </div>
  );
}
