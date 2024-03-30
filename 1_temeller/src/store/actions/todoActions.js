//! aksiyon nesnesi oluşturan fonksiyon
// payload değeri dinamik olacağı için fonksiyonları tercih ettik
// ve payload değerini parametre olarak aldık
// bu foksiyonlar çağrıldığında bir aksiyon nesnesi döndürüyor
// bileşen içerisinde ki dispatch alanlarında ki kodları kısaltıp daha okunabilir yaparız.

import ActionTypes from "../actionTypes";

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.DELETE,
    payload,
  };
};

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});

export const addTodo = (payload) => ({
  type: ActionTypes.ADD,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET,
  payload,
});
