import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/actions/todoActions";

const Modal = ({ close, todo }) => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    // 1.aşama) inputtaki değeri al
    const newText = inputRef.current.value;

    // 2.aşama) todo nesnesinin title değerini güncelle
    const updatedTodo = {
      ...todo,
      text: newText,
      created_at: new Date().toLocaleDateString(),
    };

    // 3.aşama) reducer a elemanın güncelleneceğini haber ver
    dispatch(updateTodo(updatedTodo));

    // 4.aşama) modol ı kapat
    close();
  };
  return (
    <div className="modal bg-black d-block text-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
          </div>
          <div className="modal-body my-2">
            <label>Yeni Başlık</label>
            <input
              ref={inputRef}
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>

          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
            <button onClick={close} className="btn btn-secondary" type="button">
              İptal Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
