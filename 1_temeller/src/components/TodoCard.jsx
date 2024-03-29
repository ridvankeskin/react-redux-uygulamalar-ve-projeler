import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../store/actionTypes";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  // silme aksiyonunu reducer a ilet
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  // is_done değerini tersine çevir
  const toggleIsDone = () => {
    //  is_done değeri mevcut değerin tersi olan yeni nesne oluştur
    const updated = { ...todo, is_done: !todo.is_done };

    // store u güncelleneceğine reducer a haber ver
    dispatch(updateTodo(updated));
  };
  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6> {todo.is_done ? "Tamamlandı" : "Devam Ediyor"} </h6>
      <p> {todo.created_at} </p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenleme
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
