/*
! reducer
* state in nasıl değişeceğine karar verir.
* reducer normal bir fonksiyondur.
* ve bu fonksiyon iki parametre alır
* > state : reducer da tutulan verilerin son durumu
* > action : verilerin nasıl değişeceğini ifade eden nesne

* useReducer dan farklı olarak initialState i state parametresine varsayılan değer olarak veririz.
*/

const initialState = {
  todos: [],
  isDarkMode: true,
  x: "",
  y: "",
};

const todoReducer = (state = initialState, action) => {
  // aksiyonun type ına göre gerekli güncellemeyi yap
  switch (action.type) {
    // eğer ADD aksiyonu çalışırsa:
    case "ADD":
      return {
        ...state, // state deki diğer değerleri muhafaza et
        todos: state.todos.concat(action.payload), // ekle
      }; //

    // eğer delete aksiyonu çalışırsa
    case "DELETE":
      // diziden silinecek elemanı kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // reducer da tutulan todos değerini güncelle
      return { ...state, todos: filtred };

    // eğer UPDATE aksiyonu çalışırsa devreye girmeli
    case "UPDATE":
      // dizideki eski elemanın yerine gelen action payload ile gelen elemanı koy
      const updatedArrr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      // reducer'da tutulan todosu güncelle
      return { ...state, todos: updatedArrr };
    // eğer gelen aksiyon yukardakilerden biri değilse state i koru.
    default:
      return state;
  }
};

export default todoReducer;
