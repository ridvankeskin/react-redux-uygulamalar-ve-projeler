import { useSelector } from "react-redux";

const ListTodos = () => {
  // store daki verilere abone olma
  // direk store u return edersek uyarı verir (cok fazla render olur)
  // genelde sadece ihtiyacımız olan reducer a aboıne oluruz.
  const storeState = useSelector((store) => store.todoReducer);

  return <div>ListTodos</div>;
};

export default ListTodos;
