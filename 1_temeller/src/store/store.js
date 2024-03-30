/*
!store oluşturma
* 1. aşama: react kütüphanesinden "createStore" methodu import edilir
* 2. aşama: store içerisinde tutulacak olan her bir veri için reducer lar oluşturulur.
* 3. aşama: oluşturulan reducer lar "combineReducers" İLE BİRLEŞTİRİLİR
* 4. aşama: store a oluşan birleştirilen reducer lar tanıtılır.

*/

import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

// birden fazla reducer varsa bunları birleştireceğiz

const rootRaducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluşturulur
const store = createStore(rootRaducer);

// projeye tanıtmak için export ediyoruz
export default store;
