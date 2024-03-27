import { useDispatch } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  // silme aksiyonunu reducer a ilet
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: todo.id,
    });
  };
  // is_done değerini tersine çevir
  const toggleIsDone = () => {
    //  is_done değeri mevcut değerin tersi olan yeni nesne oluştur
    const updated = { ...todo, is_done: !todo.is_done };

    // store u güncelleneceğine reducer a haber ver
    dispatch({
      type: "UPDATE",
      payload: updated,
    });
  };
  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6> {todo.is_done ? "Tamamlandı" : "Devam Ediyor"} </h6>
      <p> {todo.created_at} </p>
      <button className="btn btn-primary">Düzenleme</button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        Tamamla
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>
    </div>
  );
};

export default TodoCard;
