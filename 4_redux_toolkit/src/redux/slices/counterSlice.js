/*
 * Hem reducer'ı
 * Hem reducer'ın aksiyonlarını
 * createSlice methodu ile tek seferde tanımlayacağız

 ? slice oluşturma
 * import {createSlice} from "@reduxjs/toolkit"
 - - name: slice ismi > string
 - - initialState: başlangıç state'i
 - - reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder
*/

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, isDarkTheme: true },
  // state'in nasıl değişeceğine karar veren fonksiyonları tanımlarız
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },

    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// slice'ın oluşturduğu reducer fonksiyonunu store'a tanıtmak için export et
export default counterSlice.reducer;

// slice'ın olşuşturduğu aksiyon fonksiyonlarını bileşenlerde kullanmak için export et
export const { increase, decrease, setCount, toggleTheme } =
  counterSlice.actions;