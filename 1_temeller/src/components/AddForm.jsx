import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";

const AddForm = () => {
  // bu bileşen içerisinde dispatch methodunu kullanmamızı sağlar
  const dispatch = useDispatch();

  // form gönderildiğinde:
  const handleSubmit = (e) => {
    e.preventDefault();

    // store a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // veriyi store a kaydet

    dispatch(addTodo(newTodo));

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control "
        placeholder="örn: typescript projesi"
        type="text"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
