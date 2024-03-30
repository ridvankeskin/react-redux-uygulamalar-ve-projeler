// projede kullanılan aksiyon tipleri string şeklinde tanımlandığında dikkat dağınıklığı sonucu oluşabilecek ve tespit etmesi zaman alan hataların önünbe geçmek için tipleri bir nesne içerisinde tanımlayacağız

// Nesne şeklkinde tanımladığımız için artık oto tamamlamam özelliği sayesinde harf yazım hatalarından büyük oranda kurtuluyoruz

// 1. yöntem
const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

export default ActionTypes;

// 2. YÖNTEM
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
