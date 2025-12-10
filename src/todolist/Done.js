import ListTodo from "../components/ListTodo";

export default function Done() {
  return (
    <div className="container">
      <h1>Tâches terminées ✅</h1>
      <ListTodo filter="done" />
    </div>
  );
}
