import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

// toolkit ile birlikte slice'daki state'de tutulan herhangi bir veriyi doğrudan güncelleyebiliyoruz. buda örneğin dizideki bir elemanı güncellememiz gerektiğinde map yerine splice ekleme gerektiğinde concat yerine push gibi methodları kullanmamızın önünü açacak

const initialState = {
  tasks: [
    {
      title: "Navbar Animasyonu",
      author: "Rıdvan",
      assigned_to: "Büşra",
      end_date: "1990-07-07",
      id: "b6f04e4c-fc73-4b36-ab27-ec6ae968b042",
    },
    {
      title: "Header Düzenlemesi",
      author: "Batur",
      assigned_to: "Taha",
      end_date: "2018-14-11",
      id: "29d3372f-7848-4aaf-8694-b6fab599fe1e",
    },
    {
      title: "Sayfa Dizaynı",
      author: "Barlas",
      assigned_to: "Enes",
      end_date: "2022-11-14",
      id: "d5568f07-9897-4fc4-8554-b120d0ee4678",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // a) task'e id ekle
      action.payload.id = v4();

      // b) veriyi diziye ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // 1.Yöntem Filter
      // const filtred = state.tasks.filter(
      //   (tasks) => tasks.id !== action.payload
      // );

      // state.tasks = filtred;

      // 2.Yöntem Splice
      //a) silincek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      //b) elemanı sil
      state.tasks.splice(index, 1);
    },
  },
});

// store'a tanıtmak için reducer'ı export et
export default crudSlice.reducer;

// projede kullanabilmek için aksiyonları export et
export const { addTask, deleteTask } = crudSlice.actions;
