import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // yapacağımız bütün isteklere eklenecek olan headerlar
  headers: {
    accept: "application/json",
    // yetkilendirme
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  // bütün api isteklerinde gönderilecek ortak parametre
  params: {
    language: "tr-TR",
  },
});
